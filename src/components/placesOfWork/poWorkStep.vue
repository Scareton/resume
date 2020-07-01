<template>
  <v-card class="py-4" outlined>
    <div class="body-2 px-4" v-html="step.content"></div>
    <template v-if="step.projects && step.projects.length > 0">
      <v-divider class="work-separator" />
      <v-list class="work-list">
        <!-- <v-subheader>Ключевые проекты</v-subheader> -->
        <v-card v-for="(project, index) in step.projects" :key="index" outlined class="px-4 my-2">
          <v-list-item>
            <!-- <v-list-item-avatar color="#fff">
              <v-img v-if="project.image" :src="project.image"></v-img>
              <v-img v-else :src="step.image" />
            </v-list-item-avatar>-->

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" v-html="project.name" />
              <v-list-item-subtitle v-html="project.description" />
              <v-list-item-subtitle>
                <v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" color="green darken-3 white--text" small class="mr-2 mt-1">{{tag}}</v-chip>
              </v-list-item-subtitle>
              <v-list-item-subtitle v-if="project.images && project.images.length > 0">
                <swiper-slider :images="project.images" />
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-list>
    </template>
  </v-card>
</template>

<script>
export default {
  components: {
    SwiperSlider: () => import("./SwiperSlider")
  },
  props: {
    step: Object
  }
};
</script>

<style>
.work-list .v-list-item {
  padding: 0;
}
.work-list .v-subheader {
  padding: 0;
}
.work-separator {
  margin-top: 8px;
}
.work-list {
  padding: 16px;
}
@media (max-width: 599px) {
  .work-list {
    padding: 8px 8px !important;
  }
  .work-separator {
    margin-top: 4px;
  }
}
</style>