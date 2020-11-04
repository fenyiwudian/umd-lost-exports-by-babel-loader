(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object') {
    module.exports = factory();
  } else {
    root.greatLibrary = factory();
  }
}(this, function () {
  // Under the real scene, my umd libraries are coming from node_modules
  // Here I use a simplified umd module for demonstration
  var exports = {
    name: 'umd',
    asyncFn: async function () {
      return 'umd async fn';
    }
  };
  return exports;
}));