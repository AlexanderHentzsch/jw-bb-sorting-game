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
                           v-for="(name, index) in hebrew()"
                           :key="name"
                           tile
                           :style="coloring(index)"
                           @click="select(index)">
                        {{ name }}
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
                           v-for="(name, index) in greek()"
                           :key="name"
                           tile
                           :style="coloring(index + 39)"
                           @click="select(index + 39)">
                        {{ name }}
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>

        <v-row :class="classScore">
            <v-col class="text-center font-weight-light">
                {{ correct }} von 66
            </v-col>
        </v-row>

        <PauseMenu :display="display.pause" :init-game="initGame" :resume="resume"/>

        <FinishMenu :display="display.finish" :init-game="initGame" :playtime="playtime"/>
    </v-container>
</template>

<script>
import * as helper from "~/plugins/helper";

import PauseMenu from "~/components/PauseMenu";
import FinishMenu from "~/components/FinishMenu";
import GameEngine from "~/mixins/gameEngine";
import BibleBookLanguages from "~/classes/BibleBookLanguages";

export default {
    name: "game",
    components: {FinishMenu, PauseMenu},
    mixins: [GameEngine],
    data() {
        return {
            books: [],
            current: [],
            correct: 0,
            errors: 0,
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
        },
        classScore() {
            let bg = "grey lighten-3";

            if (this.$store.getters["settings/isDarkMode"])
                bg = "grey darken-3"

            return bg + " mt-12";
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
            const lang = this.$store.getters['game/getLang'];
            const type = this.$store.getters['game/getLangType'];

            this.books = new BibleBookLanguages()[lang][type];

            if (this.$store.getters["game/isSorted"]) {
                let hebrew = helper.randomArray(this.books.hebrew);
                let greek = helper.randomArray(this.books.greek);
                this.current = hebrew.concat(greek);
            } else {
                this.current = helper.randomArray(this.books.hebrew.concat(this.books.greek));
            }

            this.errors = 0;
            this.passedSeconds = 0;
            this.selected = null;
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

            console.log(this.books)
            // color correct
            if (this.current[index] === this.books.both[index])
                return {backgroundColor: this.config.correct.backgroundColor}
        },
        setCorrect() {
            let r = 0;
            for (let i in this.books.both) {
                if (this.books.both[i] === this.current[i])
                    r = ++r;
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