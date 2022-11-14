import Github from "./classes/github";
import "./styles/style.css";
import "bootswatch/dist/litera/bootstrap.min.css";

// Set copyright year at the page footer
const year = new Date().getFullYear();
document.getElementById("copy-year").textContent = year;

const fetchUser = new Github();

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
        if (data.profile.message === "Not Found") {
          console.log("Not found");
          // Show alert User Not Found
        } else {
          console.log(data.profile);
          // Show User Profile
        }
      })
      .catch((error) => console.error(error));
  }
});
