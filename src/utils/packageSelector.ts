export function selectPackages(truckSize: number, packages: number[]): number[] {        
  const uniquePackages = Array.from(new Set(packages)).sort();
  const target = truckSize - 30;
  const seen = new Set();

  for (let i = uniquePackages.length - 1; i >= 0; i--) {
    const current = uniquePackages[i];
    const needed = target - current;

    if (current !== needed && seen.has(needed) ) {
      return [needed, current];
    }
    seen.add(current);
  }

  return [];
}

export function validatePackages(truckSize: number, packages: string): { isValid: boolean; error?: string } {
  if (truckSize <= 30) {
    return { isValid: false, error: "Truck size must be greater than 30 to accommodate safety space." }
  }

  const packageSizes = packages.split(",").map(Number).filter(size => !isNaN(size) && size > 0)
  
  if (packageSizes.length < 2) {
    return { isValid: false, error: "Please enter at least two valid package sizes." }
  }

  return { isValid: true }
}