import { editor } from "../ui/editor";
import { activityBar } from "../ui/activityBar";
import { sideBar } from "../ui/sidebar";
import { tabs } from "../ui/tabs";

export const strawberryMilk = {
  name: "Strawberry Milk",
  type: "light",

  colors: {
    ...editor,
    ...activityBar,
    ...sideBar,
    ...tabs,
  },

  tokenColors: [],
};