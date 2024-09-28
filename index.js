let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let isRecognizing = false; // Flag to track recognition state
let voice = document.querySelector("#voice")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text) // Corrected here
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 4 && hours < 12) {
        speak("Good Morning")
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon")
    } else {
        speak("Good Evening")
    }
}

window.addEventListener('load', () => {
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    if (!isRecognizing) { // Check if recognition is already in progress
        isRecognizing = true; // Set the flag to true
        recognition.start()
        btn.style.display = "none"
        voice.style.display = "block"
    }
})

recognition.onend = () => {
    isRecognizing = false; // Reset the flag when recognition ends
    voice.style.display = "none"; // Hide the voice display
    btn.style.display = "flex"; // Show the button again
}

function takeCommand(message) {
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hello, How may I help you?")
    } 
    else if (message.includes("who are you")) {
        speak("I am a Virtual Assistant created by Sumi Dey")
    } 
    else if (message.includes("how are you")) {
        speak("I am good by krishna's grace, how are you and how can I help you")
    } 
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/", "_blank")
    } 
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    } 
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"})
        speak(time)
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, {day:"numeric", month:"short"})
        speak(date)
    } 
    else{
        let finalText = "this is what i found on internet regarding" + message.replace("tara","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("tara", "")}`)
    }

    // Ensure button is shown and voice is hidden after command is processed
    btn.style.display = "flex"
    voice.style.display = "none"
}


/* for only hindi */
/**
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let isRecognizing = false; // Flag to track recognition state
let voice = document.querySelector("#voice");

function speak(text, lang = "hi-GB") {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = lang;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 4 && hours < 12) {
        speak("Good Morning Maam");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Maam");
    } else {
        speak("Good Evening Maam");
    }
}

// window.addEventListener('load', () => {
//     wishMe()
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.lang = "hi-IN,en-US"; // Set both Hindi and English

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    if (!isRecognizing) { // Check if recognition is already in progress
        isRecognizing = true; // Set the flag to true
        recognition.start();
        btn.style.display = "none";
        voice.style.display = "block";
    }
});

recognition.onend = () => {
    isRecognizing = false; // Reset the flag when recognition ends
    voice.style.display = "none"; // Hide the voice display
    btn.style.display = "flex"; // Show the button again
};

function takeCommand(message) {
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hello Maam, How may I help you?");
    } 
    else if (message.includes("नमस्ते") || message.includes("हाय")) {
        speak("नमस्ते, मैं आपकी मदद कैसे कर सक्ती हूँ?");
    } 
    else if (message.includes("who are you")) {
        speak("I am a Virtual Assistant named Tara created by Sumi Dey");
    } 
    else if (message.includes("तुम कौन हो")) {
        speak("मैं सुमी डे द्वारा बनाई गई एक वर्चुअल सहायक हूँ, मेरा नाम तारा है");
    } 
    else if (message.includes("how are you")) {
        speak("I am good but Krishna's grace, how are you and how can I help you");
    } 
    else if (message.includes("तुम कैसी हो")) {
        speak("मैं ठीक हूँ कृष्ण की कृपा से, आप कैसे हैं और मैं आपकी कैसे मदद कर सक्ती हूँ?");
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("यूट्यूब खोलो")) {
        speak("यूट्यूब खोल रही हूँ");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("open calculator")) {
        speak("Opening calculator");
        window.open("calculator://");
    } 
    else if (message.includes("समय")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } 
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    else if (message.includes("तारीख")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } 
    else {
        let finalText = "This is what I found on the internet regarding " + message.replace("tara", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("tara", "")}`);
    }

    // Ensure button is shown and voice is hidden after command is processed
    btn.style.display = "flex";
    voice.style.display = "none";
}
 
  */