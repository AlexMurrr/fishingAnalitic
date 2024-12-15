<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-form @submit.prevent="handleClick" ref="formRef">
      <div class="q-gutter-md">
        <q-select
          v-model="modelPlace"
          :options="optionsPlace"
          label="Место"
          :rules="[(val) => !!val || 'Выбор места обязателен']"
        />
      </div>
      <div class="q-gutter-md">
        <q-select
          v-model="modelFish"
          :options="optionsFish"
          label="Вид рыбы"
          :rules="[(val) => !!val || 'Выбор вида рыбы обязателен']"
        />
      </div>
      <div class="q-gutter-md">
        <q-select
          v-model="modelSize"
          :options="optionsSize"
          label="Размер рыбы, кг"
          :rules="[(val) => !!val || 'Выбор размера рыбы обязателен']"
        />
      </div>
      <div class="q-gutter-md">
        <q-select
          v-model="modelBait"
          :options="optionsBait"
          label="Приманка"
          :rules="[(val) => !!val || 'Выбор приманки обязателен']"
        />
      </div>
      <div class="q-gutter-md">
        <q-select
          v-model="modelSizeBait"
          :options="optionsSizeBait"
          label="Размер приманки, см"
          :rules="[(val) => !!val || 'Выбор размера приманки обязателен']"
        />
      </div>
      <div class="q-gutter-md">
        <q-select
          v-model="modelColor"
          :options="optionsColor"
          label="Цвет приманки"
          :rules="[(val) => !!val || 'Выбор цвета приманки обязателен']"
        />
      </div>

      <q-dialog v-model="dialog" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">Ошибка</div>
            <p>Пожалуйста, заполните все поля выбора.</p>
          </q-card-section>

          <q-card-actions>
            <q-btn label="Закрыть" @click="closeDialog" color="negative" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-btn
        class="q-mt-md"
        color="primary"
        label="Отправить"
        type="submit"
      ></q-btn>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inputOptions } from "../stores/input-store.js";

const optionStore = inputOptions();
const formRef = ref(null);

const {
  optionsFish,
  optionsBait,
  optionsColor,
  optionsPlace,
  optionsSize,
  optionsSizeBait,
} = optionStore;

const dialog = ref(false);

const modelFish = ref(null);
const modelPlace = ref(null);
const modelSize = ref(null);
const modelBait = ref(null);
const modelSizeBait = ref(null);
const modelColor = ref(null);

const resetSelection = () => {
  modelPlace.value = "";
  modelFish.value = "";
  modelSize.value = "";
  modelBait.value = "";
  modelSizeBait.value = "";
  modelColor.value = "";
};

const checkSelect = () => {
  if (!modelPlace.value) {
    dialog.value = true;
  }
};

const handleClick = () => {
  if (formRef.value.validate()) {
    console.log("Форма успешно отправлена:");
  } else {
    dialog.value = true;
  }
  closeDialog();
};

const closeDialog = () => {
  dialog.value = false;
};
</script>
