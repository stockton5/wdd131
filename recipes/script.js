const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#recipe-search");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === "") {
    searchInput.focus();
    return;
  }

  console.log(`Searching for: ${searchTerm}`);
});