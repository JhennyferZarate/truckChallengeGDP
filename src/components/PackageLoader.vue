<template>
    <div class="w-full max-w-2xl mx-auto">
        <base-card>
            <template #header>
                <h2 class="text-xl font-bold">Package Loader</h2>
                <p class="text-gray-600">Select the optimal pair of packages for the truck</p>
            </template>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <base-label for="truckSize">{{ MESSAGES.LABELS.TRUCK_SIZE }}</base-label>
                    <base-input id="truckSize" v-model.number="state.truckSize" type="number"
                        :placeholder="MESSAGES.PLACEHOLDERS.TRUCK_SIZE" required />
                </div>

                <div>
                    <base-label for="packages">{{ MESSAGES.LABELS.PACKAGE_SIZES }}</base-label>
                    <base-input id="packages" v-model="state.packages" :placeholder="MESSAGES.PLACEHOLDERS.PACKAGES"
                        required />
                </div>

                <base-button type="submit">
                    {{ MESSAGES.BUTTONS.SELECT_PACKAGES }}
                </base-button>
            </form>

            <div v-if="state.error" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
                <span class="material-symbols-outlined material-icons mr-2">error</span>
                {{ state.error }}
            </div>

            <div v-if="hasResults && !state.error" class="mt-6">
                <h3 class="text-lg font-semibold mb-2">{{ MESSAGES.LABELS.SELECTED_PACKAGES }}</h3>
                <div class="flex justify-center items-center space-x-4">
                    <base-card v-for="(size, index) in state.selectedPackages" :key="index"
                        class="w-24 h-24 flex flex-col items-center justify-center text-center">
                        <span class="material-symbols-outlined text-4xl">inventory_2</span>
                        <span class="mt-2 font-bold">{{ size }}</span>
                    </base-card>
                </div>

                <div class="mt-4 flex justify-center items-center">
                    <span class="material-symbols-outlined text-5xl">local_shipping</span>
                    <div class="ml-4">
                        <p>{{ MESSAGES.LABELS.TRUCK_SIZE }}: {{ state.truckSize }}</p>
                        <p>{{ MESSAGES.LABELS.PACKAGES }} {{ state.selectedPackages[0] }} + {{ state.selectedPackages[1]
                            }} = {{ totalPackageSize }}</p>
                        <p>{{ MESSAGES.LABELS.SAFETY_SPACE }} 30</p>
                        <p>{{ MESSAGES.LABELS.REMAINING_SPACE }} {{ remainingSpace }}</p>
                    </div>
                </div>
            </div>
        </base-card>
    </div>
</template>

<script setup lang="ts">
import { usePackageSelection } from './composables/usePackageSelection'
import { MESSAGES } from '@/constants/messages';
import BaseLabel from '@/components/ui/BaseLabel.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'


const {
    state,
    hasResults,
    totalPackageSize,
    remainingSpace,
    handleSubmit
} = usePackageSelection()
</script>

<style scoped></style>
