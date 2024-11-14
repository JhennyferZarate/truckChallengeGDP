<template>
    <label :for="htmlFor" class="block text-sm font-medium text-gray-700 mb-1" :class="{ 'text-red-500': error }">
        <slot></slot>
        <span v-if="required" class="text-red-500 ml-1">*</span>
        <span v-if="error" class="text-sm text-red-500 ml-2">
            <span class="material-symbols-outlined material-icons text-sm align-text-bottom">error</span>
            {{ error }}
        </span>
    </label>
</template>

<script lang="ts">
export default {
    name: 'BaseLabel',
    props: {
        htmlFor: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
</style>
