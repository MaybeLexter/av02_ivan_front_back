<template>
  <v-container>
    <h1 class="red--text">🩸 Cadastrar Novo Vampiro</h1>
    <v-form @submit.prevent="createVampiro">
      <v-text-field v-model="nome" label="Nome" required></v-text-field>
      <v-text-field v-model="idade" label="Idade" type="number" required></v-text-field>
      <v-text-field v-model="cla" label="Clã" required></v-text-field>

      <v-btn color="red darken-3" type="submit">Salvar Vampiro 🦇</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';

const nome = ref('');
const idade = ref('');
const cla = ref('');
const router = useRouter();

import api from '../services/api';

async function createVampiro() {
  await api.post('/vampiros', {
    nome: nome.value,
    idade: Number(idade.value),
    cla: cla.value
  });
  router.push('/dashboard');
}

</script>
