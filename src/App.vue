<template>
  <v-app>
    <v-app-bar app color="#E53935" light>
      <v-spacer />
      <h1 id="header">Pokemon</h1>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>

<style>
#header {
  color: #fff;
}
</style>
