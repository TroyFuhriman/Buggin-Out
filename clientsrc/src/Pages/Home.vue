<template>
  <div class="home container-fluid">
    <div class="row border text-center">
      <div class="col-3 border-right">Title</div>
      <div class="col-3 border-right">Found By</div>
      <div class="col-3 border-right">Last Updated</div>
      <div class="col-3">resolved</div>
    </div>
    <span>
      <bugs v-for="bug in bugs" :key="bug.id" :bug="bug" />
    </span>
  </div>
</template>

<script>
import Bugs from "@/components/BugsComponent.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {},
  components: {
    Bugs
  },
  mounted() {
    this.$store.dispatch("getBugs");
  }
};
</script>


<style scoped>
</style>