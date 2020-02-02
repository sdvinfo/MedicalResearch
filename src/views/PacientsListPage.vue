<template>
  <div class="PacientsListPage">
    <h2>PacientsListPage</h2>
    <br />
    <div>Count: {{ pacientsCount }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Providers from '../providers/index'
import AppDataProviders from '../providers/AppDataProviders'
import Pacient from '../models/Pacient.model'
import PacientsProvider from '../providers/PacientsProvider'
import { remote } from 'electron'
import Datastore from 'nedb'

@Component({})
export default class PacientsListPage extends Vue {
  db: Datastore = remote.getGlobal('collectionsDb').main
  // private db = remote.getGlobal('mainDb')
  pacientList = []
  provider = new PacientsProvider()
  pacientsCount: number = 0

  get myComputedProp() {
    return Math.random()
  }

  created() {
    // this.$db.count({}, (err: any, docs: Object[]) => {
    //   console.log('this.pacientList count :', docs)
    // })

    // let pacient = new Pacient({ fio: 'Jhon Doe' })
    // this.db.insert(pacient, (err, res) => {
    //   console.log('result :', res)
    // })

    this.db.count({}, (err, res) => {
      if (err) console.error('Error: ', err)
      this.pacientsCount = res
      console.log('count :', res)
    })
  }
  mounted() {}
}
</script>

<style lang="stylus"></style>
