function shout(string) {
    return string.toUpperCase(); 
}
function whisper(string) {
    return string.toLowerCase(); 
}
function logShout(string) {
    console.log(string.toUpperCase());
}

logShout('hi')


function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}
const name = Jennifer
function introduction(name) {
    return "Hi, my name is ${name}."
}
introduction(name)

const firstName = Jennifer
const language = Java
function introductionWithLanguage(firstName, language) {
console.log('Hi, my name is ${firstName} and I am learning to program in {language}.');
}



