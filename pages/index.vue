<template>
    <v-container style="width: 100%; height: 100%" class="d-flex align-center justify-center">
        <v-card width="350px" height="500px" class="px-5 d-flex flex-column">
            <v-card-title class="flex-grow-0 pb-12">
                <h1 class="text-center" style="font-size: 28px; width: 100%">🎮<br/>Bibelbücher sortieren</h1>
            </v-card-title>
            <v-card-text class="text-center flex-grow-1">
                <v-row>
                    <v-col>
                        <v-btn to="/game" nuxt block elevation="0" outlined tile x-large class="mb-2">Neues Spiel</v-btn>
                        <v-btn to="/game" nuxt block elevation="0" outlined tile x-large class="mb-2">Spielverlauf</v-btn>
                        <v-btn to="/game" nuxt block elevation="0" outlined tile x-large class="mb-2">Einstellungen</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="flex-grow-0 pb-8" align="end">
                <v-row no-gutters class="text-center d-flex flex-column">
                    <v-col class="text-uppercase">
                        Stil
                    </v-col>
                    <v-col>
                        <v-btn @click="setThemeMode('dark')" fab icon text x-large>
                            <v-icon>mdi-weather-night</v-icon>
                        </v-btn>
                        <v-btn @click="setThemeMode('light')" fab icon text x-large>
                            <v-icon>mdi-weather-sunny</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
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
