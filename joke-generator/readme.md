# 😂 Random Joke Generator

A simple, beginner-friendly web app that fetches and displays a random joke at the click of a button.

## API Used

This project uses the **[Official Joke API](https://official-joke-api.appspot.com/)**:

- Endpoint: `https://official-joke-api.appspot.com/random_joke`
- No API key or authentication required
- Returns a JSON object like:
  ```json
  {
    "id": 1,
    "type": "general",
    "setup": "What did the ocean say to the beach?",
    "punchline": "Nothing, it just waved."
  }
  ```

## How to Run

1. Clone or download this folder (`mini-projects/joke-generator/`).
2. Open `index.html` directly in your browser (double-click it, or right-click → "Open with" your browser).
3. Click the **Generate Joke** button to fetch a new random joke.

No build tools, installations, or servers required — it's plain HTML, CSS, and JavaScript.

## File Structure

```
joke-generator/
├── index.html   # Page structure
├── style.css    # Styling
├── script.js    # Fetch logic + button interaction
└── README.md    # This file
```

## Notes for Contributors

- Code is intentionally kept simple and commented for beginners.
- Feel free to suggest improvements (e.g., adding joke categories, a "copy to clipboard" button, or dark mode) via a new PR.