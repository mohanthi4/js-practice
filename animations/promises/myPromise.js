class myPromise {
  #executor
  #resolve
  #isResolved
  #resolvedValue
  constructor(executor) {
    this.#executor = executor;
    this.#resolve = function (value) {
      // this.#isResolved = true;
      // this.#resolvedValue = value;
      // if (this.onResolved) {
      //   this.onResolve(value);
      // }

    }
    this.#executor && this.#executor(this.#resolve.bind(this));
    this.value = this.#resolvedValue;
  }

  // then(onResolve) {
  //   this.onResolved = onResolve;
  //   if (this.#isResolved) {
  //     this.onResolved(this.#resolvedValue)
  //   }
  //   return new myPromise();
  // }
}