<template>
  <div class="main-screen">
    <h2>Pokemon</h2>
    <span>Select mode to start game.</span>
    <div class="main-screen__modes">
      <div
        class="main-screen__mode"
        v-for="(mode, index) in modes"
        :key="index"
        @click="onStartGame(mode.totalCells)"
      >
        <span>{{ mode.title }}</span>
        <span>{{ mode.level }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { modes } from "../constants/modes";

export default {
  components: {},

  emits: ["onStart"],

  data: () => ({
    modes,
  }),

  methods: {
    onStartGame(cells) {
      this.$emit("onStart", cells);
    },
  },
};
</script>
<style lang="scss">
@import "../styles/main-screen";
</style>
