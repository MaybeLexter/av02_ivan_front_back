<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center" dark>
    <v-card color="deep-purple accent-4" class="pa-5 text-center">
      <h1 class="red--text text--darken-1">Bem-vindo, Lorde. 🧛‍♂️</h1>
      <p class="white--text"> Entre no Covil agora!</p>
      <v-btn color="red darken-4" @click="goToLogin">
        Entrar no Covil 🦇
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLogin() {
  router.push('/login');
}
</script>

<style scoped>
.fill-height {
  background: linear-gradient(to bottom, #000000, #2c003e);
  min-height: 100vh;
}
.v-container {
  background: radial-gradient(circle at center, #1c0c1c, #000000);
}
.v-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
h1 {
  font-family: 'Gothic A1', sans-serif;
  font-weight: bold;
  margin-bottom: 16px;
}
p {
  font-family: 'Gothic A1', sans-serif;
  margin-bottom: 24px;
}
.v-btn {
  font-family: 'Gothic A1', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
}
.v-btn:hover {
  background-color: #161212 !important;
}
</style>
