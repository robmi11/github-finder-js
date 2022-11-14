import Github from "./classes/github";
import UI from "./classes/ui";
import "./styles/style.css";
import "bootswatch/dist/litera/bootstrap.min.css";

// Set copyright year at the page footer
const year = new Date().getFullYear();
document.getElementById("copy-year").textContent = year;

const fetchUser = new Github();
const ui = new UI();

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
        console.log(data);
        if (
          data.profile.message === "Not Found" ||
          data.profile.message.startsWith("API")
        ) {
          // Show alert User Not Found
          ui.showAlert("Nie znaleziono użytkownika", "alert alert-danger");
        } else {
          // Show User Profile
          ui.showProfile(data.profile);
        }
      })
      .catch((error) => console.error(error));
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
