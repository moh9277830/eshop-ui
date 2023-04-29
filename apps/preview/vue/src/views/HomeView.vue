<script lang="ts">
import { defineComponent } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

export default defineComponent({
    name: 'HomeView',
    components: { TheWelcome },
    setup() {
        return {

        }
    }
});
</script>

<template>
    <main>
        <TheWelcome msg="Vite + Vue" />
    </main>
</template>