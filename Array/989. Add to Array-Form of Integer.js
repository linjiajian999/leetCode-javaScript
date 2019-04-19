// https://leetcode.com/problems/add-to-array-form-of-integer/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  K = String(K).split('').map(v => v | 0);
  let m = A.length - 1;
  let n = K.length - 1;
  let temp = 0;
  if (m < n) {
    const temp = A;
    const temp2 = m;
    A = K;
    K = temp;
    m = n;
    n = temp2;
  }
  while(n > -1 || (m > -1 && temp)) {
    const sum = (A[m] | 0) + (K[n] | 0) + temp;
    if (sum > 9) {
      A[m] = sum % 10;
      temp = 1;
    } else {
      A[m] = sum;
      temp = 0;
    }
    m--;
    n--;
  }
  if (temp) {
    A.splice(0, 0, 1);
  }
  return A;
};

var addToArrayForm = function(A, K) {
  let temp = 0 | 0;
  let m = A.length - 1 | 0;
  let sum = 0 | 0;
  let lastK = 0 | 0;

  while(K || temp) {
    lastK = K % 10;
    if (m > -1) {
      sum = A[m] + lastK + temp;
      if (sum > 9) {
        A[m] = sum % 10;
        temp = 1;
      } else {
        A[m] = sum;
        temp = 0;
      }
    } else {
      sum = lastK + temp;
      if (sum > 9) {
        A.splice(0, 0, sum % 10);
        temp = 1;
      } else {
        A.splice(0, 0, sum);
        temp = 0;
      }
    }
    m--;
    K = Math.floor(K / 10);
  }
  return A;
};

// addToArrayForm([1,1,1,1,1], 9999);
// addToArrayForm([9,9,9,9], 1);
addToArrayForm([8], 909);