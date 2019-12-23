import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false;

import {
  VlCore,
  VlUtil,
  VlGrid,
  VlLayout,
  VlRegion,
  VlColumn,
  VlTypography,
  VlIntroduction,
  VlSideNavigation,
  VlSideNavigationList,
  VlSideNavigationItem,
  VlButton,
  VlInfoblock,
  VlDoormat,
  VlEqualHeight,
  VlTitle,
  VlLinkList,
  VlLinkListItem,
  VlLink,
  VlIcon,
  VlDrawer,
  VlDrawers,
  VlSpotlight,
  VlIconList,
  VlIconListItem
} from'@govflanders/vl-ui-vue-components';

Vue.component('vl-typography', VlTypography);
Vue.component('vl-grid', VlGrid);
Vue.component('vl-column', VlColumn);
Vue.component('vl-layout', VlLayout);
Vue.component('vl-region', VlRegion);
Vue.component('vl-introduction', VlIntroduction);
Vue.component('vl-side-navigation', VlSideNavigation);
Vue.component('vl-side-navigation-list', VlSideNavigationList);
Vue.component('vl-side-navigation-item', VlSideNavigationItem);
Vue.component('vl-button', VlButton);
Vue.component('vl-infoblock', VlInfoblock);
Vue.component('vl-doormat', VlDoormat);
Vue.component('vl-title', VlTitle);
Vue.component('vl-link-list', VlLinkList);
Vue.component('vl-link-list-item', VlLinkListItem);
Vue.component('vl-link', VlLink);
Vue.component('vl-icon', VlIcon);
Vue.component('vl-drawers', VlDrawers);
Vue.component('vl-drawer', VlDrawer);
Vue.component('vl-spotlight', VlSpotlight);
Vue.component('vl-icon-list', VlIconList);
Vue.component('vl-icon-list-item', VlIconListItem);

Vue.directive('vl-equal-height', VlEqualHeight);

Vue.use(VlCore);
Vue.use(VlUtil);

Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
