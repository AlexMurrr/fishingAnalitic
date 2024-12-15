<template>
  <div class="authorization-form">
    <q-page-container>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
          <q-form @submit="submitForm" ref="formRef">
            <q-input
              outlined
              v-model="name"
              label="Имя"
              class="q-mb-md"
              :rules="[(val) => !!val || 'Введите имя']"
            ></q-input>
            <q-input
              outlined
              v-model="password"
              label="Пароль"
              type="text"
              class="q-mb-md"
              :rules="[(val) => !!val || 'Введите пароль']"
            ></q-input>
            <q-btn color="primary" label="Вход" type="submit"></q-btn>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formRef = ref(null);

const name = ref("");
const password = ref("");

const reset = () => {
  name.value = "";
  password.value = "";

  formRef.value.reset();
  formRef.value.resetValidation();
};

const submitForm = () => {
  if (formRef.value.validate()) {
    reset();
    console.log("Форма успешно отправлена:");
  } else {
  }
};
</script>

<style scoped>
.authorization-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
