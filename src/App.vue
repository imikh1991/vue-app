<script setup lang="ts">

import NavList from './components/nav/NavList.vue'
</script>
<template>
  <header>
    <div class="wrapper">
      <NavList />
    </div>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
@import './style/abstracts/variables';

.header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 30px 0px;
  font-size: 50px;
  line-height: normal;

  &__name {
    width: 347px;
    font-size: inherit;
    width: min-content;
  }

  &__page-name {
    align-self: flex-end;
    color: $active-main;
    font-weight: bold;
  }

  @media (max-width: 830px) {
    font-size: 35px;
  }

  @media (max-width: 555px) {
    padding: 45px 0px 20px;
    font-size: 22px;
    gap: 10px;
  }
}
</style>
