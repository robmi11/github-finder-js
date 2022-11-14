class Github {
  constructor() {
    this.client_id = "e2ae76b6033abeca60b5";
    this.client_secret = "489810a47f6b83470de81da5a723c110b692df7b";
    this.gitgub_url = "https://api.github.com/users";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `${this.gitgub_url}/${user}?client_id=${this.client_id}&client_sevret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return { profile };
  }
}

export default Github;