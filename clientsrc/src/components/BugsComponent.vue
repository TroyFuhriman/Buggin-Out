<template>
  <div class="bugs text-center border-bottom row mt-2">
    <router-link
      class="col-3"
      :to="{ name: 'ActiveBug', params: { id: bug.id } }"
    >
      <div class=" ">
        <h5>{{ bug.title }}</h5>
      </div>
    </router-link>
    <div class="col-3 ">
      <h5>{{ bug.creatorEmail }}</h5>
    </div>
    <div class="col-3 ">
      <h5>{{ new Date(bug.updatedAt).toLocaleDateString("en-US") }}</h5>
    </div>
    <div
      v-if="profile.email == bug.creatorEmail"
      type="button"
      @click="closeBug"
      class="col-3"
    >
      <h5>{{ closed() }}</h5>
    </div>
    <div v-if="profile.email == !bug.creatorEmail" class="col-3">
      <h5>{{ closed() }}</h5>
      <button @click="deleteBug" class="btn btn-danger">delort</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bugs",
  props: ["bug"],
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    closed() {
      if (this.bug.closed == true) {
        return "closed";
      }
      return "open";
    },
    deleteBug() {
      this.$store.dispatch("deleteBug", this.bug.id);
    },
    closeBug() {
      if (this.bug.closed == true) {
        this.bug.closed = false;
        this.$store.dispatch("closeBug", this.bug);
      } else this.bug.closed = true;
      this.$store.dispatch("closeBug", this.bug);
    },
  },
  components: {},
};
</script>

<style scoped></style>
