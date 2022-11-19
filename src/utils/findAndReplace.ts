import traverse from "./traverse";

export default function findAndReplace(
  format: string,
  obj: any,
  regex: RegExp,
) {
  // get all value paths from the format
  const input = `${format}`;
  const paths = input.match(regex);

  if (paths) {
    // if paths exist, for each path, replace the value(s)
    for (const path of paths) {
      const curr = path.split(".");
      curr.shift();
      const result = traverse(curr, obj);
      if (result.length === 1) {
        format = format.replace(path, result[0].toString());
      }
    }
  }
  // pass formated string to the UI.
  return input;
}
