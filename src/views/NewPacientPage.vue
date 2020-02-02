<template>
  <div class="NewPacient">
    <h3 class="font-bold font-mono">Формализованная история болезни №</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'NewPacient',
  components: {}
})
export default class NewPacient extends Vue {
  @Prop({ default: 'test' }) propertyName!: String

  get myComputedProp() {
    return Math.random()
  }

  created() {}
  mounted() {}
}
</script>

<style lang="stylus"></style>
