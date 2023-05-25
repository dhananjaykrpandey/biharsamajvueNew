<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import HeaderTemplate from './components/HeaderTemplate.vue'
import FooterTemplate from './components/FooterTemplate.vue'
</script>

<template>
  <div>
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <HeaderTemplate />
    </header>

    <div class="container">
      <main id="main">
        <RouterView></RouterView>
      </main>
    </div>
    <footer id="footer" class="footer">
      <FooterTemplate />
    </footer>
  </div>
</template>
