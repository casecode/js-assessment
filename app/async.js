if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();

      var doSomethingAsyncy = function(cb) {
        setTimeout(function() {
          cb();
        }, 100);
      };

      doSomethingAsyncy(function() {
        deferred.resolve(value);
      });

      return deferred;
    },

    manipulateRemoteData : function(url) {
      var deferred = $.Deferred();

      $.getJSON(url)
        .done(function(data) {
          var people = $.map(data.people, function(person) {
            return person.name;
          });
          deferred.resolve(people.sort());
        })
        .fail(function(err) {
          deferred.reject(err);
        });

      return deferred;
    }
  };
});
