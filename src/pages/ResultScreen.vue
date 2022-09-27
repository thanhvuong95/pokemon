<template>
  <div class="result-screen">
    <h2>✨ Congratulations ✨</h2>
    <p>
      Your score: <b>{{ Math.round(score / 1000) }}</b> seconds
    </p>
    <button @click="onStartAgain">Start Again</button>
  </div>
</template>
<script>
export default {
  props: {
    score: Number,
  },

  methods: {
    onStartAgain() {
      this.$emit("onReset");
    },
  },
};
</script>
<style lang="scss">
@import "../styles/result-screen";
</style>
