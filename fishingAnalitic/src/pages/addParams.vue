<template>
  <q-page class="buttonAdd">
    <div>
      <h5 class="centered-text">Вы можете добавить свой параметр:</h5>
    </div>
    <div v-for="i in labelButton" :key="i">
      <q-btn size="lg" color="primary" :label="i" />
    </div>
  </q-page>
</template>

<script setup>
import buttonAdd from "../components/buttonAdd.vue";
import { ref } from "vue";

const labelButton = [
  "место",
  "вид рыбы",
  "приманка",
  "цвет приманки",
  "размер приманки",
];
</script>

<style scoped>
.buttonAdd {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

button {
  margin: 15px;
}
.centered-text {
  text-align: center;
  text-justify: inter-word;
  margin: 10px;
  font-weight: bold;
  color: rgb(3, 3, 59);
}
</style>
