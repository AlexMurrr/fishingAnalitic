<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        v-model="modelPlace"
        :options="optionsPlace"
        label="Место"
        emit-value
        map-options
      />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelFish" :options="optionsFish" label="Вид рыбы" />
    </div>
    <div class="q-gutter-md">
      <q-select
        v-model="modelSize"
        :options="optionsSize"
        label="Размер рыбы, кг"
      />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelBait" :options="optionsBait" label="Приманка" />
    </div>
    <div class="q-gutter-md">
      <q-select
        v-model="modelSizeBait"
        :options="optionsSizeBait"
        label="Размер приманки, см"
      />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelColor" :options="optionsColor" label="Цвет" />
    </div>
    <q-btn
      @click="resetSelection"
      class="q-mt-md"
      color="primary"
      label="Отправить"
      type="submit"
    ></q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inputOptions } from "../stores/input-store.js";

const optionStore = inputOptions();
const {
  optionsFish,
  optionsBait,
  optionsColor,
  optionsPlace,
  optionsSize,
  optionsSizeBait,
} = optionStore;

const modelFish = ref(null);
const modelPlace = ref(null);
const modelSize = ref(null);
const modelBait = ref(null);
const modelSizeBait = ref(null);
const modelColor = ref(null);

const resetSelection = () => {
  modelPlace.value = "";
};
</script>
