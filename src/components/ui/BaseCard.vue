<template>
    <div class="flex items-center justify-center mt-5">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
                <slot name="header"></slot>
            </div>
            <div class="p-6">
                <slot></slot>
            </div>
            <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'BaseCard'
};
</script>
