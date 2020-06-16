<template>
  <div class="notes mt-3 col-10">
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
            <button @click="deleteNote" class="btn btn-danger col-1">
              Delete
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
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Note!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Your Note has been deleted!", {
            icon: "success",
          });
          this.$store.dispatch("deleteNote", this.note);
        } else {
          swal("Your Note is safe!");
        }
      });
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
