<template>
  <div>
    <form class="container" @submit.prevent="sendForm">
      <BaseSelect :options="categories" v-model="event.category" label="Select a category" />

      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput v-model="event.title" label="Title" type="text" />

        <BaseInput v-model="event.description" label="Description" type="text" />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" vertical />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>
        <div>
          <BaseCheckbox v-model="event.extras.music" label="Live Music" />
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  methods: {
    sendForm() {
      axios
        .post('https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', this.event)
        .then(function (response) {
          alert('Submitted')
          console.log('Response', response)
        })
        .catch(function (err) {
          console.log('Error', err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/abstracts/variables';
@import '../../style/vars/shadows.scss';
.container {
  width: 670px;
  min-height: 400px;
  max-height: fit-content;
  border-radius: 25px;
  box-shadow: $shadow-main;
  position: relative;
  padding: 25px;
  margin: 20px;
  transition: 0.2s;
  background-color: $color-bg;
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: hidden;
  color: $color-second;

  @media (max-width: 760px) {
    flex-direction: column;
    width: 300px;
  }
}

.info {
  overflow: auto;
}

.img {
  width: 300px;
  height: 300px;
  box-shadow: $shadow-main;
  border-radius: 100%;

  @media (max-width: 760px) {
    width: 200px;
    height: 200px;
  }
}

.title {
  color: $color-main;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;

  @media (max-width: 760px) {
    font-size: 32px;
  }
}

.status {
  color: $color-active;
  font-weight: 800;
  margin-bottom: 60px;

  @media (max-width: 760px) {
    margin-bottom: 40px;
  }
}
</style>
