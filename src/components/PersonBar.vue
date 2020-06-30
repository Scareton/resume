<template>
  <div class="person-bar mt-8">
    <v-card class="elevation-0">
      <v-img src="/images/photo2.jpg" aspect-ratio="1.6" position="50% 35%" />

      <v-list dark two-line>
        <v-list-item href="tel:+79377005739">
          <v-list-item-icon>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>+7 937 700 57 39</v-list-item-title>
            <v-list-item-subtitle>Мобильный</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="mailto:voron4288@gmail.com">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>voron4288@gmail.com</v-list-item-title>
            <v-list-item-subtitle>E-mail</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card dark class="mt-4 elevation-0">
      <v-card-title>Социальные сети</v-card-title>

      <v-list dark>
        <v-list-item href="https://vk.com/id149543765" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-vk</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Вконтакте</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://career.habr.com/sundear" target="_blank">
          <v-list-item-icon>
            <!-- <v-icon>mdi-vk</v-icon> -->
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Хабр Карьера</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.person-bar {
  min-width: 375px;
  position: absolute;
  left: 16px;
}
</style>