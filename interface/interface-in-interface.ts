interface Box {
  length: number;
  width: number;
  height: number;
  contents: BoxContents; // Interface in interface!!
}

interface BoxContents {
  description: string;
}

function describeBox(toDescribe: Box) {
  console.log(
    "A " +
      toDescribe.length +
      "x" +
      toDescribe.width +
      "x" +
      toDescribe.height +
      " box with " +
      toDescribe.contents.description +
      " inside",
  );
}

let myBox: Box = {
  length: 4,
  width: 5.5,
  height: 7,
  contents: {
    description: "a small figurine of Robert Bob the 4th",
  },
};

describeBox(myBox);
