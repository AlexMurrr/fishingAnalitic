<template>
  <q-page class="registration-form">
    <div v-for="i in labelButton" :key="i">
      <q-btn size="lg" color="primary" :label="i" />
    </div>
  </q-page>
</template>

<script setup>
import buttonAdd from "../components/buttonAdd.vue";
import { ref } from "vue";

const labelButton = ["место", "вид рыбы", "приманка", "цвет приманки"];
</script>

<style scoped>
.registration-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

button {
  margin: 12px;
}
</style>
