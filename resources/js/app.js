import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { router } from '@r/utils/router.js';
import Layout from '@r/layouts/wrapper.vue';

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Goblin';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.vue');
    let page = await pages[`./pages/${name}.vue`]();
    page.default.layout = page.default.layout || Layout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(router)
      .mount(el);
  },
  progress: {
    color: '#4B5563',
  },
});
