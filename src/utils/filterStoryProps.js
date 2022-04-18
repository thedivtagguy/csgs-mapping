export default function filterStoryProps({ data, keys }) {
  const result = data.map((d) => {
    const output = {};
    keys.forEach((key) => (output[key] = d[key]));
    return output;
  });
  return result;
}
