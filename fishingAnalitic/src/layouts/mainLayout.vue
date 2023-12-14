<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
        <div  class="container">
          <div>Bite<br> Analitic</div>
          <div>Hi<br> Alex</div>
          <q-tabs switch-indicator>
            <q-route-tab
              icon="map"
              to="reg"
              replace
              label="Reg"
            />
            <q-route-tab
              icon="map"
              to="reg"
              replace
              label="Reg"
            />
          </q-tabs>
        </div>
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab
          icon="map"
          to="reg"
          replace
          label="Reg"
        />
        <q-route-tab
          icon="assignment"
          to="main"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'mainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped>
  .container {
  display: flex;
  justify-content: space-between;
}
</style>
