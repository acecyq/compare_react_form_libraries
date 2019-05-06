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

export function emptyObject(object, change = "") {
  if (Array.isArray(object)) {
    const result = object.map(value =>
      typeof value === "object" ? emptyObject(value) : change
    );

    return result;
  }

  if (typeof object === "object") {
    const clone = JSON.parse(JSON.stringify(object));
    const result = {};
    Object.keys(clone).forEach(key => {
      result[key] =
        typeof clone[key] === "object" ? emptyObject(clone[key]) : change;
    });

    return result;
  }

  return change;
}
