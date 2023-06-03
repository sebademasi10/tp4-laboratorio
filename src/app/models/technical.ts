// singleton example
export class Technical {
    state: string;
    queue: number;

    private static instance: Technical;

    constructor() {
        this.state = 'idle';
        this.queue = 0;
    }
    static getInstance() {
        if (!Technical.instance) {
            Technical.instance = new Technical();
        }
        return Technical.instance;
    }
    getState() {
        return this.state;
    }
    setState(state: string) {
        this.state = state;
    }
    incrementQueue() {
        this.queue++;
    }
    decrementQueue() {
        this.queue--;
    }
    getQueue() {
        return this.queue;
    }
}
