# Day of the Week 

A beautiful interactive web application that displays the current day with inspirational quotes and smooth animations.

![Demo Screenshot](https://via.placeholder.com/800x500.png?text=Day+Of+The+Week+Demo+Preview)

## Features 

- Real-time day detection
- Multiple inspirational quotes per day
- Smooth gradient background transitions
- Glassmorphism design effects
- Fully responsive layout
- Interactive quote cycling
- Automatic day change detection
- Floating animation effect
- Dynamic color schemes

## Installation 

1. Clone the repository:
```bash
git clone https://github.com/mannatgupta146/Day-of-Week.git
```

2. Navigate to project directory:
```bash
cd day-of-week
```

3. Open in your browser:
```bash
open index.html  
```

## Usage 

- Click the weekday text to cycle through different quotes
- The display automatically updates:
  - At midnight (day change)
  - Every minute (time check)
- Responsive design adapts to all screen sizes
- Background colors transition every 10 seconds

## Customization 

### Modify Quotes
Edit the `days` array in `script.js`:
```javascript
const days = [
  {
    name: "Monday",
    quotes: ["Your new quote 1", "Your new quote 2"]
  },
  // ... other days
];
```

### Change Styles
Modify `style.css` for different:
- Colors (search for `/* Colors */`)
- Animations (search for `/* Animations */`)
- Layout dimensions (search for `/* Layout */`)

## Technologies Used 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

- Modern CSS Features:
  - CSS Animations/Transitions
  - Backdrop Filters
  - CSS Grid
  - Media Queries

- JavaScript Features:
  - Date Object
  - Event Listeners
  - Dynamic DOM Manipulation

## Contributing 

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements 

- Inspired by modern glassmorphism design trends
- Gradient animations adapted from CSS Tricks
- Quotes curated from various motivational sources

---
**Every day with you is special for me 🥹🎀**