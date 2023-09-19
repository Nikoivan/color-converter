import { useState, FormEvent, ChangeEvent, useRef } from "react";
import convertColor from "../functions/convertColor";
import Result from "./Result";

export default function Converter() {
  const [form, changeForm] = useState({
    color: "",
  });

  let result: { color: { backgroundColor: string }; content: string } | null =
    null;

  if (form.color.length === 7) {
    result = convertColor(form.color);
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    changeForm((color) => ({ ...color, [name]: value }));
  };

  const defaultStyles = {
    backgroundColor: "rgb(52, 74, 94)",
  };

  return (
    <div className="convert" style={result ? result.color : defaultStyles}>
      <form>
        <input
          className="input"
          id="inColor"
          name="color"
          value={form.color}
          onChange={handleChange}
        />
      </form>
      <Result props={result ? result.content : null} />
    </div>
  );
}
