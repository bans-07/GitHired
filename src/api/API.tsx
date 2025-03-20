// // const searchGithub = async () => {
// //   try {
// //     const start = Math.floor(Math.random() * 100000000) + 1;
// //     // console.log(import.meta.env);
// //     const response = await fetch(
// //       `https://api.github.com/users?since=${start}`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
// //         },
// //       }
// //     );
// //     // console.log('Response:', response);
// //     const data = await response.json();
// //     if (!response.ok) {
// //       throw new Error('invalid API response, check the network tab');
// //     }
// //     // console.log('Data:', data);
// //     return data;
// //   } catch (err) {
// //     // console.log('an error occurred', err);
// //     return [];
// //   }
// // };

// // const searchGithubUser = async (username: string) => {
// //   try {
// //     const response = await fetch(`https://api.github.com/users/${username}`, {
// //       headers: {
// //         Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
// //       },
// //     });
// //     const data = await response.json();
// //     if (!response.ok) {
// //       throw new Error('invalid API response, check the network tab');
// //     }
// //     return data;
// //   } catch (err) {
// //     // console.log('an error occurred', err);
// //     return {};
// //   }

// // };

// // export { searchGithub, searchGithubUser };

// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// if (!GITHUB_TOKEN) {
//   console.error("❌ GitHub Token is missing! Check your .env file.");
// }

// const fetchWithAuth = async (url: string) => {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${GITHUB_TOKEN}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("🚨 API Error:", error);
//     return null;
//   }
// };

// const searchGithub = async () => {
//   const start = Math.floor(Math.random() * 100000000) + 1;
//   return fetchWithAuth(`https://api.github.com/users?since=${start}`);
// };

// const searchGithubUser = async (username: string) => {
//   return fetchWithAuth(`https://api.github.com/users/${username}`);
// };

// export { searchGithub, searchGithubUser };

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
