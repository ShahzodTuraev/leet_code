// 2620. Counter
function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}
