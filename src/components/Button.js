import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
    MC: "mem",
    "M+": "mem",
    "M-": "mem",
    MR: "mem",
    "2nd": "func",
    "x²": "func",
    "x³": "func",
    xʸ: "func",
    eˣ: "func",
    "10ˣ": "func",
    "¹/x": "func",
    "²√x": "func",
    "³√x": "func",
    "ʸ√x": "func",
    ln: "func",
    "log₁₀": "func",
    "x!": "func",
    sin: "func",
    cos: "func",
    tan: "func",
    e: "func",
    EE: "func",
    Rad: "func",
    sinh: "func",
    cosh: "func",
    tanh: "func",
    π: "func",
    Rand: "func",
  };
  return className[btn] || "";
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // User click C
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0, mem: 0 });
  };

  // User click number
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // User click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // User click persen
  const persenClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
    });
  };

  // User click invert button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  // User click MC
  const memoryClearClick = () => {
    setCalc({ ...calc, mem: 0 });
  };

  // User click M+
  const memoryAddClick = () => {
    setCalc({ ...calc, mem: calc.mem + calc.num });
  };

  // User click M-
  const memorySubtractClick = () => {
    setCalc({ ...calc, mem: calc.mem - calc.num });
  };

  // User click MR
  const memoryRecallClick = () => {
    setCalc({ ...calc, num: calc.mem });
  };

  // User click 2nd
  const toggleSecondFuncClick = () => {
    setCalc({ ...calc, secondFunc: !calc.secondFunc });
  };

  // User click x²
  const squareClick = () => {
    setCalc({ ...calc, num: calc.num ** 2 });
  };

  // User click x³
  const cubeClick = () => {
    setCalc({ ...calc, num: calc.num ** 3 });
  };

  // User click xʸ
  const powerClick = () => {
    setCalc({ ...calc, sign: "xʸ", res: calc.num, num: 0 });
  };

  // User click eˣ
  const expClick = () => {
    setCalc({ ...calc, num: Math.exp(calc.num) });
  };

  // User click 10ˣ
  const tenExpClick = () => {
    setCalc({ ...calc, num: 10 ** calc.num });
  };

  // User click ¹/x
  const reciprocalClick = () => {
    setCalc({ ...calc, num: 1 / calc.num });
  };

  // User click ²√x
  const sqrtClick = () => {
    setCalc({ ...calc, num: Math.sqrt(calc.num) });
  };

  // User click ³√x
  const cbrtClick = () => {
    setCalc({ ...calc, num: Math.cbrt(calc.num) });
  };

  // User click ʸ√x
  const yRootClick = () => {
    setCalc({ ...calc, sign: "ʸ√x", res: calc.num, num: 0 });
  };

  // User click ln
  const lnClick = () => {
    setCalc({ ...calc, num: Math.log(calc.num) });
  };

  // User click log₁₀
  const logClick = () => {
    setCalc({ ...calc, num: Math.log10(calc.num) });
  };

  // User click x!
  const factorialClick = () => {
    const factorial = (n) => {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    };
    setCalc({ ...calc, num: factorial(calc.num) });
  };

  // User click sin
  const sinClick = () => {
    setCalc({ ...calc, num: Math.sin(calc.num) });
  };

  // User click cos
  const cosClick = () => {
    setCalc({ ...calc, num: Math.cos(calc.num) });
  };

  // User click tan
  const tanClick = () => {
    setCalc({ ...calc, num: Math.tan(calc.num) });
  };

  // User click e
  const eClick = () => {
    setCalc({ ...calc, num: Math.E });
  };

  // User click EE
  const eeClick = () => {
    setCalc({ ...calc, sign: "EE", res: calc.num, num: 0 });
  };

  // User click Rad
  const radClick = () => {
    // Toggle between radians and degrees (this implementation assumes rad)
    setCalc({ ...calc, rad: !calc.rad });
  };

  // User click sinh
  const sinhClick = () => {
    setCalc({ ...calc, num: Math.sinh(calc.num) });
  };

  // User click cosh
  const coshClick = () => {
    setCalc({ ...calc, num: Math.cosh(calc.num) });
  };

  // User click tanh
  const tanhClick = () => {
    setCalc({ ...calc, num: Math.tanh(calc.num) });
  };

  // User click π
  const piClick = () => {
    setCalc({ ...calc, num: Math.PI });
  };

  // User click Rand
  const randClick = () => {
    setCalc({ ...calc, num: Math.random() });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": persenClick,
      "+-": invertClick,
      MC: memoryClearClick,
      "M+": memoryAddClick,
      "M-": memorySubtractClick,
      MR: memoryRecallClick,
      "2nd": toggleSecondFuncClick,
      "x²": squareClick,
      "x³": cubeClick,
      xʸ: powerClick,
      eˣ: expClick,
      "10ˣ": tenExpClick,
      "¹/x": reciprocalClick,
      "²√x": sqrtClick,
      "³√x": cbrtClick,
      "ʸ√x": yRootClick,
      ln: lnClick,
      "log₁₀": logClick,
      "x!": factorialClick,
      sin: sinClick,
      cos: cosClick,
      tan: tanClick,
      e: eClick,
      EE: eeClick,
      Rad: radClick,
      sinh: sinhClick,
      cosh: coshClick,
      tanh: tanhClick,
      π: piClick,
      Rand: randClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
