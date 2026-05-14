

const feedback = document.getElementById("feedback")
const content = document.getElementById("content")
function feedbackSubmit() {
    const string = feedback.value
    content.innerText = `
        Original Text: ${string} \n
        Trimmed Text: ${string.trim()} \n
        To Lowercase: ${string.toLowerCase()}\n 
        Replacing "food" : ${string.replace(/food/gi, "ambience")}\n
        finding the word "service": ${string.search("service")}
        Changing to Array: ${string.trim().toLowerCase().split(" ")}`
}