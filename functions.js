//Exercise - Error Handling




function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('The argument must be an array');

  return array.reduce((a, b) => {
    const occurence = (b === searchElement) ? 1 : 0;
    return a + occurence;
  }, 0)
}
try {
  const numbers = [1, 2, 3, 1, 4, 1];
  const count = countOccurrences(false, 1);
  console.log(count);
} catch (e) {
  console.log(e.message)
}