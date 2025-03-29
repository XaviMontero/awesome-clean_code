
export class Book {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly author: string,
  ) {}

  public static create(id: string, title: string, author: string): Book {
    return new Book(id, title, author);
  }

  public static validate(book: Book): void {
    if (!book.id) {
      throw new Error("Id is required");
    }

  }

  public static validateTitle(title: string): void {
    if (title.length < 3) {
      throw new Error("Title must be at least 3 characters long");
    }
  }

  public static title(title: string): string {
    return "This is a title" + title;
  }



}