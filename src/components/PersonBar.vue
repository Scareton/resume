<template>
  <div class="person-bar mt-8">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-card>
        <v-img src="/images/photo1.jpg" aspect-ratio="1.6" position="50% 25%" />

        <v-list color="secondary" two-line>
          <v-list-item v-for="(link, index) in contacts" :key="index" :href="link.href">
            <v-list-item-icon class="contact-icon">
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
              <v-list-item-subtitle>{{link.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon class="contact-append-icon" v-if="link.append">
              <v-icon>{{link.append}}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card color="secondary" class="mt-4">
        <v-card-title>Социальные сети</v-card-title>

        <v-list color="secondary">
          <v-list-item v-for="(link, index) in socials" :key="index" :href="link.href" target="_blank">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{link.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
    <template v-else>
      <div class="header-line d-flex grey darken-4 white--text px-4 py-2 justify-space-between">
        <div class="d-flex flex-column justify-center ma-2 mb-0" style="flex:1;">
          <h1>Александр Воронков</h1>
          <h2>Веб-разработчик</h2>
        </div>
        <div class="toplinks d-flex align-center" style="flex:1;">
          <div class="d-flex flex-wrap">
            <div v-for="(link, index) in contacts" :key="`c${index}`" class="ma-1">
              <v-btn depressed small>
                <v-icon class="mr-2" v-if="link.icon">{{link.icon}}</v-icon>
                <span class="toplink-text">{{link.title}}</span>
              </v-btn>
            </div>
            <div v-for="(link, index) in socials" :key="`s${index}`" class="ma-1">
              <v-btn depressed small>
                <v-icon class="mr-2" v-if="link.icon">{{link.icon}}</v-icon>
                <span class="toplink-text">{{link.title}}</span>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters["links/contacts"];
    },
    socials() {
      return this.$store.getters["links/socials"];
    }
  },
  created() {
    this.$store.dispatch("links/get");
  }
};
</script>

<style scoped>
.person-bar {
  min-width: 375px;
  max-width: 375px;
  position: absolute;
  left: 16px;
}
@media (min-width: 960px) and (max-width: 1263px) {
  .person-bar {
    min-width: 240px;
    max-width: 240px;
  }
  .contact-icon,
  .contact-append-icon {
    display: none;
  }
}
@media (max-width: 959px) {
  .person-bar {
    min-width: unset;
    max-width: unset;
    position: inherit;
    left: 0;
    margin-top: 0 !important;
  }
}
@media (max-width: 870px) {
  .header-line {
    flex-direction: column;
  }
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1em;
  }
  .toplinks {
    margin-top: 4px;
  }
  .toplinks .v-icon {
    margin: 0 !important;
  }
  .toplinks .v-icon + .toplink-text {
    display: none;
  }
}
</style>