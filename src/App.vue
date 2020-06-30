<template>
  <v-app>
    <v-main>
      <home />
    </v-main>

    <v-speed-dial v-model="fab" open-on-hover left bottom fixed>
      <template v-slot:activator>
        <v-btn v-model="fab" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-cog</v-icon>
        </v-btn>
      </template>

      <v-btn fab dark small v-if="$vuetify.theme.dark" @click="$vuetify.theme.dark = false">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn fab dark small v-else @click="$vuetify.theme.dark = true">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Home: () => import("./views/Home")
  },
  data: () => ({
    fab: false
  })
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