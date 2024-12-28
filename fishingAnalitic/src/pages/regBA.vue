<template>
  <div class="registration-form">
    <q-page-container>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
          <q-form
            @submit="
              () => {
                submitForm();
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
            <q-dialog v-model="dialog" persistent>
              <q-card>
                <q-card-section>
                  <div class="text-h6">Вы зарегистрировались</div>
                </q-card-section>
                <q-card-actions>
                  <q-btn label="Закрыть" @click="closeDialog" color="primary" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const formRef = ref(null);
const dialog = ref(false);

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

const submitForm = async () => {
  if (formRef.value.validate()) {
    try {
      const response = await axios.post("http://localhost:3000/api/users", {
        username: name.value,
        password: password.value,
        email: email.value,
      });
      console.log("User  added:", response.data);
      reset();
      openDiAlog();
    } catch (error) {
      console.error("Ошибка при добавлении пользователя:", error.response.data);
    }
  } else {
    console.log("Форма не прошла валидацию");
  }
};

const openDiAlog = () => {
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
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
