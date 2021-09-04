export function ColorSelection({ colors, colorSelection, colorSelected }) {
  return (
    <label className="p-2 mt-2 justify-between">
      <span className="p-1">Poster color</span>
      <select
        className="p-1 w-225"
        value={colorSelected}
        onChange={colorSelection}
      >
        <option>Colors</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </label>
  );
}
