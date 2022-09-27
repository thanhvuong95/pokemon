<template>
  <div class="play-screen">
    <div
      class="play-screen-grid"
      :style="{
        gridTemplateColumns: `repeat(${Math.sqrt(cards.length)}, 100px`,
      }"
    >
      <card-item
        v-for="(card, index) of cards"
        :ref="`cardRef-${index}`"
        :key="index"
        :card="{ index, value: card }"
        :selected="selectedCards.length"
        @onSelected="handleSelected($event)"
      />
    </div>
  </div>
</template>
<script>
import CardItem from "../components/CardItem.vue";
export default {
  components: {
    CardItem,
  },

  data: () => ({
    selectedCards: [],
    count: 0,
  }),

  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleSelected(card) {
      if (this.selectedCards.length === 2) return;

      this.selectedCards.push(card);

      if (this.selectedCards.length === 2) {
        const [firstCard, secondCard] = this.selectedCards;
        const isEqual = firstCard.value === secondCard.value;

        if (isEqual) {
          // hidden both cards
          this.$refs[`cardRef-${firstCard.index}`][0].onHiddenBackCard();
          this.$refs[`cardRef-${secondCard.index}`][0].onHiddenBackCard();
          this.selectedCards = [];
          this.count++;
          const isFinish = this.cards.length / 2 === this.count;
          if (isFinish) {
            this.$emit("onFinish");
          }
        } else {
          // timer to second card selected flip back before it's re-flip
          setTimeout(() => {
            this.$refs[`cardRef-${firstCard.index}`][0].onFlipFront();
            this.$refs[`cardRef-${secondCard.index}`][0].onFlipFront();
            this.selectedCards = [];
          }, 800);
        }
      }
    },
  },
};
</script>
<style lang="scss">
@import "../styles/play-screen";
</style>
