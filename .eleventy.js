module.exports = function(config) {
  
  config.addPassthroughCopy('src/js');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      // Needed if data on other than the default _data folder
      //data: '_data',
    }
  };
};