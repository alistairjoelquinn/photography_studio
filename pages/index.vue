<template>
  <div>
    <section class="hero tomato">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 header-text">Teniya Salazar</h1>
          <h2 class="subtitle is-6 header-text">Online Photo Studio</h2>
        </div>
      </div>
    </section>
    <div class="columns main-content">
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </div>
  </div>
</template>

<script>
import PhotoCard from "~/components/PhotoCard";

export default {
  components: {
    PhotoCard,
  },
};
</script>

<style lang="scss" >
section {
  margin-bottom: 20px;
}
.main-content {
  width: 90vw;
  margin: 0 auto;
}
.tomato {
  background-color: $main-color;
}
.header-text {
  color: antiquewhite;
  text-shadow: 1px 1px 2px black;
  font-family: "Roboto", sans-serif;
}
</style>
