<template>
  <div class="card" @click="onFlipBack">
    <div class="card-inner" :class="{ flipped }">
      <div class="card-face card-face--front">
        <div></div>
      </div>
      <div class="card-face card-face--back" :class="{ hidden }">
        <div
          class="card-content"
          :style="{
            backgroundImage: `url('${require('@/assets/images/' +
              card.value +
              '.png')}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    flipped: false,
    hidden: false,
  }),

  props: {
    card: Object,
    selected: Number,
  },

  emits: ["onSelected"],

  methods: {
    onFlipBack() {
      if (!this.flipped && this.selected < 2) {
        this.flipped = true;
        this.$emit("onSelected", {
          value: this.card.value,
          index: this.card.index,
        });
      }
    },
    onFlipFront() {
      this.flipped = false;
    },

    onHiddenBackCard() {
      this.hidden = true;
    },
  },
};
</script>
<style lang="scss">
@import "../styles/card";
</style>
