export default function traverse(
  path: string | string[],
  obj: Record<string, any> | any[],
  result: string[] = [],
): any[] {
  if (typeof path === "string") {
    return traverse(path.split("."), obj, result);
  } else if (typeof path === "object") {
    const key = path.shift();
    if (typeof key === "undefined") {
      // key is undefined, therefore obj is now the result for this path.
      return [obj];
    } else if (key !== "*") {
      // key is not a wildcard.
      if (!(obj instanceof Array)) {
        // obj is not an array
        return traverse(path, obj[key], result);
      } else {
        throw new Error(`Path '${key}' cannot be traversed on an array.`);
      }
    } else {
      // key is a wildcard
      if (obj instanceof Array) {
        // obj is an array
        for (const item of obj) {
          result.push(...traverse(path, item));
        }
        return result;
      } else {
        // object is not an array
        throw new Error(
          "'*' wildcard has been used in a location where the sample has no array.",
        );
      }
    }
  } else {
    throw new Error("Path is not of type string or string[]");
  }
}
