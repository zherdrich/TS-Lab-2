import { Greeter } from "./greeter";

export class JavascriptGreeter extends Greeter {
    greet (name: string): string {
        return `console.log("${this.greeting}, ${name}!")`
}}