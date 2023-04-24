import route from './route.js';

export const router = {
  install: (v, options) => {
    const r = (...args) => route(...args);

    v.mixin({
      methods: {
        $route: r,
      },
    });

    if (parseInt(v.version) > 2) {
      v.provide('$route', r);
    }
  },
};
