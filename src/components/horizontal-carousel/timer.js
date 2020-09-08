export default class Timer {
    constructor (func, time) {
        this.timer = setInterval(func, time);
        this.func = func;
        this.time = time;
    }

    start () {
        if (!this.timer) {
            this.timer = setInterval(this.func, this.time);
            console.log("timer started");
        }
        return this;
    }

    stop () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            console.log("timer stopped");
        }
        return this;
    }

    restart () {
        console.log("timer restarted");
        return this.stop().start();
    }
}

// function testFunc () {
//     console.log("yeet");
// }

// const test = new Timer(testFunc, 1000);
// test.start();
// setTimeout(() => {
//     test.restart();
// }, 3000);

