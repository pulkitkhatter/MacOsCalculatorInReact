import Button from "./Button";

const buttons = [
  "(",
  ")",
  "MC",
  "M+",
  "M-",
  "MR",
  "C",
  "±",
  "%",
  "/",
  "2nd",
  "x²",
  "x³",
  "xʸ",
  "eˣ",
  "10ˣ",
  "7",
  "8",
  "9",
  "x",
  "¹/x",
  "²√x",
  "³√x",
  "ʸ√x",
  "ln",
  "log₁₀",

  "4",
  "5",
  "6",
  "-",

  "x!",
  "sin",
  "cos",
  "tan",
  "e",
  "EE",

  "1",
  "2",
  "3",
  "+",
  "Rad",
  "sinh",
  "cosh",
  "tanh",
  "π",
  "Rand",

  "0",
  ".",
  "=",
];

const ButtonBox = () => {
  return (
    <div className="buttonBox">
      {buttons.map((btn, i) => (
        <Button key={i} value={btn} />
      ))}
    </div>
  );
};

export default ButtonBox;
