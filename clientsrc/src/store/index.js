import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    },
    activeBug(state, bug) {
      state.activeBug = bug;
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    addToBugs(state, bug) {
      state.bugs.push(bug);
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //#region  BUGS

    async getBugs({ commit, dispatch }) {
      try {
        let res = await api.get("bugs");
        commit("setBugs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async activeBug({ commit, dispatch }, id) {
      try {
        let res = await api.get("bugs/" + id);
        commit("activeBug", res.data);
        dispatch("getNotes", res.data.id);
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bug) {
      try {
        let res = await api.post("bugs", bug);
        commit("addToBugs", res.data);
        dispatch("activeBug", res.data._id);
        router.push({ name: "ActiveBug", params: { id: res.data._id } });
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit, dispatch }, bug) {
      try {
        let res = await api.put("bugs/" + bug.id, bug);
        dispatch("getBugs");
        // dispatch("activeBug", bug.id);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBug({ commit, dispatch }, id) {
      try {
        let res = await api.delete("bugs/" + id);
        dispatch("getBugs");
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion BUGS

    //#region NOTES
    async getNotes({ commit, dispatch }, id) {
      try {
        let res = await api.get("bugs/" + id + "/notes");
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, dispatch }, note) {
      try {
        let res = await api.post("notes", note);
        commit("setNotes", res.data);
        dispatch("getNotes", note.bug);
      } catch (error) {
        console.error(error);
      }
    },
    async editNote({ commit, dispatch }, note) {
      try {
        let res = await api.put("notes/" + note.id, note);
        console.log(note);

        dispatch("getNotes", note.bug.id);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote({ commit, dispatch }, note) {
      try {
        let res = await api.delete("notes/" + note.id);
        dispatch("getNotes", note.bug.id);
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion NOTES
  },
});
