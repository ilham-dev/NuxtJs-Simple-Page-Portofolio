<template>
  <section class="hero is-medium is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="has-text-centered">
          <figure class="image is-flex is-128x128 has-image-centered">
            <img class="is-rounded" src="~/assets/images/bg.jpg">
          </figure>
        </div>
        <h1 class="title is-1 pt-is-1">Hi I'm Ilham Sabar</h1>
        <h2 class="subtitle">Web Developer</h2>
        <div class="is-row">
          <span class="icon has-text-info">
            <i class="fas fa-info-circle"></i>
          </span>
          <span class="icon has-text-success">
            <i class="fas fa-check-square"></i>
          </span>
          <span class="icon has-text-warning">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
          <span class="icon has-text-danger">
            <i class="fas fa-ban"></i>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss">
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.pt-is-1 {
  margin-top: 1em;
}
</style>

