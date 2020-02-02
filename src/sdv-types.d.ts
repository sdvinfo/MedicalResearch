import Datastore from 'nedb'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $db: Datastore<any>
  }
}

// ComponentOptions объявляется в types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    db?: Datastore<any>
  }
}
