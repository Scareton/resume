<template>
  <v-card>
    <h3 class="white--text pa-4 primary">Опыт работы</h3>

    <v-stepper class="elevation-0 workStepper" vertical non-linear v-model="selected">
      <template v-for="(step, index) in steps">
        <v-stepper-step :key="`step${index + 1}`" :step="index+1" @click="selected = index + 1" color="primary">
          <div class="font-weight-bold d-flex align-center pl-2">
            <span class="primary--text mr-2" style="width: 90px;">
              {{step.years}}
              <br />
              {{step.yearsMore}}
            </span>
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

    <v-dialog v-model="imageDialog" width="unset">
      <img :src="imageDialogData" v-if="imageDialogData" style="vertical-align:bottom;" />
    </v-dialog>
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
        years: "2019",
        yearsMore: "6 месяцев",
        projects: [
          {
            name: "Разработка веб-сайтов с использованием CMS Modx",
            description: "Разработка и поддержка веб-сайтов",
            images: ["/images/image--000.jpg", "/images/rus_1.png"]
          }
        ],
        content:
          "<a class='font-weight-bold' href='https://studio-cube.pro/'>studio-cube.pro</a><br/>Комплексные интернет-решения для вас и вашего бизнеса"
      },
      {
        name: "See Every Event",
        image: "/images/seeWhite.png",
        years: "2017-2020",
        projects: [
          {
            name: "Детектирование дыма",
            description:
              "Разработка системы детектирования очагов возгорания с использованием технологий компьютерного зрения.",
            tags: ["Прикладное ПО", "C#", "Компьютерное зрение", "EmguCV"],
            image: "",
            images: []
          },
          {
            name: "Разработка CRM системы для риелторов",
            description: `
            <p>CRM позволяет автоматизировать рутинную работу, тем самым повышая эффективность каждого сотрудника компании.</p>
            В особенности системы входит:
            <ul>
              <li>Выгрузка объявлений с одной или нескольких площадок (Яндекс, Циан, Авито т.д.).</li>
              <li>Приведение объявлений с разных площадок к общему формату.</li>
              <li>Определение доступа для сотрудников по по статусу, событию, адресу, цене, количеству комнат и другим характеристикам объявления.</li>
            </ul>
            <p></p>
            <p>Система предоставляет расширенный интерфейс общения с клиентами в виде веб-страницы с минималистичным и интуитивным дизайном.<br/>
            Веб-приложение не требует установки, при этом все важные данные компании и клиентов остаются защищены.</p>
            `,
            tags: [
              "Frontend",
              "Backend",
              "Vue",
              "Vuetify",
              "Vue Material",
              "Node",
              "Firebase"
            ],
            images: [
              "images/i1.jpg",
              "images/i2.jpg",
              "images/i3.jpg",
              "images/i4.jpg"
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
            name: "Поддержка и доработка веб-сайтов",
            description:
              "Поддержка и доработка веб-сайтов на CMS Modx REVO с высокой посещаемостью",
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
  computed: {
    imageDialog: {
      get() {
        return this.$store.state.imageDialog.display;
      },
      set() {
        this.$store.commit("imageDialog/close");
      }
    },
    imageDialogData() {
      return this.$store.state.imageDialog.image;
    }
  },
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