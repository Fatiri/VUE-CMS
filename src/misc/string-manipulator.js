export function Decamelize(text) {
  return text.replace(/_/g, " ");
}

export function Camelize(text, separator) {
  separator = typeof separator === "undefined" ? "_" : separator;

  return text
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();
}


export function Capitalize(text) {
  let result = text.replace(/([A-Z])/g, " $1");
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  finalResult = finalResult
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  return finalResult
}
