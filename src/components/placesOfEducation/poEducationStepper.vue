<template>
  <v-card>
    <h3 class="pa-4 white--text primary">Образование</h3>

    <v-stepper class="elevation-0" vertical non-linear v-model="selected">
      <template v-for="(step, index) in steps">
        <v-stepper-step :key="`step${index + 1}`" step="" :complete="selected === index+1" complete-icon="" @click="selected = index + 1">
          <div class="mt-1 font-weight-bold" v-html="step.name"></div>
          <div class="mt-1" v-html="step.direction"></div>
          <div class="mt-1" v-html="step.years"></div>
          <div class="mt-1 font-weight-medium primary--text" v-html="step.result"></div>
        </v-stepper-step>
        <v-stepper-content :key="`content${index + 1}`" :step="index + 1">
          <v-card outlined class="pa-4"><div class="body-2" v-html="step.content"></div></v-card>
        </v-stepper-content>
      </template>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selected: 1
  }),
  computed: {
    steps() {
      return [
        {
          name: "КТИ (Филиал) ВолГТУ",
          faculty: "Среднее Профессиональное Образование",
          form: "Очно",
          years: "2016—2020 (3 года и 10 месяцев)",
          direction: "09.02.04 Информационные системы (по отраслям)",
          result: "Диплом с отличием, 100 баллов",
          content:
            "Камышинский технологический институт (филиал) Волгоградского государственного технического университета - федеральное государственное бюджетное образовательное учреждение высшего образования."
        }
      ].reverse();
    }
  },
  methods: {}
};
</script>

<style>
.v-stepper .v-stepper__step {
  cursor: pointer;
}
</style>