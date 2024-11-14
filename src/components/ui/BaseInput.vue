<template>
    <div class="relative">
        <input :value="modelValue" @input="handleInput" :type="type" :id="id" :name="name" :placeholder="placeholder"
            :required="required" :disabled="disabled"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            :class="{
                'pl-10': hasLeadingIcon,
                'pr-10': hasTrailingIcon
            }">
        <span v-if="hasLeadingIcon" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <span>{{ leadingIcon }}</span>
        </span>
        <span v-if="hasTrailingIcon" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <span>{{ trailingIcon }}</span>
        </span>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
    name: 'BaseInput',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        leadingIcon: {
            type: String,
            default: ''
        },
        trailingIcon: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const hasLeadingIcon = computed(() => !!props.leadingIcon)
        const hasTrailingIcon = computed(() => !!props.trailingIcon)

        const handleInput = (event: Event) => {
            const target = event.target as HTMLInputElement
            let value: string | number = target.value

            if (props.type === 'number' && value !== '') {
                value = Number(value)
            }

            emit('update:modelValue', value)
        }

        return {
            hasLeadingIcon,
            hasTrailingIcon,
            handleInput
        }
    }
}
</script>
