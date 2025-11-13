// Public API (Demo)
const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";

const loadBtn = document.getElementById("loadBtn");
const results = document.getElementById("results");
const statusText = document.getElementById("status");

// Function to show loading / reset loading
function setLoading(isLoading) {
  loadBtn.disabled = isLoading;
  statusText.textContent = isLoading ? "Loading data… please wait." : "Click the button to load posts.";
}

// Generate a card for each post
function createPostCard(post) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = post.title.slice(0, 40) + "...";

  const body = document.createElement("p");
  body.textContent = post.body.slice(0, 120) + "...";

  card.appendChild(title);
  card.appendChild(body);

  return card;
}

// Fetch API data
async function loadPosts() {
  try {
    setLoading(true);
    results.innerHTML = "";

    const response = await fetch(API_URL);

    if (!response.ok) throw new Error("Server Error: " + response.status);

    const data = await response.json();

    data.forEach(post => {
      const card = createPostCard(post);
      results.appendChild(card);
    });

    statusText.textContent = `Loaded ${data.length} posts from API.`;

  } catch (error) {
    statusText.textContent = "Failed to load posts. Try again.";
    console.error(error);
  } finally {
    setLoading(false);
  }
}

loadBtn.addEventListener("click", loadPosts);
