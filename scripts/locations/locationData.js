const locationCollection = [ "Hawaii", "Bahamas", "Brazil","Africa"]

export const getLocation = () => {
    let locationHTML="<ul>"
    for (let location of locationCollection){
        
        locationHTML += `<li> ${location} </li>`
    }
    locationHTML += '</ul>'
    return locationHTML
}