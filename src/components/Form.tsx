import { ChangeEvent } from "react";

export default function Form({
  props,
  value,
}: {
  props: (arg: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  console.log(value);
  return (
    <form>
      <input
        className="input"
        id="inColor"
        name="color"
        value={value}
        onChange={props}
      />
    </form>
  );
}
