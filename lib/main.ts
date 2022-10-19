import './style.css'; 

// atoms
import XAds  from "./components/atoms/XAds.vue"
import XButton  from "./components/atoms/XButton.vue"
import XCyButton01  from "./components/atoms/XCyButton01.vue"
import XEnergy01  from "./components/atoms/XEnergy01.vue"
import XProfile  from "./components/atoms/XProfile.vue"

// molecules
import XAdsDialog  from "./components/molecules/XAdsDialog.vue"


// TODO fix to install as you use them
export default {
  install: (app: any) => {
    app.component("XAds", XAds)
    app.component("XButton", XButton)
    app.component("XCyButton01", XCyButton01)
    app.component("XEnergy01", XEnergy01)
    app.component("XProfile", XProfile)
    app.component("XAdsDialog", XAdsDialog)
  }
}