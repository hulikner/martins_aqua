const tipCollection = [ "Do not urinate in the fish tank.", "Feed your fish.", "Water your fish."]

export const getTip = () => {
    let tipHTML="<ul>"
    for (let tip of tipCollection){
        
        tipHTML += `<li> ${tip} </li>`
    }
    tipHTML += '</ul>'
    return tipHTML
}