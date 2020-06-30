<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Home: () => import("./views/Home")
  },
  data: () => ({})
};
</script>

<style>
.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label {
  text-shadow: unset !important;
}
.theme--light.v-stepper .v-stepper__step--active .v-stepper__label {
  text-shadow: unset !important;
  color: #000 !important;
}
</style>