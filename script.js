document.addEventListener('DOMContentLoaded', () => {
    const weekdayElement = document.getElementById('weekday');
    const quoteElement = document.getElementById('quote');
    const container = document.querySelector('.container');

    // Day configuration with multiple quotes
    const days = [
        {
            name: "Sunday",
            quotes: ["Time to chill 🌴", "Sunday funday! 🎉", "Relax and recharge ⛱️"]
        },
        {
            name: "Monday",
            quotes: ["New week, new opportunities 💼", "Make it happen! 💪", "Monday motivation 🚀"]
        },
        {
            name: "Tuesday",
            quotes: ["Stay productive 📈", "Keep pushing forward 🔥", "Success is near! 💡"]
        },
        {
            name: "Wednesday",
            quotes: ["Midweek hustle 💪", "Halfway there! 🚀", "Stay strong! 🏆"]
        },
        {
            name: "Thursday",
            quotes: ["Almost there! ⏳", "Keep grinding! 🎯", "Focus and win! 🏁"]
        },
        {
            name: "Friday",
            quotes: ["Weekend loading... 🎉", "Finish strong! 💼", "Friday vibes ✨"]
        },
        {
            name: "Saturday",
            quotes: ["Enjoy the weekend! 🌟", "Relax and reset 🔄", "Make today amazing! 🌍"]
        }
    ];

    let currentDayIndex = new Date().getDay();
    let currentQuoteIndex = 0;

    // Update display with animations
    const updateDisplay = () => {
        const day = days[currentDayIndex];

        // Apply pop animation to the container
        container.classList.add('animate');
        setTimeout(() => container.classList.remove('animate'), 600);

        // Update text content with smooth transition
        weekdayElement.textContent = day.name;
        quoteElement.textContent = day.quotes[currentQuoteIndex];

        // Reset animation to avoid stacking effects
        quoteElement.classList.remove('quote-transition');
        void quoteElement.offsetHeight; // Force reflow
        quoteElement.classList.add('quote-transition');
    };

    // Click handler for cycling through quotes
    weekdayElement.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % days[currentDayIndex].quotes.length;
        updateDisplay();
    });

    // Check for day change every minute
    const checkDayChange = () => {
        const newDayIndex = new Date().getDay();
        if (newDayIndex !== currentDayIndex) {
            currentDayIndex = newDayIndex;
            currentQuoteIndex = 0;
            updateDisplay();
        }
    };

    // Adjust font size responsively
    const adjustFontSize = () => {
        const baseSize = Math.min(window.innerWidth * 0.08, 80);
        weekdayElement.style.fontSize = `${baseSize}px`;
    };

    window.addEventListener('resize', adjustFontSize);

    // Initial setup
    updateDisplay();
    adjustFontSize();
    setInterval(checkDayChange, 60000); // Check every minute
});
