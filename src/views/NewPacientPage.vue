<template>
  <div class="NewPacient">
    <h3 class="font-bold font-mono">Формализованная история болезни №</h3>
    <hr />
    <div class="humman-info">
      <div
        class="main-content flex-1 bg-grey-lightest mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <label for="fio" class="text-white">ФИО: </label>
        <input type="text" id="fio" class="text-black mx-1" />

        <label for="medicalHistoryNum" class="text-white">№ ИБ: </label>
        <input type="text" id="medicalHistoryNum" class="text-black mx-1" />
      </div>
    </div>
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
