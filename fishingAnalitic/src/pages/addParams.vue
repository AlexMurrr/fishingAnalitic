<template>
  <q-page class="buttonAdd">
    <div>
      <h5 class="centered-text">Вы можете добавить свой параметр:</h5>
    </div>
    <div v-for="i in itemsForAdd" :key="i">
      <q-btn
        size="lg"
        color="primary"
        :label="i.label"
        @click="callM(i.method)"
      />
      <q-dialog v-model="i.prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Добавить {{ i.label }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="i.params"
              autofocus
              @keyup.enter="i.prompt = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Выйти" v-close-popup />
            <q-btn flat label="Добавить" v-close-popup @click="f()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
//import dialogAdd from "../components/qDilogAdd.vue";
import { ref } from "vue";

const itemsForAdd = ref([
  { label: "место", method: "m1", prompt: false, params: "" },
  { label: "вид рыбы", method: "m2", prompt: false, params: "" },
  { label: "размер рыбы", method: "m3", prompt: false, params: "" },
  { label: "название приманки", method: "m4", prompt: false, params: "" },
  { label: "цвет приманки", method: "m5", prompt: false, params: "" },
  { label: "размер приманки", method: "m6", prompt: false, params: "" },
]);

// const prompt = ref(false);

function m1() {
  itemsForAdd.value[0].prompt = true;
}
function m2() {
  itemsForAdd.value[1].prompt = true;
}
function m3() {
  itemsForAdd.value[2].prompt = true;
}
function m4() {
  itemsForAdd.value[3].prompt = true;
}
function m5() {
  itemsForAdd.value[4].prompt = true;
}
function m6() {
  itemsForAdd.value[5].prompt = true;
}
function callM(m) {
  this[m]();
}
function f() {
  console.log(itemsForAdd.value[0].params);
  itemsForAdd.value[0].params = "";
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
