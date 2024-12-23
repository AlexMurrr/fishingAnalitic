<template>
  <div class="registration-form">
    <q-page-container>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
          <q-form
            @submit="
              () => {
                e();
              }
            "
            ref="formRef"
          >
            <q-input
              outlined
              v-model="name"
              label="Имя"
              class="q-mb-md"
              :rules="[(val) => !!val || 'Придумайте имя']"
            ></q-input>
            <q-input
              outlined
              v-model="email"
              label="Email"
              type="email"
              class="q-mb-md"
              :rules="[(val) => !!val || 'Введите эмейл']"
            ></q-input>
            <q-input
              outlined
              v-model="password"
              label="Пароль"
              type="text"
              class="q-mb-md"
              :rules="[(val) => !!val || 'Придумайте пароль']"
            ></q-input>
            <q-btn
              color="primary"
              label="Зарегистрироваться"
              type="submit"
            ></q-btn>
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
const email = ref("");
const password = ref("");

const reset = () => {
  name.value = "";
  email.value = "";
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
.registration-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
