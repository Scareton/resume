<template>
  <v-card>
    <h3 class="pa-4">Галерея проектов</h3>
    <v-card dark color="grey darken-3">
      <v-row class="projects-row ma-0">
        <v-col v-for="(project, index) in projects" :key="index" class="col-4 pa-0">
          <v-img aspect-ratio="1" :src="project.image" style="overflow:hidden;height:100%;" gradient="to top right, rgba(84, 110, 122, .30), rgba(38, 50, 56, .70)">
            <div class="d-flex align-center justify-center pa-8" style="height:100%;width:100%;max-height:100%;">
              <div class="primary px-2 py-1" style="border-radius:5px;max-height:100%;">
                <v-card class="pa-4 mt-1" color="green darken-2 elevation-0">{{project.name}}</v-card>

                <v-list color="green darken-2" dense class="my-1" style="border-radius:4px;">
                  <v-list-item v-for="(link, linkIndex) in project.links" :key="linkIndex" target="_blank" :href="link.href">
                    <v-list-item-icon>
                      <v-icon>mdi-{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>{{link.name || link.href}}</v-list-item-content>
                  </v-list-item>
                </v-list>

                <div class="pt-1" v-if="project.tags && project.tags.length > 0">
                  <v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" color="green darken-3" small class="mr-2 mb-1">{{tag}}</v-chip>
                </div>
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name:
          "Определение изохрон для пешеходной доступности автобусных остановок Волгограда",
        tags: [
          "leaflet",
          "Front-end",
          "Back-end",
          "QGIS",
          "QGIS GRASS",
          "JQuery"
        ],
        links: [
          {
            href: "https://github.com/Scareton/zone-maps",
            icon: "github"
          },
          {
            href: "https://github.com/Scareton/zone-maps",
            icon: "github"
          }
        ],
        description: "",
        image: "/images/project3.jpg"
      },
      {
        name: "ЭИОС для учебного заведения",
        description: "",
        links: [
          {
            icon: "github",
            href: "https://github.com/Scareton/kti-eios-client",
            name: "Клиент"
          },
          {
            icon: "github",
            href: "https://github.com/Scareton/kti-eios-server",
            name: "Сервер"
          }
        ],
        tags: ["Backend", "Frontend", "Vue.js", "Vuetify", "REST", "Node.js", "MongoDB"],
        image: "/images/project3.png"
      },
      {
        name: "Placeholder",
        description: "",
        image: "/images/project1.jpg"
      },
      {
        name: "Placeholder",
        description: "",
        image: "/images/project2.jpg"
      },
      {
        name: "Placeholder",
        description: "",
        image: "/images/project1.jpg"
      },
      {
        name: "Placeholder",
        description: "",
        image: "/images/project2.jpg"
      }
    ]
  })
};
</script>

<style>
.projects-row .v-image {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.projects-row .v-image:hover {
  box-shadow: -1px 1px #4caf50, -2px 2px #4caf50, -3px 3px #4caf50,
    -4px 4px #4caf50, -5px 5px #4caf50, -6px 6px #4caf50, -7px 7px #4caf50;
  -webkit-transform: translate3d(6px, -6px, 0);
  transform: translate3d(6px, -6px, 0);
  z-index: 99;
}
</style>