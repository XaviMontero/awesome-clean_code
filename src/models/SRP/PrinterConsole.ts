import { Printer } from "./Printer";

export class PrinterConsole implements Printer {
  print(text: string): void {
    console.log(text);
  }

}

