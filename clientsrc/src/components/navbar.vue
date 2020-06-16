<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <router-link class="navbar-brand" :to="{ name: 'Home' }"
      ><i class="fa fa-bug" aria-hidden="true"></i> Buggin</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link" :to="{ name: 'Profile' }"
            >Profile</router-link
          >
        </li>
      </ul>
      <div class="mr-2">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-warning"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          I Found A Bug!!
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
                <h5 class="modal-title" id="staticBackdropLabel">
                  Discovered
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal1"
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
                <button
                  data-dismiss="modal"
                  @click="addBug"
                  class=" btn btn-success"
                >
                  declare to the world
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="navbar-text">
        <button
          class="btn btn-success"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Navbar",
  data() {
    return {
      newBug: {},
    };
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
    addBug() {
      this.$store.dispatch("addBug", { ...this.newBug });
      this.newBug = {};
    },
  },
};
</script>

<style></style>
