export function submitFormBasic(values, setSubmitting) {
  console.log("form values", values);
  setSubmitting(false);
  console.log("form is submitted");
}

export function mergeObjects(objectA, objectB) {
  const result = JSON.parse(JSON.stringify(objectA));

  if (Object.keys(result).includes(...Object.keys(objectB))) {
    Object.keys(objectB).forEach(key => {
      result[key] = { ...result[key], ...objectB[key] };
    });

    return result;
  }

  return { ...objectA, ...objectB };
}
