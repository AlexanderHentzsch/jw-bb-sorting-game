<template>
    <v-container class="px-6 px-md-0">
        <v-row>
            <v-col class="text-center">
                <v-btn @click="pause()" x-large tile plain>{{ playtime }} Pause</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col class="px-1">
                        <h2 class="text-uppercase font-weight-light text-body-1">
                            Hebräisch-Aramäische Schriften
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn class="bibelbuch-quadratisch"
                           v-for="(value, index) in containerHebrew()"
                           :key="index"
                           tile
                           :style="coloring(index)"
                           @click="select(index)">
                        {{ value }}
                    </v-btn>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="mt-6 mt-md-0">
                <v-row>
                    <v-col class="px-1">
                        <h2 class="text-uppercase font-weight-light text-body-1">
                            Christliche Griechische Schriften
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn class="bibelbuch-quadratisch"
                           v-for="(value, index) in containerGreek()"
                           :key="index"
                           tile
                           :style="coloring(index + 39)"
                           @click="select(index + 39)">
                        {{ value }}
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>

        <v-row v-if="searchedBooks.length > 0">
            <v-col class="text-center">
                {{ searchedBooks[0] }}
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center">
                Fehler: {{ errors }}
            </v-col>
        </v-row>

        <v-row :class="classScore">
            <v-col class="text-center font-weight-light">
                {{ correct }} von 66
            </v-col>
        </v-row>

        <v-dialog v-model="display.pause" persistent overlay-opacity="1" max-width="500px">
            <v-card>
                <v-card-title class="justify-center">Pause</v-card-title>
                <v-card-text>
                    <v-btn x-large block @click="resume()">Weiter</v-btn>
                    <v-btn x-large block @click="initGame()">Neustarten</v-btn>
                    <nuxt-link to="/" style="text-decoration: none">
                        <v-btn x-large block>Hauptmenü</v-btn>
                    </nuxt-link>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="display.finish" persistent overlay-opacity="1" max-width="500px">
            <v-card>
                <v-card-title class="justify-center">Beendet</v-card-title>
                <v-card-text>
                    Du hast das Spiel erfolgreich nach {{ playtime }} abgeschlossen. <br/>
                    Dabei hast du {{ errors }} Fehler gemacht.
                    <v-btn x-large block @click="initGame()">Neustarten</v-btn>
                    <nuxt-link to="/" style="text-decoration: none">
                        <v-btn x-large block>Hauptmenü</v-btn>
                    </nuxt-link>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import * as helper from "~/plugins/helper";
import books from "~/biblebooks";

export default {
    name: "game2",
    data() {
        return {
            current: [],
            searchedBooks: [],
            correct: 0,
            errors: 0,
            config: {
                correct: {
                    backgroundColor: '#328d2f',
                },
            },
            passedSeconds: 0,
            intervalHandler: null,
            display: {
                pause: false,
                finish: false,
            },
        }
    },
    computed: {
        playtime() {
            let min = Math.floor(this.passedSeconds / 60);
            let sec = this.passedSeconds - (min * 60);
            return min + ":" + sec.toString().padStart(2, "0");
        },
        classScore() {
            let bg = "grey lighten-3";

            if (this.$store.getters["settings/isDarkMode"])
                bg = "grey darken-3"

            return bg + " mt-12";
        },
        _books() {
            const lang = this.$store.getters['game/getLang'];
            const type = this.$store.getters['game/getType'];

            const hebrew = helper.clone(books[lang][type].hebrew);
            const greek = helper.clone(books[lang][type].greek);
            const all = hebrew.concat(greek);

            return {
                hebrew,
                greek,
                all,
            }
        }
    },
    mounted() {
        this.initGame();
    },
    watch: {
        correct() {
            this.isFinish();
        }
    },
    methods: {
        initGame() {
            const sorted = this.$store.getters["game/getSorted"];

            let hebrew = this._books.hebrew;
            let greek = this._books.greek;

            if (sorted) {
                hebrew = helper.randomArray(hebrew);
                greek = helper.randomArray(greek);
                this.searchedBooks = hebrew.concat(greek);
            } else {
                this.searchedBooks = helper.randomArray(hebrew.concat(greek));
            }

            let i = 0;
            while (i < 66) {
                this.current[i] = "";
                i++;
            }
            this.passedSeconds = 0;
            this.correct = 0;
            this.displayOff();
            this.startStopwatch();
        },
        displayOff() {
            for (let key in this.display) {
                this.display[key] = false;
            }
        },
        startStopwatch() {
            this.intervalHandler = setInterval(() => {
                this.passedSeconds = ++this.passedSeconds;
            }, 1000);
        },
        select(index) {
            if (this.searchedBooks[0] === this._books.all[index]) {
                this.current[index] = this.searchedBooks[0];
                this.searchedBooks.shift();
                this.setCorrect();
            } else {
                this.errors++;
            }
        },
        coloring(index) {
            // TODO Refactor
            // color correct
            if (this.current[index] === this._books.all[index])
                return {backgroundColor: this.config.correct.backgroundColor}
        },
        setCorrect() {
            let r = 0;
            for (let i in this._books.all) {
                if (this._books.all[i] === this.current[i])
                    r++;
            }
            this.correct = r;
        },
        isFinish() {
            if (this.correct !== 66)
                return;

            clearInterval(this.intervalHandler);
            this.display.finish = true;
        },
        pause() {
            clearInterval(this.intervalHandler);
            this.display.pause = true;
        },
        resume() {
            this.display.pause = false;
            this.startStopwatch();
        },
        containerHebrew() {
            return this.current.filter((v, i) => i < 39);
        },
        containerGreek() {
            return this.current.filter((v, i) => i > 38);
        },
    }
}
</script>

<style scoped>
.bibelbuch-quadratisch {
    width: 64px !important;
    height: 64px !important;
    text-transform: none !important;
    margin: 3px;
}
</style>