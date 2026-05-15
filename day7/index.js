const friend = {
    name: "Afsal",
    birthDate: "2004-01-02"
}
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



function getBirthdayDetails(friend) {
    const date = new Date(friend["birthDate"]);
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const age = new Date().getFullYear() - year
    const day = date.getUTCDate()
    console.log(`${friend.name} was born on ${day} ${month}, ${year} and is ${age} years old.`)
}


getBirthdayDetails(friend)
