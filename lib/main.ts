import FancyNavbar from "./components/FancyNavbar.vue"

export default {
  install: (app: any) => {
    app.component("FancyNavbar", FancyNavbar)
  }
}