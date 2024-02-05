class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item)
    }

    dequeue() {
        if(this.stack2.length === 0) {
            if(this.stack1.length === 0){
                return null;
            }

            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop)
            }
        }

        return this.stack2.pop()
    }
 
}

const queue = new QueueUsingStack();
queue.enqueue(1)
queue.enqueue(2)




console.log(queue.dequeue())