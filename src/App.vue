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

      <v-btn fab dark small v-if="$vuetify.theme.dark" @click="toggleDarkTheme(false)">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn fab dark small v-else @click="toggleDarkTheme(true)">
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
  }),
  methods: {
    toggleDarkTheme(status) {
      localStorage.setItem("darkTheme", status);
      this.$vuetify.theme.dark = status;
      console.log(status);
    }
  },
  created() {
    let status = localStorage.getItem("darkTheme") == "true";
    this.$vuetify.theme.dark = status;
  }
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

@media (max-width: 599px) {
  .v-application--is-ltr .v-stepper--vertical .v-stepper__content {
    margin: 0 !important;
    padding: 0 16px !important;
  }
  .v-application--is-ltr .theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child) {
    border-left: unset !important;
  }
}
</style>