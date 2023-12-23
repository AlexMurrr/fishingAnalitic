<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="modelPlace" :options="optionsPlace" label="Мето" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelFish" :options="optionsFishStore" label="Вид рыбы" />
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inputOptions } from '../stores/input-store.js';
import { storeToRefs } from "pinia";

const optionStore = inputOptions();
const {optionsFishStore} = storeToRefs(optionStore);



  const modelFish = ref(null);
  const modelPlace = ref(null);
  const modelSize = ref(null);
  const modelBait = ref(null);
  const modelSizeBait = ref(null);

</script>
