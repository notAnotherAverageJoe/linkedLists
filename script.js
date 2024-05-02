// notes



class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const firstPage = new Node('google.com');
  const secondPage = new Node('reddit.com');
  const thirdPage = new Node('amazon.com');


  firstPage.next = secondPage;
  secondPage.next=thirdPage;