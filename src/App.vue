<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import HeaderTemplate from './components/HeaderTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';
</script>

<template>
  <div>
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <HeaderTemplate />
  </header>

  <div class="container">
    <main>
      <RouterView />
    </main>
  </div>
  <footer id="footer" class="footer">
      <FooterTemplate />
    </footer>
  </div>
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
