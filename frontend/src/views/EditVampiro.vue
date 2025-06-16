<template>
  <v-container>
    <h1 class="red--text">⚰️ Editar Vampiro</h1>
    <v-form @submit.prevent="updateVampiro">
      <v-text-field v-model="nome" label="Nome" required></v-text-field>
      <v-text-field v-model="idade" label="Idade" type="number" required></v-text-field>
      <v-text-field v-model="cla" label="Clã" required></v-text-field>

      <v-btn color="red darken-3" type="submit">Atualizar Vampiro 🦇</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { auth } from '../firebase';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const nome = ref('');
const idade = ref('');
const cla = ref('');

import api from '../services/api';

async function updateVampiro() {
  await api.put(`/vampiros/${id}`, {
    nome: nome.value,
    idade: Number(idade.value),
    cla: cla.value
  });
  router.push('/dashboard');
}

async function fetchVampiro() {
  const res = await api.get('/vampiros');
  const vampiro = res.data.find(v => v.id == id);
  if (vampiro) {
    nome.value = vampiro.nome;
    idade.value = vampiro.idade;
    cla.value = vampiro.cla;
  }
}


onMounted(fetchVampiro);
</script>
