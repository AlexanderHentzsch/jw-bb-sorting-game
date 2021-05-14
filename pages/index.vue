<template>
    <v-container style="width: 100%; height: 100%" class="d-flex align-center justify-center">
        <v-card width="350px" height="500px">
            <v-card-title>
                <h1 class="text-center" style="font-size: 28px; width: 100%">Bibelbücher sortieren</h1>
            </v-card-title>
            <v-card-text class="text-center">
                <nuxt-link to="/game" style="text-decoration: none">
                    <v-btn>Neues Spiel</v-btn>
                </nuxt-link>
            </v-card-text>
            <v-card-actions class="d-block">
                <v-row no-gutters>
                    <v-col>
                        Stil
                    </v-col>
                </v-row>
                <v-btn @click="setThemeMode('dark')" fab>
                    <v-icon>mdi-weather-night</v-icon>
                </v-btn>
                <v-btn @click="setThemeMode('light')" fab>
                    <v-icon>mdi-weather-sunny</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog: true
        }
    },
    methods: {
        setThemeMode(val) {
            if (val === 'dark')
                this.$store.commit("settings/setDarkMode", true);

            if (val === 'light')
                this.$store.commit("settings/setDarkMode", false);
        }
    }
}
</script>
