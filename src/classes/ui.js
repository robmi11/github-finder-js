/**
 * Class to display user profile with user lates repos
 * @param user profile info
 * @return UI
 */
class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Show github user profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid rounded-circle mb-3" src="${
              user.avatar_url
            }" />
            <a href="${
              user.html_url
            }" class="btn btn-primary d-block rounded-1 mb-4" target="_blank">${
      user.name ? user.name : "Profil"
    }</a>
          </div>
          <div class="col-md-9">
            <span class="badge text-bg-primary ms-3">Repozytoria: ${
              user.public_repos
            }</span>
            <span class="badge text-bg-secondary ms-1">Gists: ${
              user.public_gists
            }</span>
            <span class="badge text-bg-success ms-1">Followers: ${
              user.followers
            }</span>
            <span class="badge text-bg-info ms-1">Following: ${
              user.following
            }</span>
            <br><br><br>
            <ul class="list-group">
              <li class="list-group-item">Firma: ${
                user.company ? user.company : "BRAK"
              }</li>
              <li class="list-group-item">Web/Blog: ${
                user.blog ? user.blog : "BRAK"
              }</li>
              <li class="list-group-item">Lokalizacj: ${
                user.location ? user.location : "BRAK"
              }</li>
              <li class="list-group-item">Na github&apos;ie od: ${
                user.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "BRAK"
              }</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Najnowsze repozytoria</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge text-bg-primary ms-3">Stars: ${repo.stargazers_count}</span>
            <span class="badge text-bg-secondary ms-1">Watchers: ${repo.watchers_count}</span>
            <span class="badge text-bg-success ms-1">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  // Show error message
  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Error Message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear UI
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

export default UI;
