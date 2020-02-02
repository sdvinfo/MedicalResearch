<template>
  <div class="sdv-navbar ml-2">
    <router-link
      v-for="item in items"
      :key="item.path"
      :to="item.path"
      class="navbar-link font-bold"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'nav-bar',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
})
export default class NavBar extends Vue {}
</script>

<style lang="stylus">
.navbar-link {
  color: #cccccc;
}

.navbar-link:last-child::after {
  content: '';
  @apply px-0;
}

.navbar-link::after {
  content: '|';
  @apply px-4;
}

.router-link-exact-active {
  color: #a4dcff;
}

.router-link-exact-active.navbar-link::after {
  color: #cccccc;
}
</style>
