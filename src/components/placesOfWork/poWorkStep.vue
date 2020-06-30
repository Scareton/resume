<template>
  <v-card class="pa-4" outlined>
    <div class="body-2">{{step.content}}</div>
    <v-list class="mt-2" color="" v-if="step.projects.length > 0">
      <v-subheader>Ключевые проекты</v-subheader>
      <v-list-item v-for="(project, index) in step.projects" :key="index">
        <v-list-item-avatar style="border: 1px solid rgba(0, 0, 0, 0.1)">
          <v-img :src="project.image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="project.name"/>
          <v-list-item-subtitle v-html="project.description"/>
          <v-list-item-subtitle class="mt-1">
            <v-chip v-for="(tag, tagIndex) in project.tags" :key="tagIndex" small class="mr-2">{{tag}}</v-chip>
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