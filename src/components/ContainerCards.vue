<template>
  <p>Card Container</p>
  <div class="cards-container">
    <SingleCard
      v-for="hero in data.heroes"
      :key="hero.id"
      :image="hero.image"
      :title="hero.title"
      :description="hero.description"
    />
  </div>
</template>

<script setup lang="ts">
import SingleCard from '../components/cards/card/SingleCard.vue'

import data from '../data/heroes.json'
</script>

<style scoped>
.cards-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 40px 0;
  justify-content: center;
}
</style>
