import { defineStore } from "pinia";

export const getDb = defineStore("counter", {
  state: () => ({
    user: "",
  }),

  getters: {},
});
