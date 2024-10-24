/**
 * An interface for something that creates a self-copy.
 * @param T the type that is copied.
 */
interface Copyable<T> {
  createCopy(): T;
}

/**
 * A text document with some contents.
 * Can generate a self-copy.
 */
class TextDocument implements Copyable<TextDocument> {
  contents: string;

  constructor(inDocument: string) {
    this.contents = inDocument;
  }

  createCopy(): TextDocument {
    return new TextDocument(this.contents);
  }
}

let myDocument: TextDocument = new TextDocument("Hello there, text.");
let otherDocument = myDocument.createCopy();

console.log(
  "Contents of documents are equal: " + (myDocument.contents ==
    otherDocument.contents),
);
