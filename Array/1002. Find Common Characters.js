//https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let res = A[0].split('');
  for (let i = 1; i < A.length; i++) {
    const nextArr = A[i].split('');
    res = res.filter(a => {
      const index = nextArr.indexOf(a);
      if (index > -1) {
        nextArr.splice(index, 1);
        return true;
      }
      return false;
    })
  }
  return res;
};
