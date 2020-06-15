<template>
  <div class="home container-fluid">
    <div class="row justify-content-center mt-2 mb-2">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Add A Bug
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Add Bug</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class=" form-group">
                <div class="row justify-content-center mb-3">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class=" form-control col-6"
                    placeholder="Title..."
                    aria-describedby="helpId"
                    v-model="newBug.title"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  placeholder="Description..."
                  aria-describedby="helpId"
                  v-model="newBug.description"
                  required
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button @click="addBug" class=" btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row border bg-white text-center">
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
        <h3>resolved</h3>
      </div>
      <div v-if="see" type="button" @click="sortD" class="col-3">
        <h3>resolved</h3>
      </div>
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
    return {
      newBug: {},
      see: false,
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
  },
  methods: {
    addBug() {
      this.$store.dispatch("addBug", { ...this.newBug });
      this.newBug = {};
    },
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
