<template>
  <v-card class="pa-4" outlined>
    <div class="body-2" v-html="step.content"></div>
    <v-list class="mt-2 work-list" color v-if="step.projects && step.projects.length > 0">
      <v-subheader>Ключевые проекты</v-subheader>
      <v-list-item v-for="(project, index) in step.projects" :key="index">
        <v-list-item-avatar style="border: 1px solid rgba(0, 0, 0, 0.1)">
          <v-img v-if="project.image" :src="project.image"></v-img>
          <v-img v-else :src="step.image" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="project.name" />
          <v-list-item-subtitle v-html="project.description" />
          <v-list-item-subtitle>
            <v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" small class="mr-2 mt-1">{{tag}}</v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
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
</style>