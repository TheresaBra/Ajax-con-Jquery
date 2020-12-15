"use strict";
let Joke = /** @class */ (() => {
    class Joke {
        constructor(
        // prettier-ignore
        id, joke) {
            this.id = id;
            this.joke = joke;
            Joke.list.push(this);
        }
        // getters
        get getJoke() {
            return this.joke;
        }
        static get getList() {
            return Joke.list;
        }
    }
    Joke.list = [];
    return Joke;
})();
