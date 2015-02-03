if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) return i;
      }

      return -1;
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      var retVal = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== item) retVal.push(arr[i]);
      }

      return retVal;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      // arr.splice(0, 0, item);
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      // arr.splice(0, 1);
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      // return arr1.concat(arr2);
      return (arr1.join(',') + ',' + arr2.join(',')).split(',');
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) count++;
      }

      return count;
    },

    duplicates : function(arr) {
      var dupes = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        var firstInstance = arr.indexOf(arr[i]);
        if (i > firstInstance && dupes.indexOf(arr[i]) < 0) dupes.push(arr[i]);
      }

      return dupes;
    },

    square : function(arr) {
      arr.forEach(function(el, idx, arr) {
        arr[idx] = el * el;
      });
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var occurrences = [];
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === target) occurrences.push(i);
      }

      return occurrences;
    }
  };
});
