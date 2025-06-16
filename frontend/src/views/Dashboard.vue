<template>
  <v-container>
    <h1 class="red--text">🦇 Vampiros Cadastrados</h1>

    <v-btn color="red darken-4" class="mb-4" @click="goToAdd">Cadastrar Novo Vampiro</v-btn>

    <v-row>
      <v-col cols="12" md="4" v-for="vampiro in vampiros" :key="vampiro.id">
        <v-card color="grey darken-3" dark class="pa-3">
          <h3>{{ vampiro.nome }} ({{ vampiro.idade }} anos)</h3>
          <p>Clã: {{ vampiro.cla }}</p>

          <v-btn color="blue darken-2" @click="goToEdit(vampiro.id)" class="mr-2">Editar</v-btn>
          <v-btn color="red darken-3" @click="deleteVampiro(vampiro.id)">Eliminar 🩸</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';

const vampiros = ref([]);
const router = useRouter();

import api from '../services/api';

async function fetchVampiros() {
  const res = await api.get('/vampiros');
  vampiros.value = res.data;
}

async function deleteVampiro(id) {
  await api.delete(`/vampiros/${id}`);
  fetchVampiros();
}


function goToAdd() {
  router.push('/add-vampiro');
}

function goToEdit(id) {
  router.push(`/edit-vampiro/${id}`);
}

onMounted(fetchVampiros);
</script>



<style scoped>
.fill-height {
  background: linear-gradient(135deg, #2c003e, #000000);
  min-height: 100vh;
}
</style>
