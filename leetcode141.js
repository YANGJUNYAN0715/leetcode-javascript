function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var hasCycle = function (head) {
  if (head == null || head.next == null || head.next.next == null) {
    return false;
  }
  let n1 = head;
  let nn = head.next;
  while (n1 != nn) {
    if (nn.next == null || nn.next.next == null) {
      return false;
    }
    n1 = n1.next;
    nn = nn.next.next;
  }
  return true;
};
