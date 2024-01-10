import { defineStore } from 'pinia'

export const getDb = defineStore('counter', {
  state: () => ({
    user: '',
  }),

  getters: {

  },

  actions: {
    async getUser() {
      const res = await fetch(
        "http://localhost:5000/getUser"
      );
      const user = await res.json();
     this.user = user[0].name;
    },
  }
})
