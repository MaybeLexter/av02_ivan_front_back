<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style>
html, body, #app, .v-application {
  height: 100%;
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at center, #1c0c1c, #000000) !important;
  color: white;
  font-family: 'Gothic A1', sans-serif;
  background-attachment: fixed;
}

.v-main {
  background: transparent !important;
}
</style>
