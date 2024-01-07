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
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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

const prompt = ref(false);

function m1() {
  prompt.value = true;
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
