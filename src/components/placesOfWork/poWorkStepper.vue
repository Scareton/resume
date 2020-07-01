<template>
  <v-card>
    <h3 class="white--text pa-4 primary">Опыт работы</h3>

    <v-stepper class="elevation-0 workStepper" vertical non-linear v-model="selected">
      <template v-for="(step, index) in steps">
        <v-stepper-step :key="`step${index + 1}`" :step="index+1" @click="selected = index + 1" color="primary">
          <div class="font-weight-bold">
            <span class="primary--text mr-2">{{step.years}}</span>
            <v-avatar class="mr-2 step-image" color="#fff" v-if="step.image">
              <v-img :src="step.image" contain />
            </v-avatar>
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
        name: "Studio Cube",
        image: "/images/cube.png",
        years: "",
        projects: [],
        content: "Комплексные интернет-решения для вас и вашего бизнеса"
      },
      {
        name: "See Every Event",
        image: "/images/seeWhite.png",
        years: "2016-2020",
        projects: [
          {
            name: "Детектирование дыма",
            description: "Разработка системы детектирования очагов возгорания",
            tags: ["Прикладное ПО", "C#", "Компьютерное зрение", "EmguCV"],
            image: ""
          },
          {
            name: "Разработка CRM системы для риелторов",
            description:
              "Выгрузка объявлений с площадок. Автоматизация рутинной работы с клиентом.",
            tags: [
              "Frontend",
              "Backend",
              "Vue",
              "Vuetify",
              "Vue Material",
              "Node",
              "Firebase"
            ]
          },
          {
            name: "Объединение полигонов",
            description:
              "Объединение полигонов в мультиполигон со стиранием границ. Объём данных до 600мб",
            tags: ["Backend", "Node", "MongoDB", "QGIS"],
            link: "",
            image:
              "http://softrare.ru/sites/default/files/qgis-rabochaya-oblast.png"
          },
          {
            name: "Создание интерфейса для работы с геоданными",
            description:
              "Вывод, фильтрация, обработка большого количества географических объектов",
            tags: ["Frontend", "React", "REST", "leaflet"],
            link: "",
            image:
              "http://softrare.ru/sites/default/files/qgis-rabochaya-oblast.png"
          },
          {
            name: "Поддержка и доработка веб-сайта",
            description:
              "Поддержка и доработка веб-сайта на CMS Modx REVO с высокой посещаемостью",
            tags: ["Frontend", "CMS", "Modx REVO"],
            link: "",
            image: ""
          }
        ],
        content:
          "Команда, созданная амбициозными студентами Камышинского технологического института.</br>В 2018 году <a target='_blank' href='https://vk.com/wall-63046181_2875'>выиграли грант</a> в размере 500 тысяч рублей на развитие своего проекта в конкурсе «УМНИК»"
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
.workStepper .v-list-item__title,
.v-list-item__subtitle {
  white-space: normal;
}
@media (max-width: 424px) {
  .step-image {
    display: none;
  }
}
</style>