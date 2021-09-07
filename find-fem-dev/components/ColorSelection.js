const ColorSelection = ({ colors, colorSelection, colorSelected }) => {
  return (
    <label className="p-2 mt-2 justify-between">
      <span className="p-1">Poster color</span>
      <select
        className="rounded p-1 w-225 ml-3"
        value={colorSelected}
        onChange={colorSelection}
      >
        <option>Colors</option>
        {colors.map((color, index) => (
          <option key={index} value={color.name}>
            {color.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ColorSelection;
