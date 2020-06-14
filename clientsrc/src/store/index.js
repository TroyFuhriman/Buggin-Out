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
    async activeBug({ commit, dispatch }, bug) {
      try {
        let res = await api.get("bugs/" + bug.id);
        commit("activeBug", res.data);
        dispatch("getNotes", bug);
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ commit, dispatch }, bug) {
      try {
        let res = await api.post("bugs", bug);
        dispatch("getActiveBug", bug);
      } catch (error) {
        console.error(error);
      }
    },
    async closeBug({ commit, dispatch }, bug) {
      try {
        let res = await api.put("bugs/" + bug.id, bug);
        dispatch("getBugs");
        dispatch("activeBug", bug.id);
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion BUGS

    //#region NOTES
    async getNotes({ commit, dispatch }, bug) {
      try {
        let res = await api.get("bugs/" + bug.Id + "/notes");
        commit("setNotes", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ commit, dispatch }, note) {
      try {
        let res = await api.post("notes", note);
        dispatch("getNotes");
      } catch (error) {
        console.error(error);
      }
    },
    async editNote({ commit, dispatch }, note) {
      try {
        let res = await api.post("notes/" + note.id, note);
        dispatch("getNotes");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteNote({ commit, dispatch }, note) {
      try {
        let res = await api.delete("notes/" + note.id);
        dispatch("getNotes");
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion NOTES
  },
});
