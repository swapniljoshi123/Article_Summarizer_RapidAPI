// Select DOM elements
const summarizeBtn = document.getElementById("summarizeBtn");
const articleURL = document.getElementById("articleURL");
const summaryResult = document.getElementById("summaryResult");
const summaryText = document.getElementById("summaryText");
const loadingSpinner = document.getElementById("loadingSpinner");
const errorMessage = document.getElementById("errorMessage");

// RapidAPI configuration
const apiUrl = "https://article-extractor-and-summarizer.p.rapidapi.com/summarize";
const apiKey = "1c5dfd24fcmshf80bcfdd003c95ap1ce46bjsn1235f8187429";

// Function to summarize an article
async function summarizeArticle() {
 
  summaryResult.style.display = "none";
  errorMessage.style.display = "none";
  loadingSpinner.style.display = "block";

  const url = articleURL.value.trim();

  if (!url) {
    loadingSpinner.style.display = "none";
    errorMessage.textContent = "⚠️ Please enter a valid URL!";
    errorMessage.style.display = "block";
    return;
  }

  try {
    // Construct the URL with the article URL as a query parameter
    const urlWithParams = `${apiUrl}?url=${encodeURIComponent(url)}&lang=en&engine=2`;

    // Make API call
    const response = await fetch(urlWithParams, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Display the summary
      summaryText.textContent = data.summary; // Adjust based on API response structure
      summaryResult.style.display = "block";
    } else {
      throw new Error(data.message || "Something went wrong.");
    }
  } catch (error) {
    errorMessage.textContent = `⚠️ ${error.message}`;
    errorMessage.style.display = "block";
  } finally {
    loadingSpinner.style.display = "none";
  }
}


summarizeBtn.addEventListener("click", summarizeArticle);
