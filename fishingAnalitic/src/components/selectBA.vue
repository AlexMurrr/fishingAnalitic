<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="modelPlace" :options="optionsPlace" label="Мето" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelFish" :options="optionsFish" label="Вид рыбы" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelSize" :options="optionsSize" label="Размер рыбы, кг" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelBait" :options="optionsBait" label="Приманка" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelSizeBait" :options="optionsSizeBait" label="Размер приманки, см" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelFish" :options="optionsFish" label="Вид рыбы" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelSize" :options="optionsSize" label="Размер" />
    </div>
    <div class="q-gutter-md">
      <q-select v-model="modelBait" :options="optionsBait" label="Приманка" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      modelFish: ref(null),
      modelPlace:  ref(null),
      modelSize:  ref(null),
      modelBait: ref(null),
      modelSizeBait: ref(null),
      optionsFish: [
        'щука', 'судак', 'окунь', 'жерех'
      ],
      optionsPlace:['место'],
      optionsSize: ['0.1', '0.2', '0.3', '0.4', '0.5', '0,7', '1.0', '1.2', '1.5',
    '1.8', '2.0'],
    optionsBait: ['тьега', 'гамблер'],
    optionsSizeBait: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

    }
  }
}
</script>
