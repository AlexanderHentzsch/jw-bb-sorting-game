<template>
    <v-card width="100%" height="100%" class="d-flex align-center justify-center">
        <nuxt-link to="/game" style="text-decoration: none">
            <v-btn>Neues Spiel</v-btn>
        </nuxt-link>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            dialog: true
        }
    },
}
</script>
