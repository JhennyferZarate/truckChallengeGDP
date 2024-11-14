import { ref, computed } from 'vue'
import { selectPackages, validatePackages } from '@/utils/packageSelector'
import type { PackageState } from '@/types/package.types'
import { MESSAGES } from '@/constants/messages'

export function usePackageSelection() {
  const state = ref<PackageState>({
    truckSize: 0,
    packages: "",
    selectedPackages: [],
    error: ""
  })

  const hasResults = computed(() => state.value.selectedPackages.length > 0)
  const totalPackageSize = computed(() => {
    const [p1, p2] = state.value.selectedPackages
    return p1 + p2
  })

  const remainingSpace = computed(() => {
    if (!hasResults.value) return 0
    return state.value.truckSize - totalPackageSize.value - 30
  })

  function handleSubmit() {
    state.value.error = ""
    const validation = validatePackages(state.value.truckSize, state.value.packages)

    if (!validation.isValid) {
      state.value.error = validation.error || ""
      return
    }

    const packageSizes = state.value.packages
      .split(",")
      .map(Number)
      .filter(size => !isNaN(size) && size > 0)

    const selected = selectPackages(state.value.truckSize, packageSizes)
    
    if (selected.length === 0) {
      state.value.error = MESSAGES.ERRORS.NO_COMBINATION
    } else {
      state.value.selectedPackages = selected
    }
  }

  return {
    state,
    hasResults,
    totalPackageSize,
    remainingSpace,
    handleSubmit
  }
}
