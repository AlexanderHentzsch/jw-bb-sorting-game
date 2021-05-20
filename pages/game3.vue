<template>
    <v-container class="px-6 px-md-0">
        <v-row>
            <v-col class="text-center">
                <v-btn @click="pause()" x-large tile plain>{{ playtime }} Pause</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <template v-for="name in showingRandomBooks">
                    <v-btn class="bibelbuch-quadratisch"
                           :key="name"
                           tile
                           disabled
                    >
                        {{ name }}
                    </v-btn>
                </template>
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
                    <template v-for="(name, index) in hebrew">
                        <v-btn class="bibelbuch-quadratisch"
                               v-if="name !== ''"
                               :key="name"
                               tile
                               @click="select(index)">
                            {{ name }}
                        </v-btn>
                    </template>
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
                    <template v-for="(name, index) in greek">
                        <v-btn class="bibelbuch-quadratisch"
                               v-if="name !== ''"
                               :key="name"
                               tile
                               @click="select(index + 39)">
                            {{ name }}
                        </v-btn>
                    </template>
                </v-row>
            </v-col>
        </v-row>

        <v-row :class="classScore">
            <v-col class="text-center font-weight-light">
                <p class="my-2">{{ correct }} von 66</p>
                <p class="my-2">Fehler: {{ errors }}</p>
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
                    Du hast das Spiel erfolgreich nach {{ playtime }} abgeschlossen.
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
    name: "game3",
    data() {
        return {
            current: [],
            randomBooks: [],
            errors: 0,
            config: {
                correct: {
                    backgroundColor: '#328d2f',
                }
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
        hebrew() {
            return this.randomBooks.filter((v, i) => i < 39);
        },
        greek() {
            return this.randomBooks.filter((v, i) => i > 38);
        },
        showingRandomBooks() {
            let r = [];
            const current = helper.clone(this.current).reverse();
            for (let i in current) {
                const v = current[i];
                r.push(v);
                if (r.length > 2)
                    break;
            }
            r = r.reverse();
            r.push("");
            return r;
        },
        _books() {
            const lang = this.$store.getters['game/getLang'];
            const type = this.$store.getters['game/getLangType'];

            const hebrew = helper.clone(books[lang][type].hebrew);
            const greek = helper.clone(books[lang][type].greek);
            const all = hebrew.concat(greek);

            return {
                hebrew,
                greek,
                all,
            }
        },
        correct() {
            let r = 0;
            for (let i in this._books.all) {
                if (this._books.all[i] === this.current[i])
                    r = ++r;
            }
            return r;
        },
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
            let hebrew = helper.clone(this._books.hebrew);
            let greek = helper.clone(this._books.greek);

            if (this.$store.getters["game/isSorted"]) {
                hebrew = helper.randomArray(hebrew);
                greek = helper.randomArray(greek);
                this.randomBooks = hebrew.concat(greek);
            } else {
                this.randomBooks = helper.randomArray(hebrew.concat(greek));
            }

            this.current = [];
            this.passedSeconds = 0;
            this.errors = 0;
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
            const currentIndex = this.current.length;
            if (this._books.all[currentIndex] === this.randomBooks[index]) {
                const val = this.randomBooks[index];
                this.current.push(val);
                this.$set(this.randomBooks, index, "");
            } else {
                this.errors++;
            }
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
        }
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