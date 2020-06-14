<template>
  <div class="bugs text-center border-bottom row">
    <div class="col-3 border-right">{{bug.title}}</div>
    <div class="col-3 border-right">{{bug.creatorEmail}}</div>
    <div class="col-3 border-right">{{bug.updatedAt}}</div>
    <div class="col-3">{{bug.closed}}</div>
    <button @click="closeBug" class="btn btn warning">close bug</button>
  </div>
</template>


<script>
export default {
  name: "Bugs",
  props: ["bug"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", bug);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>