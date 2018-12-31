<template>
  <section class="hero is-medium is-warning is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="has-text-centered mb-is-1">
          <h1 class="title is-1 pt-is-1">My Contact</h1>
          <!-- <h2 class="subtitle">Android Java, Web, API</h2> -->
          <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li class="is-active">
                <nuxt-link to="/contact">Contact</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="is-row has-text-left">
          <div class="columns is-3">
            <div class="container is-white column is-0">
              <div class="notification has-text-black is-danger">
                <div class="columns">
                  <div class="column is-four-fifths">
                    <h1 class="title is-4 pt-is-1 has-text-white">Email</h1>
                    <h5 class="subtitle has-text-white is-6">ilhamsabar@gmail.com</h5>
                  </div>
                  <div class="column has-text-centered">
                    <img width="64" height="64" src="~/assets/images/mail.svg">
                  </div>
                </div>
              </div>
            </div>
            <div class="container is-white column is-0">
              <div class="notification has-text-white is-primary">
                <div class="columns">
                  <div class="column is-four-fifths">
                    <h1 class="title is-4 pt-is-1 has-text-white">Phone</h1>
                    <h5 class="subtitle has-text-white is-6">+6285397587200</h5>
                  </div>
                  <div class="column has-text-centered">
                    <img width="64" height="64" src="~/assets/images/phone.svg">
                  </div>
                </div>
              </div>
            </div>
            <div class="container is-white column is-0">
              <div class="notification has-text-white is-link">
                <div class="columns">
                  <div class="column is-four-fifths">
                    <h1 class="title is-4 pt-is-1 has-text-white">Web</h1>
                    <h5 class="subtitle has-text-white is-6">https://ilham-dev.github.io</h5>
                  </div>
                  <div class="column has-text-centered">
                    <img width="64" height="64" src="~/assets/images/web.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>
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

.mb-is-1 {
  margin-bottom: 1.9em;
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
.notification:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>