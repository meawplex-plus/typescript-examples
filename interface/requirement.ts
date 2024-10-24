interface Item {
  name: string;
  count: number;
  category: ItemCategory;
}

interface ItemCategory {
  name: string;
}

interface Requirement<T> {
  isMetBy(main: T, ...rest: any[]): boolean;
}

class ItemRequirement implements Requirement<Item> {
  item: Item;

  constructor(forItem: Item) {
    this.item = forItem;
  }

  isMetBy(other: Item) {
    return other.name === this.item.name && other.count >= this.item.count;
  }
}

class ItemCategoryRequirement implements Requirement<Item> {
  category: ItemCategory;

  private constructor(from: ItemCategory) {
    this.category = from;
  }

  static fromItem(from: Item) {
    return new this(from.category);
  }

  static fromCategory(from: ItemCategory) {
    return new this(from);
  }

  isMetBy(other: Item) {
    return other.category.name == this.category.name;
  }
}

let logs: Item = {
  name: "Logs",
  count: 600,
  category: {
    name: "Forestry",
  },
};

let requiredLogs: ItemRequirement = new ItemRequirement({
  name: "Logs",
  count: 500,
  category: {
    name: "Forestry",
  },
});

let requiredForestry: ItemCategoryRequirement =
  ItemCategoryRequirement.fromCategory({
    name: "Forestry",
  });

console.log("Log Requirement Met: " + requiredLogs.isMetBy(logs) + "\nForestry Requirement Met: " + requiredForestry.isMetBy(logs));
