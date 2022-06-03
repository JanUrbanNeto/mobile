<<<<<<< HEAD
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
>>>>>>> b02a7d591e4a3e57199d7827eee5b0bc2399b82c
