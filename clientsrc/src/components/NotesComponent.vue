<template>
  <div class="notes col-12">
    <div class="row">
      <div class="col text-center">
        <div class="card">
          <div class="card-body">
            <h4 @click="noteForm = !noteForm" class="card-title">
              {{ note.content }}
            </h4>
            <div class="row justify-content-center">
              <form v-if="noteForm" @submit.prevent="editNote" class="col-9">
                <div class="form-group">
                  <textarea
                    v-model="note.content"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Edit Note here..."
                  ></textarea>
                </div>
                <div class="row justify-content-center">
                  <button type="submit" class="btn btn-warning col-2">
                    Edit Note
                  </button>
                </div>
              </form>
            </div>
            <p class="card-text">{{ note.creatorEmail }}</p>
          </div>
          <div class="row justify-content-center">
            <button @click="deleteNote" class="btn btn-danger col-2">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",
  data() {
    return {
      noteForm: false,
    };
  },
  mounted() {},
  props: ["note"],
  computed: {},
  methods: {
    editNote() {
      this.$store.dispatch("editNote", { ...this.note });
      this.noteForm = false;
    },
    deleteNote() {
      this.$store.dispatch("deleteNote", this.note);
    },
  },
  components: {
    bug() {
      return this.$store.state.activeBug;
    },
  },
};
</script>

<style scoped></style>
