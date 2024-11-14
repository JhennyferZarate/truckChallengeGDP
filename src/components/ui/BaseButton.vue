<template>
    <button class="px-4 py-2 bg-primary bg-cyan-500 text-white rounded-md hover:bg-primary-dark transition-colors" :type="type"
        :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default {
    name: 'BaseButton',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
};
</script>
