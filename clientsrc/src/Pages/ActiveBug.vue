<template>
  <div class="active-bug container-fluid">
    <div class="row">
      <div class="col text-center mt-3">
        <form v-if="bugForm" @submit.prevent="editBug" class=" form-group">
          <div class="row justify-content-center mb-3">
            <input
              type="text"
              name="title"
              id="title"
              class=" form-control col-6"
              placeholder="Title..."
              aria-describedby="helpId"
              v-model="bug.title"
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
            v-model="bug.description"
            required
          />
          <button type="submit" class="mt-3 btn btn-warning">Edit</button>
        </form>
        <span v-if="bug.closed">
          <h2>
            {{ bug.title }}
          </h2>
          <p>{{ bug.description }}</p>
        </span>
        <span v-if="!bug.closed">
          <span v-if="profile.email == bug.creatorEmail">
            <span type="button" @click="bugForm = !bugForm">
              <h2>
                {{ bug.title }}
              </h2>
              <p>{{ bug.description }}</p>
            </span>
          </span>
          <span v-if="profile.email != bug.creatorEmail">
            <h2>
              {{ bug.title }}
            </h2>
            <p>{{ bug.description }}</p>
          </span>
        </span>
        <p>found by: {{ bug.creatorEmail }}</p>
        <div
          v-if="profile.email == bug.creatorEmail"
          type="button"
          @click="closeBug"
        >
          <p class="text-danger" v-if="bug.closed">
            current status: {{ closed() }}
          </p>
          <p class="text-success" v-if="!bug.closed">
            current status: {{ closed() }}
          </p>
        </div>
        <div v-if="profile.email != bug.creatorEmail">
          <h5>{{ closed() }}</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Tell us about this bug
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                What is it doing?!
              </h5>
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
              <form class="">
                <div class="form-group">
                  <textarea
                    v-model="newNote.content"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Add Note here..."
                  ></textarea>
                </div>
                <div class="row justify-content-center"></div>
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
              <button
                data-dismiss="modal"
                @click="addNote"
                class=" btn btn-success"
              >
                Post Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <notes v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script>
import notes from "@/components/NotesComponent";
export default {
  name: "active-bug",
  data() {
    return {
      newNote: {
        bug: this.$route.params.id,
      },
      bugForm: false,
    };
  },
  mounted() {
    this.$store.dispatch("activeBug", this.$route.params.id);
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes() {
      return this.$store.state.notes;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    closed() {
      if (this.bug.closed == true) {
        return "Closed";
      } else return "Open";
    },
    addNote() {
      this.$store.dispatch("addNote", { ...this.newNote });
      this.newNote = {
        bug: this.$route.params.id,
      };
    },
    closeBug() {
      if (this.bug.closed == false) {
        swal({
          title: "Are you sure?",
          text: "If you close the bug it will not be able to be undone!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("The Bug has been closed", {
              icon: "success",
            });
            this.bug.closed = true;
            this.$store.dispatch("closeBug", this.bug);
          } else {
            swal("More debugging to do!");
          }
        });
      }
    },
    editBug() {
      this.$store.dispatch("closeBug", this.bug);
      this.bugForm = false;
    },
  },

  components: {
    notes,
  },
};
</script>

<style scoped></style>
