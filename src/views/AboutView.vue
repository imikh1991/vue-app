<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped lang="scss">
@import '../style/abstracts/variables';
@import '../style/vars/shadows.scss';
.about {
  margin-top: 100px;
  width: 670px;
  min-height: 400px;
  max-height: 80vh;
  border-radius: 25px;
  box-shadow: $shadow-main;
  position: relative;
  padding: 25px;

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
