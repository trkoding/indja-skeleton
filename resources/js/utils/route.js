export default function route(...args) {
  // example: args[0] = 'core:' + args[0];
  return window.reverseUrl(...args);
}
