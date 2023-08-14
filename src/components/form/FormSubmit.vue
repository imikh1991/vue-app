<template>
  <div>
    <h1>Create an event</h1>
    <form class="container">
      <BaseSelect :options="categories" v-model="event.category" label="Select a category" />

      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />

      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="event.extras.catering" class="field" />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="event.extras.music" class="field" />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
// import BaseSelect from './BaseSelect.vue';
// import BaseInput from './BaseInput.vue';

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
      }
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
  max-height: 80vh;
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
