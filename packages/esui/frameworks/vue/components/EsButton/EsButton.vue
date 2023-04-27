<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EsButton',
    props: {
        type: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
});
</script>
<template>
    <button>
        <slot></slot>
    </button>
</template>