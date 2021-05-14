<template>
    <v-app dark>
        <v-main>
            <nuxt/>
        </v-main>
    </v-app>
</template>

<script>
export default {
    computed: {
        darkMode() {
            return this.$store.getters["settings/isDarkMode"];
        },
    },
    watch: {
        darkMode() {
            this.setDarkMode();
        },
    },
    mounted() {
        this.setDarkMode();
    },
    methods: {
        setDarkMode() {
            this.$vuetify.theme.dark = this.darkMode;
        },
    },
}
</script>

<style>
/* For vuetify: Scroll bar in the main section of a v-app https://stackoverflow.com/a/54870831 */
html {
    overflow-y: auto
}
</style>
