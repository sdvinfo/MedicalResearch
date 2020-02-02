<template>
  <div id="app" class="main-grid-container">
    <header>
      <nav-bar :items="navBarItems"></nav-bar>
    </header>

    <!-- <aside>
      <sidebar></sidebar>
    </aside> -->

    <main class="px-4">
      <div class="router-view-grid-container">
        <router-view />
      </div>
    </main>

    <footer class="footer">
      <div class="text-gray-500 font-mono w-full mx-2 text-right pr-4 text-xs">
        Copyright (c) Eng.Group 2020
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import Vue from 'vue'
import AppDataProviders from './providers/AppDataProviders'
import { Component } from 'vue-property-decorator'
import { routes } from '@/router'

@Component({
  components: {
    'nav-bar': NavBar
  },
  data() {
    return {
      navBarItems: routes
    }
  }
})
export default class Application extends Vue {}
</script>

<style lang="stylus"></style>
