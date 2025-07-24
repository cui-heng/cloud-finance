module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('rem', function (value) {
      return new less.tree.Dimension(Number(value.value) / 75, 'rem');
    });
  }
};