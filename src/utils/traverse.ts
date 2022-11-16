export default function traverse(
  path: string | string[],
  obj: Record<string, any> | any[],
  result: string[] = [],
): any[] {
  if (typeof path === "string") {
    return traverse(path.split("."), obj, result);
  } else if (path instanceof Array) {
    const key = path.shift();
    if (typeof key === "undefined") {
      // key is undefined, therefore obj is now the result for this path.
      return [obj];
    } else if (/\[[\d*]+\]/g.test(key)) {
      // key is a wildcard
      if (obj instanceof Array) {
        // obj is an array
        if (key === "[*]") {
          for (const item of obj) {
            result.push(...traverse(path, item));
          }
        } else {
          const index = key.match(/([\d]+)/g);
          if (index) {
            result.push(obj[Number.parseInt(index[0])]);
          } else {
            throw new Error(`${key} is not a valid array index.`);
          }
        }
        return result;
      } else {
        // object is not an array
        throw new Error(
          `${key} has been used in a location where the sample has no array.`,
        );
      }
    } else {
      if (!(obj instanceof Array)) {
        // obj is not an array
        return traverse(path, obj[key], result);
      } else {
        throw new Error(`Path '${key}' cannot be traversed on an array.`);
      }
    }
  } else {
    throw new Error("Path is not of type string or string[]");
  }
}
