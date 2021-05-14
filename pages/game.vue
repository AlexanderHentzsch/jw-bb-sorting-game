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
                    <h2>Hebräisch-Aramäische Schriften</h2>
                </v-row>
                <v-row>
                    <v-btn class="bibelbuch-quadratisch"
                           v-for="(name, index) in hebrew()"
                           :key="name"
                           :style="coloring(index)"
                           @click="select(index)">
                        {{ name }}
                    </v-btn>
                </v-row>
            </v-col>
            <v-col cols="12" md="6" class="mt-6 mt-md-0">
                <v-row>
                    <h2>Christliche Griechische Schriften</h2>
                </v-row>
                <v-row>
                    <v-btn class="bibelbuch-quadratisch"
                           v-for="(name, index) in greek()"
                           :key="name"
                           :style="coloring(index + 39)"
                           @click="select(index + 39)">
                        {{ name }}
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>

        <v-row>{{ correct }}/66</v-row>

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
                    Du hast das Spiel erfolgreich nach {{playtime}} abgeschlossen.
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
    name: "game",
    data() {
        return {
            current: [],
            correct: 0,
            selected: null,
            config: {
                selected: {
                    backgroundColor: '#2b67ce',
                },
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
            const lang = this.$store.getters['game/getLang'];
            const type = this.$store.getters['game/getType'];
            const sorted = this.$store.getters['game/getSorted'];

            let hebrew = helper.clone(books[lang][type].hebrew);
            let greek = helper.clone(books[lang][type].greek);

            if (sorted) {
                hebrew = helper.randomArray(hebrew);
                greek = helper.randomArray(greek);
                this.current = hebrew.concat(greek);
            } else {
                this.current = helper.randomArray(hebrew.concat(greek));
            }

            this.passedSeconds = 0;
            this.selected = null;
            this.correct = 0;
            this.displayOff();
            this.startStopwatch();
        },
        displayOff(){
          for(let key in this.display) {
              this.display[key] = false;
          }
        },
        startStopwatch() {
            this.intervalHandler = setInterval(() => {
                this.passedSeconds = ++this.passedSeconds;
            }, 1000);
        },
        hebrew() {
            return this.current.filter((v, i) => i < 39);
        },
        greek() {
            return this.current.filter((v, i) => i > 38);
        },
        select(index) {
            if (this.selected === null)
                return this.selected = index;

            if (this.selected === index)
                return this.selected = null;

            const firstValue = this.current[this.selected];
            const secondValue = this.current[index];

            this.current[index] = firstValue;
            this.current[this.selected] = secondValue;

            this.selected = null;
            this.setCorrect();
        },
        coloring(index) {
            // TODO Refactor
            // color selected
            if (index === this.selected)
                return {'backgroundColor': this.config.selected.backgroundColor};

            // color correct
            const sum = books.de.short.hebrew.concat(books.de.short.greek);
            if (this.current[index] === sum[index])
                return {backgroundColor: this.config.correct.backgroundColor}
        },
        setCorrect() {
            const _books = books.de.short.hebrew.concat(books.de.short.greek);
            let r = 0;
            for (let i in _books) {
                if (_books[i] === this.current[i])
                    r = ++r;
            }
            this.correct = r;
        },
        isFinish() {
            console.log('finish')
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