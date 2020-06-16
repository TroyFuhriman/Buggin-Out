<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="row justify-content-end">
          <div class="col-3">
            <span class="mr-2 text-right">Hide closed </span>
            <input
              class="btn btn-warning"
              type="checkbox"
              @click="filtered = !filtered"
            />
          </div>
        </div>
      </div>
      <div class="col-10">
        <div
          class="row border bg-success text-light shadow text-shadow text-center"
        >
          <div class="col-3 border-right">
            <h3>Title</h3>
          </div>
          <div class="col-3 border-right">
            <h3>Found By</h3>
          </div>
          <div class="col-3 border-right">
            <h3>Last Updated</h3>
          </div>
          <div v-if="!see" type="button" @click="sortC" class="col-3">
            <h3>resolved <i class="fa fa-sort" aria-hidden="true"></i></h3>
          </div>
          <div v-if="see" type="button" @click="sortD" class="col-3">
            <h3>resolved <i class="fa fa-sort" aria-hidden="true"></i></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2 justify-content-center">
      <div v-if="!filtered" class="col-10 border border-dark shadow">
        <bugs v-for="bug in bugs" :key="bug.id" :bug="bug" />
      </div>
      <div v-if="filtered" class="col-10 border border-dark shadow">
        <bugs v-for="bug in filteredBugs" :key="bug.id" :bug="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import Bugs from "@/components/BugsComponent.vue";
export default {
  name: "home",
  data() {
    return {
      see: false,
      filtered: false,
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    filteredBugs() {
      return this.bugs.filter((bug) => bug.closed == false);
    },
  },
  methods: {
    sortC() {
      this.see = true;
      this.bugs.sort(function(a, b) {
        var nameA = a.closed;
        var nameB = b.closed;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    },
    sortD() {
      this.see = false;
      this.bugs.sort(function(a, b) {
        var nameA = a.closed;
        var nameB = b.closed;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },
    filterBugs() {
      return this.bugs.filter((bug) => bug.closed == false);
    },
  },
  components: {
    Bugs,
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
};
</script>

<style scoped></style>
