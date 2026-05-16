const comment =  "My son is 12 years old. Our flat number is 45 and contact is 9876543210.";

const pattern = /[0-9]+ */g;

const result = comment.match(pattern)
console.log(comment.replace(pattern, "number"));