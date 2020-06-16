<template>
  <div class="bg-light grow" id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./assets/lumen.scss";
@import "bootstrap";
// @import "./assets/_overrides.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.grow {
  flex-grow: 1;
}
.text-shadow {
  text-shadow: 0.5px 0.5px black;
}
</style>
