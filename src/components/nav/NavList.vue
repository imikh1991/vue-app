<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageNames from '../../base/enum/pageNames'
import RouteList from '../../base/enum/routeList'
</script>

<template>
  <nav class="nav">
    <RouterLink class="nav__link" :to="RouteList.homePage">{{ PageNames.mainPage }}</RouterLink>
    <RouterLink class="nav__link" :to="RouteList.formPage">{{ PageNames.formPage }}</RouterLink>
    <RouterLink class="nav__link" :to="RouteList.aboutPage">{{ PageNames.aboutPage }}</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
@import '../../style/abstracts/variables';

.nav {
  position: absolute;
  margin: 15px 0 0 auto;
  display: flex;
  gap: 20px;
  font-size: 16px;
  top: 30px;
  right: 20px;

  &__link,
  &__link:active {
    color: $light-main;
    text-decoration: none;
    transition: 0.2s;
    font-weight: 500;
  }

  &__link:hover {
    color: $active-main;
  }

  @media (max-width: 555px) {
    top: 17px;
    gap: 10px;
  }
}
</style>
