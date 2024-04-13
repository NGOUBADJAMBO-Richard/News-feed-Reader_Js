// Make a GET request to the news API
fetch("https://www.googleapis.com/books/v1/volumes?q=search+query")
  .then((response) => {
    // Check if the request was successful
    if (response.ok) {
      // Parse the response as JSON
      return response.json();
    } else {
      // Handle the error
      throw new Error(`Error: ${response.statusText}`);
    }
  })
  .then((data) => {
    // Get the news container element
    const newsContainer = document.getElementById("news-container");

    // Loop through the news articles and create HTML elements for each one
    data.articles.forEach((article) => {
      // Create a new div for the news article
      const articleDiv = document.createElement("article");
      articleDiv.classList.add("news-article");

      // Create a new h2 for the news article title
      const articleTitle = document.createElement("h2");
      articleTitle.textContent = article.title;

      // Create a new img element for the article image
      const articleImage = document.createElement("img");
      articleImage.src = article.urlToImage;
      articleImage.alt = article.title;
      articleImage.addEventListener("click", () => {
        // Set the modal content when the article image is clicked
        document.querySelector(".modal-title").textContent = article.title;
        document.querySelector(".modal-image").src = article.urlToImage;
        document.querySelector(".modal-description").textContent =
          article.description;
        document.querySelector(".modal").style.display = "block";
      });

      // Create a new p for the news article description
      const articleDescription = document.createElement("p");
      articleDescription.textContent = article.description;

      // Append the article image, title, and description to the article element
      articleElement.appendChild(articleImage);
      articleElement.appendChild(articleTitle);
      articleElement.appendChild(articleDescription);

      // Append the article div to the news container
      newsContainer.appendChild(articleDiv);
    });
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
