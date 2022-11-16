import Github from "./classes/github";
import UI from "./classes/ui";
import "./styles/style.css";
import "bootswatch/dist/litera/bootstrap.min.css";

const fetchUser = new Github();
const ui = new UI();

// Set copyright year at the page footer
const year = new Date().getFullYear();
document.getElementById("copy-year").textContent = year;

// On page reload clear input field
document.getElementById("search-user").value = "";

// Search Input keyup event listener
const searchUser = document.getElementById("search-user");
searchUser.addEventListener("keyup", (event) => {
  // Get input value
  const searchText = event.target.value;

  // Check if searchText is empty
  if (searchText !== "") {
    fetchUser
      .getUser(searchText)
      .then((data) => {
        if (data.profile.message && data.profile.message.startsWith("API")) {
          ui.showAlert("Przekroczono liczbę zapytać", "alert alert-info");
          ui.clearProfile();
          return;
        }
        if (data.profile.message === "Not Found") {
          // Show alert User Not Found
          ui.showAlert("Nie znaleziono użytkownika", "alert alert-danger");
        } else {
          // Show User Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .catch((error) => console.error(error));
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
