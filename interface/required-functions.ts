interface GUI {
  windowDimensions: Rectangle;
  display(): void; // New thing: abstract function declaration
}

interface Rectangle {
  length: number;
  width: number;
}

let myGUI: GUI = {
  windowDimensions: {
    length: 40,
    width: 80,
  },
  display() {
    console.log("Imagine I am being displayed");
  },
};

myGUI.display();

// The function MUST fit the exact described form in the Interface
// Uncomment the below lines and see what errors arise when running the file
/*  let myGUI2: GUI = {
      windowDimensions: {
        length: 40,
        width: 80,
      },
      display(something: string) {
        console.log(something);
      },
    };

    myGUI2.display("A message");
*/
