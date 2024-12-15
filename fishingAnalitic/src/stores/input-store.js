import { defineStore } from "pinia";
import { ref } from "vue";

export const inputOptions = defineStore("storeId", () => {
  const optionsPlace = ref(["взморье", "мечта"]);
  const optionsFish = ref(["щука", "судак", "окунь", "жерех"]);
  const optionsSize = ref([
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
  ]);
  const optionsBait = ref(["тьега", "гамблер"]);
  const optionsSizeBait = ref([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
  const optionsColor = ref(["зеленый", "белый", "красный"]);

  return {
    optionsFish,
    optionsPlace,
    optionsSize,
    optionsBait,
    optionsSizeBait,
    optionsColor,
  };
});
