<template>
    <v-container style="width: 100%; height: 100%" class="d-flex align-center justify-center">
        <v-card width="350px" height="500px" class="px-5 d-flex flex-column">
            <v-card-title class="flex-grow-0 pb-12">
                <h1 class="text-center" style="font-size: 28px; width: 100%">Spielvariante</h1>
            </v-card-title>
            <v-card-text class="text-center flex-grow-1">
                <v-row>
                    <v-col>
                        <v-btn to="/game" nuxt block elevation="0" outlined tile x-large class="mb-2">Sortieren</v-btn>
                        <v-btn to="/game2" nuxt block elevation="0" outlined tile x-large class="mb-2">Geordnet</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "gametype"
}
</script>

<style scoped>

</style>