<template>
  <v-card class="primary">
    <h3 class="white--text pa-4">Опыт работы</h3>

    <v-stepper class="elevation-0" vertical non-linear v-model="selected">
      <template v-for="(step, index) in steps">
        <v-stepper-step :key="`step${index + 1}`" :step="index+1" @click="selected = index + 1" color="primary">
          <div class="font-weight-bold">
            <span class="primary--text mr-2">{{step.years}}</span>
            <span>{{step.name}}</span>
          </div>
        </v-stepper-step>
        <v-stepper-content :key="`content${index + 1}`" :step="index + 1">
          <po-work-step :step="step" />
        </v-stepper-content>
      </template>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  components: {
    poWorkStep: () => import("./poWorkStep")
  },
  data: () => ({
    steps: [
      {
        name: "See Every Event",
        description: "",
        years: "2016-2018",
        projects: [
          {
            name: "Детектирование дыма",
            description: "Разработка системы детектирования очагов возгорания",
            tags: ["Прикладное ПО", "C#", "Компьютерное зрение", "EmguCV"],
            image: "/images/seeWhite.png"
          }
        ],
        content:
          "Команда, созданная амбициозными студентами Камышинского технологического института."
      },
      {
        name: "У олегыча",
        description: "",
        years: "2019-2020",
        projects: [
          {
            name: "Объединение полигонов",
            description:
              "Объединение полигонов в мультиполигон со стиранием границ. Объём данных до 600мб",
            tags: ["Backend", "Node.js", "MongoDB", "QGIS"],
            link: "#",
            image:
              "http://softrare.ru/sites/default/files/qgis-rabochaya-oblast.png"
          },
          {
            name: "Создание интерфейса для работы с геоданными",
            description:
              "Вывод, фильтрация, обработка большого количества географических объектов",
            tags: ["Frontend", "React", "REST", "leaflet"],
            link: "#",
            image:
              "http://softrare.ru/sites/default/files/qgis-rabochaya-oblast.png"
          }
        ],
        content:
          "Не следует, однако забывать, что рамки и место обучения кадров требуют определения и уточнения соответствующий условий активизации. Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения модели развития. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий."
      }
    ],
    selected: null
  }),
  methods: {},
  created() {
    this.selected = this.steps.length;
  }
};
</script>

<style>
.v-stepper .v-stepper__step {
  cursor: pointer;
}
</style>