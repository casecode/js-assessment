if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      /*
        for binary, bit n has offset (n - 1)
        E.g. (using left-shifting):
          var SampleBitmask = {
            stateA: 0,      // 0000
            stateB: 1 << 0, // 0001 (base 2) or 1 (base 10); bit 1 offset 0
            stateC: 1 << 1, // 0010 or 2; bit 2 offset 1
            stateD: 1 << 2, // 0100 or 4; bit 3 offset 2
            stateE: 1 << 3  // 1000 or 8; bit 4 offset 3
          }

          SampleBitmask.stateB | SampleBitmask.StateD == 0001 | 0100 == 0101 == 5;
          SampleBitmask.stateC & SampleBitmask.StateD == 0010 & 0100 == 0000 == 0;
          (SampleBitmask.stateD >> 2) & 1 == (0100 >> 2) & 0001 == 0001 & 0001 == 0001 == 1;

        So, by right-shifting (n - 1), can compare bit n to 0001 with bitwise operations,
        i.e. bitwise AND 1 (i.e. 0001) with the requested bit
        e.g.
          valueAtBit(4, 3) => find value of bit 3 for num 4

          4 in binary is 0100
          right-shift 3 - 1 (i.e. 2) positions => 0001
          1 & 0001 => 1
      */

      return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      // // easy way
      // var binNum = num.toString(2);
      // while (binNum.length < 8) { binNum = '0' + binNum; };
      // return binNum;

      // harder way, using bitwise operations
      var binNum = '';
      for (var offset = 7; offset > -1; offset--) {
        binNum += num & (1 << offset) ? '1' : '0';
      }

      return binNum;
    },

    multiply: function(a, b) {
      // Solution below from rmurphy
      a = adjust(a);
      b = adjust(b);

      var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

      return result;

      function adjust(num) {
        var exponent, multiplier;

        if (num < 1) {
          exponent = Math.floor(Math.log(num) * -1);
          multiplier = Math.pow(10, exponent);

          return { adjusted: num * multiplier, multiplier: multiplier };
        }

        return { adjusted: num, multiplier: 1 };
      }
    }
  };
});
