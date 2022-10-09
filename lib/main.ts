import './style.css'; 
import FancyNavbar from "./components/FancyNavbar.vue"
import XAds  from "./components/atoms/XAds.vue"

export default {
  install: (app: any) => {
    app.component("FancyNavbar", FancyNavbar)
    app.component("XAds", XAds)
  }
}