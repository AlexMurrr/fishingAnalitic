<template>
  <q-page class="buttonAdd">
    <div>
      <h5 class="centered-text">Вы можете добавить свой параметр:</h5>
    </div>
    <div v-for="i in button" :key="i">
      <q-btn
        size="lg"
        color="primary"
        :label="i.label"
        @click="callM(i.method)"
      />
    </div>
  </q-page>
</template>

<script setup>
import buttonAdd from "../components/buttonAdd.vue";
import { ref } from "vue";

const button = [
  { label: "место", method: "m1" },
  { label: "вид рыбы", method: "m2" },
  { label: "приманка", method: "m3" },
  { label: "цвет приманки", method: "m4" },
  { label: "размер приманки", method: "m5" },
];

function m1() {
  console.log("m1");
}
function m2() {
  console.log("m2");
}
function m3() {
  console.log("m3");
}
function m4() {
  console.log("m4");
}
function m5() {
  console.log("m5");
}
function callM(m) {
  this[m]();
}
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
  color: rgb(71, 71, 64);
}
</style>
