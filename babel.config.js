module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "10"
        },
        // "bugfixes": true,
        // "debug": true,
        "useBuiltIns": "usage",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "version": "7.12.1"
      }
    ]
  ]
}