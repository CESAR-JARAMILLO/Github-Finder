class Github {
  constructor() {
    this.client_id = '484803e5d66765ec3379',
    this.client_secret = '6cc6a4c6b7d05c855866f11c139cd5c74eca7eaf'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      // ES6 - same as {profile : profile}
      profile,
      repos
    }
  }
}