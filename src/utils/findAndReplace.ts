import traverse from "./traverse";

export default function findAndReplace(
  format: string,
  obj: any,
  regex: RegExp,
) {
  // get all value paths from the format
  let input = `${format}`;
  const paths = input.match(regex);

  if (paths) {
    // if paths exist, for each path, replace the value(s)
    for (const path of paths) {
      const curr = path.split(".");
      curr.shift();
      const result = traverse(curr, obj)[0];
      if (result) {
        if (typeof result?.index === "number") {
          input = input.replaceAll(path, result.value);
        } else {
          input = input.replaceAll(path, result.toString());
        }
      } else {
        // WRITE FOR MULTIPLE RESULTS??
      }
    }
  }

  // pass formated string to the UI.
  return input;
}
