import { getLocation } from "./locationData.js"
// import { Fish } from "./Fish.js"

export const locationList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".locationList")
    // Get the fish array
    // const tips = getTip()
    // Declare a variable to hold on to the fish HTML representation
	let locationHTMLRepresentation = getLocation()
    // for (let tip of tips){

    //     tipHTMLRepresentation += `<li> ${tip} </li>`
    // }


  
                                
    // Loop over the array of fish
	// for (const oneTip of tips) {
	// 	tipHTMLRepresentation += tips;
	// }
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${locationHTMLRepresentation}
    `
}