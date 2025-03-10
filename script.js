document.addEventListener('DOMContentLoaded', () => {
    const weekdayElement = document.getElementById('weekday');
    const quoteElement = document.getElementById('quote');
    const container = document.querySelector('.container');
    
    // Complete day configuration
    const days = [
        { // Sunday
            name: "Sunday",
            quotes: ["Time to chill 🌴", "Sunday funday! 🎉", "Relax and recharge ⛱️"]
        },
        { // Monday
            name: "Monday",
            quotes: ["New week, new opportunities 💼", "Make it happen! 💪", "Monday motivation 🚀"]
        },
        { // Tuesday
            name: "Tuesday",
            quotes: ["Stay productive 📈", "Keep pushing forward 🔥", "Success is near! 💡"]
        },
        { // Wednesday
            name: "Wednesday",
            quotes: ["Midweek hustle 💪", "Halfway there! 🚀", "Stay strong! 🏆"]
        },
        { // Thursday
            name: "Thursday",
            quotes: ["Almost there! ⏳", "Keep grinding! 🎯", "Focus and win! 🏁"]
        },
        { // Friday
            name: "Friday",
            quotes: ["Weekend loading... 🎉", "Finish strong! 💼", "Friday vibes ✨"]
        },
        { // Saturday
            name: "Saturday",
            quotes: ["Enjoy the weekend! 🌟", "Relax and reset 🔄", "Make today amazing! 🌍"]
        }
    ];

    let currentDayIndex = new Date().getDay();
    let currentQuoteIndex = 0;
    let resizeTimeout;

    // Initialize display
    const init = () => {
        updateDisplay();
        startColorTransition();
        setupEventListeners();
    };

    // Update display with animations
    const updateDisplay = () => {
        const day = days[currentDayIndex];
        
        // Trigger container animation
        container.classList.add('animate');
        setTimeout(() => container.classList.remove('animate'), 600);

        // Update content
        weekdayElement.textContent = day.name;
        quoteElement.textContent = day.quotes[currentQuoteIndex];
        
        // Reset quote animation
        quoteElement.classList.remove('quote-transition');
        void quoteElement.offsetHeight;
        quoteElement.classList.add('quote-transition');
    };

    // Handle quote cycling
    const cycleQuote = () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % days[currentDayIndex].quotes.length;
        updateDisplay();
    };

    // Check for day changes
    const checkDayChange = () => {
        const newDayIndex = new Date().getDay();
        if (newDayIndex !== currentDayIndex) {
            currentDayIndex = newDayIndex;
            currentQuoteIndex = 0;
            updateDisplay();
        }
    };

    // Background color transitions
    const startColorTransition = () => {
        const colors = ['#e6e6fa', '#9370db', '#6a5acd'];
        let current = 0;
        setInterval(() => {
            document.body.style.background = `linear-gradient(45deg, ${colors[current]}, ${colors[(current + 1) % colors.length]})`;
            current = (current + 1) % colors.length;
        }, 10000);
    };

    // Responsive font sizing
    const adjustFontSize = () => {
        const baseSize = Math.min(window.innerWidth * 0.08, 80);
        weekdayElement.style.fontSize = `${baseSize}px`;
    };

    // Event listeners
    const setupEventListeners = () => {
        weekdayElement.addEventListener('click', cycleQuote);
        weekdayElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') cycleQuote();
        });
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(adjustFontSize, 200);
        });
        
        setInterval(checkDayChange, 60000);
    };

    // Start the application
    init();
    adjustFontSize();
});