const distance = (a, b) => {
  let distance = 0;
  const dimensions = Math.max(a.length, b.length);
  for (var i = 0; i < dimensions; i++) {
    distance += Math.abs((b[i] || 0) - (a[i] || 0))
  }
  return distance
}

const puzzleInput = 347991;

