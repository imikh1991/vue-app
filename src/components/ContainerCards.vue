<template>
    <p>Card Container</p>
    <div class="card-flex-container">
    <div v-for="(card, index) in cardInfo" :key="index" class="card">
      <img :src="card.image" alt="Card Image 1" />
      <h2>{{ card.title }}</h2>
      <p>{{ card.text }}</p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ICardProps {
    image: string;
    title: string;
    text: string;
}

const cardInfo: ICardProps[] = [
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
            title: 'Card Title 1',
            text: 'Some quick on the card title and make up content.',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
            title: 'Card Title 2',
            text: 'Some quick example text to build title and make up content',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
            title: 'Card Title 3',
            text: 'Some quick example title and make up content',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
            title: 'Card Title 4',
            text: 'Some quick example title and make up content',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/55.jpeg',
            title: 'Card Title 5',
            text: 'Some quick example title and make up content',
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/66.jpeg',
            title: 'Card Title 6',
            text: 'Some quick example title and make up content',
        },
    ];

</script>


<style scoped>
#root {
    max-width: 50vw;
    margin: 0 auto;
    padding: 2rem;
}

.main {
    background-color: #242424;
}

.card-flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

</style>
