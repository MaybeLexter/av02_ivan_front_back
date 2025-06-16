<template>
  <v-container class="fill-height d-flex justify-center align-center" dark>
    <v-card class="pa-6" color="grey darken-4" width="400">
      <h2 class="red--text text--darken-1 mb-4">🔑 Portal de Acesso ao Covil</h2>
      <p class="white--text mb-4">Entre apenas com sua conta do Google Vampírico 🧛‍♂️</p>

      <v-btn color="red darken-3" block @click="handleGoogleLogin">
        Entrar com Google 🩸
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

async function handleGoogleLogin() {
  try {
    await authStore.loginWithGoogle();
    router.push('/dashboard');
  } catch (error) {
    alert('Falha no login com Google: ' + error.message);
  }
}


</script>

<style scoped>
.fill-height {
  background: radial-gradient(circle, #1c0c1c, #000000);
  min-height: 100vh;
}
.v-container {
  background: radial-gradient(circle, #1c0c1c, #000000);
}
.v-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}
h2 {
  font-family: 'Gothic A1', sans-serif;
  font-weight: bold;
  margin-bottom: 16px;
}
.v-text-field {
  font-family: 'Gothic A1', sans-serif;
  margin-bottom: 16px;
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
