import { defineStore } from 'pinia';

export const inputOptions = defineStore('counter', {
  state: () => ({
    optionsFish: ["щука", "судак", "окунь", "жерех"],
     optionsPlace: ["место"],
     optionsSize: [
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0,7",
        "1.0",
        "1.2",
        "1.5",
        "1.8",
        "2.0",
      ],
      optionsBait: ["тьега", "гамблер"],
      optionsSizeBait: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      optionsColor: ["зеленый", "белый", "красный"],
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
      this.user= user[0].name;
    },

  },
});
