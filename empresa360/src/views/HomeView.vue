<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <router-link class="navbar-brand" href="#" :to="{ name: 'home' }"
          >Empresa 360</router-link
        >
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'dashboard' }"
          active-class="active"
          ><i class="bi bi-speedometer2"></i> Dashboard</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'vendaPadrao' }"
          exact-active-class="active"
          ><i class="bi bi-cart"></i> Vendas</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'leads' }"
          exact-active-class="active"
          ><i class="bi bi-caret-right"> Leads </i></router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'contratos' }"
          exact-active-class="active"
          ><i class="bi bi-caret-right"></i> Contratos</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'servicos' }"
          exact-active-class="active"
          ><i class="bi bi-card-checklist"></i> Serviços</router-link
        >
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
    <div class="rodape">
      <router-view name="rodape"></router-view>
    </div>
  </div>
</template>

<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}
.rodape {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: aquamarine;
  text-align: center;
}
/*
.router-link-exact-active {
  color: white;
  background-color: rgb(255, 0, 98);
  border-color: rebeccapurple;
}
.router-link-active {
  color: white;
  background-color: rgb(69, 69, 250);
  border-color: rgb(56, 5, 240);
}*/
</style>
