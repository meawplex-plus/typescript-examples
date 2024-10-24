/**
This interface takes a type parameter.
@param T a type that is inserted in the <>.
 **/
interface Displayer<T> {
  display(thing: T): void; // We can now use T anywhere a normal type would go
}

/**
Now we create a `Displayer<number>`.

In effect, we have just passed in the type `number` for `T`.

The `display` declaration specifies params `(thing: T)`, so our `display` function can only take `(thing: number)`.
 **/
let myDisplayer: Displayer<number> = {
  display(thing: number) {
    console.log("The number " + thing);
  },
};

myDisplayer.display(45);
