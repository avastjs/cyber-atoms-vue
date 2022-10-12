import './style.css'; 
import FancyNavbar from "./components/FancyNavbar.vue"
import XAds  from "./components/atoms/XAds.vue"
import XAdsDialog  from "./components/molecules/XAdsDialog.vue"

export default {
  install: (app: any) => {
    app.component("FancyNavbar", FancyNavbar)
    app.component("XAds", XAds)
    app.component("XAdsDialog", XAdsDialog)
  }
}