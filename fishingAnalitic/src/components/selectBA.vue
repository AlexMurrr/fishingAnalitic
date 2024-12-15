<template>
  <q-form @submit.prevent="handleClick" ref="formRef">
    <div class="q-pa-md" style="max-width: 300px">
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
            <div class="text-h6">Отправлено</div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Закрыть" @click="closeDialog" color="primary" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-btn
        class="q-mt-md"
        color="primary"
        label="Отправить"
        type="submit"
      ></q-btn>
    </div>
  </q-form>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { inputOptions } from "../stores/input-store.js";

const optionStore = inputOptions();
const formRef = ref(null);

const {
  optionsPlace,
  optionsFish,
  optionsSize,
  optionsBait,
  optionsSizeBait,
  optionsColor,
} = optionStore;

const dialog = ref(false);

const modelPlace = ref(null);
const modelFish = ref(null);
const modelSize = ref(null);
const modelBait = ref(null);
const modelSizeBait = ref(null);
const modelColor = ref(null);

const resetSelection = async () => {
  modelPlace.value = null;
  modelFish.value = null;
  modelSize.value = null;
  modelBait.value = null;
  modelSizeBait.value = null;
  modelColor.value = null;

  await nextTick();

  formRef.value.reset();
  formRef.value.resetValidation();
};

const checkSelect = () => {
  dialog.value = true;
};

const handleClick = () => {
  if (formRef.value.validate()) {
    checkSelect();
    console.log("Форма успешно отправлена:");
    resetSelection();
  } else {
  }
};

const closeDialog = () => {
  dialog.value = false;
};
</script>
