import { Greeter } from "../src/greeter";
import { JavascriptGreeter } from "../src/javascriptgreeter";
import { LoudGreeter } from "../src/loudgreeter"
import { HtmlGreeter } from "../src/htmlgreeter"

describe("Greeter", () => {
    test("greet function returns input variables for greeting", () => {
        //Arrange
        let greeting = new Greeter("Howdy");

        //Assert
        expect(greeting.greet("partner")).toBe("Howdy, partner!")
    })
})

describe("JavascriptGreeter", () => {
    test("greet function returns console.log for greeting", () => {
        //Arrange
        let greeting = new JavascriptGreeter("Howdy");

        //Assert
        expect(greeting.greet("partner")).toBe(`console.log("Howdy, partner!")`)
    })
})
describe("LoudGreeter", () => {
    test("returns requested amount of exclamations after greeting!!!!", () => {
        //Arrange
        let greeting = new LoudGreeter ("Howdy");
        greeting.addVolume();
        greeting.addVolume();
        //Assert
        expect(greeting.greet("partner")).toBe("Howdy, partner!!!!")
    })
    test("returns requested amount of exclamations after greeting without calling addVolume!!", () => {
        //Arrange
        let greeting = new LoudGreeter ("Howdy");
        //Assert
        expect(greeting.greet("partner")).toBe("Howdy, partner!!")
})
})

describe("HtmlGreeter", () => {
    test("greet function returns input variables in HTML header Format</h1>", () => {
        //Arrange
        let greeting = new HtmlGreeter("Howdy");

        //Assert
        expect(greeting.greet("partner")).toBe("<h1>Howdy, partner!</h1>")
    })
    test("<p>greet function returns input variables in HTML paragraph Format</p>", () => {
        //Arrange
        let greeting = new HtmlGreeter("Howdy", "p");

        //Assert
        expect(greeting.greet("partner")).toBe(`<p>Howdy, partner!</p>`)
    })
})

