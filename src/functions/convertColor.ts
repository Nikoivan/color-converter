export default function convertCover(hex: string) {
  const color = /^#+([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let result: { color: { backgroundColor: string }; content: string } | null =
    null;
  color
    ? (result = {
        color: {
          backgroundColor: `rgb(${parseInt(color[1], 16)},${parseInt(
            color[2],
            16
          )},${parseInt(color[3], 16)})`,
        },
        content: `rgb(${parseInt(color[1], 16)},${parseInt(
          color[2],
          16
        )},${parseInt(color[3], 16)})`,
      })
    : (result = {
        color: { backgroundColor: "red" },
        content: "Ошибка!",
      });
  return result;
}
