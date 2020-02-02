import NewPacientPage from '@/views/NewPacientPage.vue'
import PacientsListPage from '@/views/PacientsListPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'newPacient',
    label: 'Новый пациент',
    component: NewPacientPage
  },
  {
    path: '/pacientsList',
    name: 'pacientsList',
    label: 'Список пациентов',
    component: PacientsListPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/DuplicatesPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
