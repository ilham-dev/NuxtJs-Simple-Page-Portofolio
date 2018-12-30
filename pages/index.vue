<template>
  <section class="hero is-medium is-primary is-fullheight">
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
          <a href="https://www.instagram.com/ilham_sabar/" target="_blank">
            <img width="46" height="46" src="~/assets/images/IG.svg">
          </a>
          <a target="_blank" href="https://github.com/ilham-dev">
            <img width="46" height="46" src="~/assets/images/github.svg">
          </a>
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
  margin-top: 0.2em;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
</style>

