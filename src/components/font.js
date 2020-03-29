export function font(printing, size, margin, extra = {}) {
  if (printing) {
    let newSize = size - 10;
    return { fontSize: newSize, margin: 0 };
  }
  else {
    return { fontSize: size, margin, ...extra };
  }
}
