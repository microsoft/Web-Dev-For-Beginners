// Grab the elements we need from the page
const jokeText = document.getElementById("joke-text");
const jokeBtn = document.getElementById("joke-btn");

// URL of the free joke API we're using (no API key required)
const API_URL = "https://official-joke-api.appspot.com/random_joke";

// Function to fetch a new joke and display it
async function getJoke() {
  // Disable the button and show a loading message while we fetch
  jokeBtn.disabled = true;
  jokeText.textContent = "Loading...";

  try {
    const response = await fetch(API_URL);

    // If the request failed, throw an error to be caught below
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // The API returns { setup: "...", punchline: "..." }
    jokeText.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    // Show a friendly message if something goes wrong
    jokeText.textContent = "Oops! Couldn't fetch a joke. Please try again.";
    console.error("Error fetching joke:", error);
  } finally {
    // Re-enable the button no matter what happened
    jokeBtn.disabled = false;
  }
}

// Run getJoke() every time the button is clicked
jokeBtn.addEventListener("click", getJoke);