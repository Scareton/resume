<template>
  <div class="home">
    <person-bar/>
    <person-data/>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    PersonBar: () => import("../components/PersonBar.vue"),
    PersonData: () => import("../components/PersonData.vue")
  }
};
</script>
