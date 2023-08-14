import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import upperFirst from 'lodash/upperFirst';
// import camelCase from 'lodash/camelCase';

// Use the defined type for requireComponent
/*
const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName: string) => {
    const componentConfig = requireComponent(fileName);
  
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
    );
  
    app.component(componentName, componentConfig.default || componentConfig);
});
*/

const app = createApp(App)

app.use(router)

app.mount('#app')
