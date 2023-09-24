import { useState, FormEvent, ChangeEvent, useRef } from "react";
import convertColor from "../functions/convertColor";
import Form from "./Form";
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
    console.log(form.color);
  };

  const defaultStyles = {
    backgroundColor: "rgb(52, 74, 94)",
  };

  return (
    <div className="convert" style={result ? result.color : defaultStyles}>
      <Form props={handleChange} value={form.color} />
      <Result props={result ? result.content : null} />
    </div>
  );
}
