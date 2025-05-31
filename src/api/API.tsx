const searchGithub = async () => {
  try {
    console.log("GitHub Token:", import.meta.env.VITE_GITHUB_TOKEN); // Debugging

    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error("GitHub Token is missing! Check your .env file.");
    }

    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in searchGithub:", err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    console.log("Fetching user:", username);
    
    if (!import.meta.env.VITE_GITHUB_TOKEN) {
      throw new Error("GitHub Token is missing! Check your .env file.");
    }

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in searchGithubUser:", err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
