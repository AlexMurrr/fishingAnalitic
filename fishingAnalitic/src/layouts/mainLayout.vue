<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="container">
            <div>
              Bite<br />
              Analitic
            </div>
            <div>Hi</div>
            <q-tabs switch-indicator>
              <q-route-tab icon="map" to="/" replace label="auto" />
              <q-route-tab icon="map" to="reg" replace label="Reg" />
            </q-tabs>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="assignment" to="main" replace label="Выбор" />
        <q-route-tab icon="assignment" to="statistic" replace label="Обзор" />
        <q-route-tab icon="assignment" to="add" replace label="добавить" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { getDb } from "../stores/get-db.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

// const getdb = getDb();
// const { getUser } = getdb;
// getUser();
// const { user } = storeToRefs(getdb);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
