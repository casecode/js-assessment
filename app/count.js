if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;
      var current = start;

      var count = function() {
        if (current <= end) {
          console.log(current);
          current++;
          timeout = setTimeout(count, 100);
        }
      };

      count();

      return {
        cancel: function() {
          if (timeout) clearTimeout(timeout);
        }
      };
    }
  };
});
