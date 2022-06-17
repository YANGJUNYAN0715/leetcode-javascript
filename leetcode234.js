function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var isPalindrome = function (head) {
  let str1 = "",
    str2 = "";
  while (head) {
    str1 = str1 + head.val;
    str2 = head.val + str2;
    head = head.next;
  }
  return str1 == str2;
};
head = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(isPalindrome(head));
