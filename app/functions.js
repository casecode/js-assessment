if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(item) {
        return function() { return fn(item); };
      });
    },

    partial : function(fn, str1, str2) {
      return function(str3) {
        return fn.call(null, str1, str2, str3);
      };
    },

    useArguments : function() {
      var total = 0;
      for (var i = 0, len = arguments.length; i < len; i++) {
        total += arguments[i]; 
      }
      return total;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var outerArgs = Array.prototype.slice.call(arguments, 1);
      return function() {
        var args = outerArgs.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, args);
      };
    },

    curryIt : function(fn) {
      var availableArgs = [], expectedArgCount = fn.length;

      var applyArgs = function() { return fn.apply(null, availableArgs); };

      var argChainer = function() {
        return function(newArg) {
          availableArgs.push(newArg);
          if (availableArgs.length === expectedArgCount) return applyArgs();

          return argChainer();
        };
      };

      return argChainer();
    }
  };
});
