/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./FishData.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const fishes = getFish()
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneThingFromTheSea of fishes) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}