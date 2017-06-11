/**
 * Return normalized array of ingredients from text
 * @param {string} ingredientsText text contains ingredients
 */
function getArrayOfIngredients(ingredientsText){
  const parsed = removeBrackets(ingredientsText)
    .replace(/^Ingredients\:/g, '')
    .split(',')
    .map((x) => normalize(removePercent(x)));
  const tooLongIndex = parsed.findIndex((x) => x.split(' ').length > 4);
  const result = tooLongIndex !== -1 ? parsed.slice(0, tooLongIndex) : parsed;
  return result;
}

function removePercent(text){
  return text.replace(/(\d|\d\.\d)*\%/g, '');
}

function removeBrackets(text){
  return text.replace(/[<(][^(]*[>)]/g, '');
}

function normalize(text){
  return text
    .replace(/\.$/g, '')
    .replace(/\*/g, '')
    .trim()
    .toLowerCase();
}

export default getArrayOfIngredients;