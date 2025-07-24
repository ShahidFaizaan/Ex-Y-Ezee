document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.getElementById("chat-container");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");


    function toggleChatbot() {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    }

    function sendMessage() {
        const input = userInput.value.toLowerCase();
        userInput.value = "";

        const userMessage = `<div class="chat-message">${input}</div>`;
        chatBox.innerHTML += userMessage;

        let botResponse = getBotResponse(input);
        const botMessage = `<div class="chat-message bot">${botResponse}</div>`;
        chatBox.innerHTML += botMessage;

        chatBox.scrollTop = chatBox.scrollHeight;
        suggestionBox.style.display = "none";
    }

    function handleKeyPress(event) {
        if (event.keyCode === 13) {
            sendMessage();
        } else {
            showSuggestions(userInput.value.toLowerCase());
        }
    }

    function getBotResponse(input) {
        const responses = {
            "jee main": "JEE Main is an engineering entrance exam. You can check details on our 'Entrance Exams' page.",
            "neet": "NEET UG is for medical admissions. Would you like to know about eligibility criteria?",
            "cat": "CAT is an exam for MBA admissions. You can find resources in our 'Study Materials' section.",
            "college": "Selecting the right college is crucial. Would you like help comparing options?",
            "exam": "Many competitive exams exist for different fields. What exam information do you need?",
            "scholarship": "There are various scholarships available. Are you looking for merit-based or need-based options?",
            "hi": "Hello! How can I assist you today?",
            "hello": "Hey there! Need help with entrance exams or college selection?",
            "thanks": "You're welcome! Let me know if you need more information.",
            "admission": "Admission processes vary by exam and college. Would you like details on a specific one?",
            "yes": "Great! Let me know what specific details you're looking for.",
            "no": "Alright, let me know if you need help with anything else."
        };

        for (let keyword in responses) {
            if (input.includes(keyword)) {
                return responses[keyword];
            }
        }
        
        return "Sorry, I don't understand. Try asking about entrance exams or colleges!";
    }

    window.toggleChatbot = toggleChatbot;
    window.sendMessage = sendMessage;
    window.handleKeyPress = handleKeyPress;
    userInput.addEventListener("keyup", handleKeyPress);
});