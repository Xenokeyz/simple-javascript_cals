function Calculator() {
  this.start = () => {
    while (true) {
      const operation = prompt(
        "Enter your operation or q to quit.\nex. (10 * 8 + 1 - 2) / 10\n* => (multiplication)\n/ => (division)\n+ => (addition)\n- => (subtraction)"
      );
      if (operation.toLowerCase() === "q") {
        return;
      }
      let answer = "invalid operation";
      try {
        answer = eval(operation);
      } catch (error) {
        // invalid operation
      }
      alert(`${operation} = ${answer}`);
    }
  };
}

const calculator = new Calculator();

calculator.start();
