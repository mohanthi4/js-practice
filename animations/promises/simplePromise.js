class myPromise {
  #executor;
  #resolve;
  #resolved;


  constructor(executor) {
    this.#executor = executor;
    this.#resolve = function (value) {
      this.#resolved = value;

    };

    this.#executor &&
      this.#executor(this.#resolve.bind(this));
    this.value = this.#resolved;
  }
}
