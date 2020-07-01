<template>
  <div class="person-data">
    <div class="person-data--header grey darken-4 white--text py-12" v-if="!$vuetify.breakpoint.smAndDown">
      <div class="pl-4">
        <h1>Александр Воронков</h1>
        <h2>Веб-разработчик</h2>
      </div>
    </div>
    <div class="person-data--body mt-4 pr-8">
      <po-work-stepper class="mb-4" />
      <po-education-stepper class="mb-4" />
      <projects class="mb-4" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    poWorkStepper: () => import("./placesOfWork/poWorkStepper"),
    poEducationStepper: () => import("./placesOfEducation/poEducationStepper"),
    projects: () => import("./projects/Projects")
  }
};
</script>

<style scoped>
.person-data > * {
  padding-left: 408px;
}
@media (min-width: 960px) and (max-width: 1263px) {
  .person-data > * {
    padding-left: 272px;
  }
}
@media (min-width: 425px) and (max-width: 959px) {
  .person-data > * {
    padding: 0 16px !important;
  }
}
@media (max-width: 424px) {
  .person-data > * {
    padding: 0 8px !important;
  }
}
</style>