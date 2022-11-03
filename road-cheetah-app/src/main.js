import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Amplify } from 'aws-amplify'
// import awsExports from './aws-exports'
// Amplify.configure(awsExports)
import 'maplibre-gl/dist/maplibre-gl.css'

import {
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

applyPolyfills().then(() => {
    defineCustomElements(window);
  });

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.config.isCustomElement = tag => tag.startsWith('amplify-');
app.use(store).use(router).mount('#app');
