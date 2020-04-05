// ES10 Classes: private, static & public members
// New syntax character # octothorpe(hash tag) is now used to define variables,
// functions, getters and setters directly inside the class body’s scope…
// alongside the constructor and class methods.
// Here is a rather meaningless example that focuses only on new syntax:
class Raven extends Bird {
  #state = { eggs: 10 };

  // getter
  get #eggs() {
    return state.eggs;
  }

  // setter
  set #eggs(value) {
    this.#state.eggs = value;
  }

  #lay() {
    this.#eggs++;
  }

  constructor() {
    super();
    this.#lay.bind(this);
  }

  #render() {
    /* paint UI */
  }
}
