// --- Início das rotas
import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import Contratos from './components/vendas/Contratos.vue'
import Leads from './components/vendas/Leads.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Site from './views/SiteView.vue'
import VendasComponent from '@/components/vendas/VendasComponent.vue'
import ServicosComponent from '@/components/servicos/ServicosComponent.vue'

const routes = [
  {
    path: '/',
    component: Site
  },

  {
    path: '/home', // localhost:8080/home
    component: HomeView,
    children:[
   {path:'vendas' , component: VendasComponent ,
    children:[
      {
        path: 'leads', component: Leads
      }, // localhost:8080/home/vendas/leads
        {
        path: 'contratos', component: Contratos
      } // localhost:8080/home/vendas/leads
    ]
   },
   { path: 'servicos', component: ServicosComponent,
    }


    ]
  },
  {
    path: '/login', // localhost:8080/login
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(), // 👈 precisa dos parênteses
  routes
})


export default router