// --- Início das rotas
import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import Contratos from './components/vendas/Contratos.vue'
import Leads from './components/vendas/Leads.vue'
import Lead from './components/vendas/Lead.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Site from './views/SiteView.vue'
import VendasComponent from '@/components/vendas/VendasComponent.vue'
import ServicosComponent from '@/components/servicos/ServicosComponent.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import VendasPadrao from './components/vendas/VendasPadrao.vue'
import Servico from './components/servicos/Servico.vue'
import Indicadores from './components/servicos/Indicadores.vue'
import Opcoes from './components/servicos/Opcoes.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'



const routes = [
  {
    path: '/',
    component: Site
  },

  {
    path: '/home', // localhost:8080/home
    name: 'home', 
    component: HomeView,
    children:[
   {path:'vendas' , component: VendasComponent , name:'vendas',
    children:[
      {
        path: 'leads', component: Leads, name:'leads',
      }, // localhost:8080/home/vendas/leads
      {
        path: 'lead/:id', component: Lead, name: 'lead'
      }, // localhost:8080/home/vendas/leads/lead
        {
        path: 'contratos', component: Contratos , name:'contratos'
      }, // localhost:8080/home/vendas/leads
             {
        path: '', component: VendasPadrao, name: 'vendaPadrao',
      } // localhost:8080/home/vendas
    ]
   },
   { path: 'servicos', component:ServicosComponent, name:'servicos',
    children:[
      {path: ':id', components:{default:Servico,indicadores: Indicadores,opcoes: Opcoes}, name:'servico'} 
    ]
    },
 { path: 'dashboard', components: 
  {
  default: Dashboard,
  rodape: DashboardRodape
  }, name:'dashboard'
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