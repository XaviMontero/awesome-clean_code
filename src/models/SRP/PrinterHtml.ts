import { Printer } from "./Printer";

export class PrinterHtml implements Printer {
  print(text: string): void {
    console.log("<html><body>" + text + "</body></html>");
  }
}

