if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var list = [];

      var scanDir = function(dirObj, name) {
        var targetDir = !name || dirObj.dir === name;
        var files = dirObj.files;

        for (var i = 0, len = files.length; i < len; i++) {
          if (typeof files[i] === 'object') {
            var subDir = files[i];
            targetDir ? scanDir(subDir) : scanDir(subDir, name);
            continue;
          }

          if (targetDir) list.push(files[i]);
        }
      };

      scanDir(data, dirName);
      return list;
    },

    // See http://stackoverflow.com/questions/9960908/permutations-in-javascript
    permute: function(arr) {
      var permutations = [],
          temp = [];

      var perform = function(arr) {
        var item;
        for (var i = 0, len = arr.length; i < len; i++) {
          item = arr.splice(i, 1)[0];
          temp.push(item);

          arr.length ? perform(arr) : logPermutation();

          arr.splice(i, 0, item);
          temp.pop();
        }

        return permutations;
      };

      var logPermutation = function() {
        permutations.push(temp.slice());
      };

      return perform(arr);
    }
  };
});
