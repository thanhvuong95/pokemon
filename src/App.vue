<template>
  <div class="container">
    <template v-if="screen === 'DEFAULT'">
      <main-screen @onStart="handleStart($event)" />
    </template>
    <template v-if="screen === 'PLAY'">
      <play-screen :cards="cards" @onFinish="handleFinish" />
    </template>
    <template v-if="screen === 'RESULT'">
      <result-screen :score="score" @onReset="handleReset" />
    </template>
  </div>
</template>

<script>
import MainScreen from "./pages/MainScreen.vue";
import PlayScreen from "./pages/PlayScreen.vue";
import ResultScreen from "./pages/ResultScreen.vue";
import { SCREEN_DEFAULT, SCREEN_PLAY, SCREEN_RESULT } from "./constants/screen";
import { randomUnique, shuffle } from "./utils";

export default {
  name: "App",
  components: {
    MainScreen,
    PlayScreen,
    ResultScreen,
  },

  data: () => ({
    screen: SCREEN_DEFAULT,
    cards: [],
    score: 0,
  }),

  methods: {
    handleReset() {
      this.screen = SCREEN_DEFAULT;
    },

    handleStart(totalCells) {
      const START = 1; // total image pokemon
      const END = 64; // total image pokemon
      const cards = randomUnique(totalCells / 2, START, END);
      this.screen = SCREEN_PLAY;
      this.score = new Date().getTime();
      this.cards = shuffle(shuffle(shuffle([...cards, ...cards])));
    },

    handleFinish() {
      this.score = new Date().getTime() - this.score;
      this.screen = SCREEN_RESULT;
    },
  },
};
</script>

<style lang="scss"></style>
