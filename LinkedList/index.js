class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  recursiveDisplay(current) {
    if (current != null) {
      console.log(current.data);
      this.recursiveDisplay(current.next);
    }
  }
}

let ll = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);

// ll.display();
ll.recursiveDisplay(ll.head);
