<template>
  <div class="registration-form">
    <q-page-container>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              outlined
              v-model="name"
              label="Имя"
              class="q-mb-md"
            ></q-input>
            <q-input
              outlined
              v-model="email"
              label="Email"
              type="email"
              class="q-mb-md"
            ></q-input>
            <q-input
              outlined
              v-model="password"
              label="Пароль"
              type="text"
              class="q-mb-md"
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
const name = "";
const email = "";
const password = "";

const submitForm = () => {
  console.log("Форма отправлена");
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
