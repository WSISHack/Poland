/**
 * Returns E symbols from text
 * @param {string} text Text contains E symbols
 */

function getArrayOfSymbols(text){
  const symbols = [];
  const regex = /E\s?[\dd]+/g;
  match = regex.exec(text);
  while (match !== null) {
    symbols.push(match[0]);
    match = regex.exec(text);
  }
  return symbols;
}

export default getArrayOfSymbols;