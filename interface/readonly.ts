interface User {
  readonly username: string;
  password: string;
}

let bobby: User = {
  username: "Bigbobby42",
  password: "Universaldestr0yr!78",
};

// Say Bobby wants to change his password.
// Sure thing!
bobby.password = "HyperSurfaceExplorer$5931";

// However, he cannot change his username, because it's already in the database.
// Uncomment the below line and try running this file.
// bobby.username = "Smallrobert24";
