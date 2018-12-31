<template>
  <section class="hero is-medium is-info">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="has-text-centered mb-is-1">
          <h1 class="title is-1 pt-is-1">My Project</h1>
          <h2 class="subtitle">Android Java, Web, API</h2>
          <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li class="is-active">
                <nuxt-link to="/project">Project</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="columns is-0">
        <div class="container is-white column is-0">
          <div class="notification has-text-black">
            <h1
              class="title is-4 pt-is-1 has-text-black"
            >Full Stack Developer at Hensel Davest Indonesia (HDI) 2018</h1>
            <h5
              class="subtitle has-text-black is-6"
            >Menyelesaikan beberapa project aplikasi dan website mengenai P2P Landing dan ecommerce</h5>
          </div>
        </div>
      </div>
      <div class="columns is-0">
        <div class="container is-white column is-0">
          <div class="notification has-text-black">
            <h1 class="title is-4 pt-is-1 has-text-black">Web Developer at KIMA 2018</h1>
            <h5 class="subtitle has-text-black is-6">Menyelesaikan Sistem Aplikasi Akunting</h5>
          </div>
        </div>
      </div>

      <div class="columns is-0">
        <div class="container is-white column is-0">
          <div class="notification has-text-black">
            <h1 class="title is-4 pt-is-1 has-text-black">Web Developer at Abutours.com 2016-2018</h1>
            <h5
              class="subtitle has-text-black is-6 is-capitalized"
            >perusahaan yang bergerak di bidang travel haji dan umroh, saya di tugaskan dan dipercayakan sebagai salah satu backend developer. beberapa aplikasi yang telah saya kerjakan diantaranya adalah abustore.id yang merupakan ecomerce semacam bukalapak, kumudian saya dipercayakan untuk mengerjakan intrenal abutours.com di antaranya adalah modul CS, Kasir, Promosi, Manifest, HRD, Direktur, Finance, dan Logistik. moment yang sangat menyenangkan telah bergabung dengan tim dan menjadi keluarga dari abutours.com</h5>
          </div>
        </div>
      </div>
      <div class="columns is-0">
        <div class="container is-white column is-0">
          <div class="notification has-text-black">
            <h1 class="title is-4 pt-is-1 has-text-black">Founder Diet Sehat 2016</h1>
            <h5
              class="subtitle has-text-black is-6 is-capitalized"
            >sebagai salah satu syarat kelulusan dalam jenjang pendidikan S1 saya di wajibkan untuk membuat sebuah aplikasi yang berguna bagi masyarakat, maka dari itu saya membuat aplikasi diet sehat dengan berbagai module pengambil keputusan dalam menentukan diet yang sehat. saat ini downloaders aplikasi diet sehat telah mencapai 300K downloader.</h5>
          </div>
        </div>
      </div>
      <div class="columns is-0">
        <div class="container is-white column is-0">
          <div class="notification has-text-black">
            <h1
              class="title is-4 pt-is-1 has-text-black"
            >QRSS (Quick Response Supervising System) KEMENAG 2016</h1>
            <h5
              class="subtitle has-text-black is-6 is-capitalized"
            >Membuat sebuah sistem pelaporan dan penilaian sekolah dibawah departemen kementerian agama. saya membuat sistem ini dengan menggunakan IONIC</h5>
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