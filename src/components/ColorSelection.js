export function ColorSelection({ colors, colorSelection, colorSelected }) {
  return (
    <label>
      Select poster color
      <select value={colorSelected} onChange={colorSelection}>
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </label>
  );
}
