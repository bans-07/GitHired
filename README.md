# GitHired

GitHired is a **TypeScript-based Candidate Search Application** that integrates with the GitHub API to help recruiters find potential candidates based on their GitHub activity. The application stores selected candidates in local storage and is deployed on **Render**.

## 🚀 Features

- 🔍 **Search for GitHub users** based on keywords and filter criteria
- 📂 **View user profiles** including repositories, followers, and contributions
- ⭐ **Save potential candidates** in local storage for future reference
- 🌐 **Deployed on Render** for easy access
- 🎨 **Built with TypeScript** for better code maintainability

## 🛠️ Technologies Used

- **Frontend**: TypeScript, React, Vite
- **Backend**: Node.js, Express.js
- **API**: GitHub REST API
- **Storage**: Local Storage
- **Deployment**: Render

## 📂 Project Structure
```
GitHired/
│── public/                 # Static assets
│── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Main application pages
│   ├── services/           # API handling logic
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Root component
│── .gitignore
│── package.json
│── tsconfig.json
│── vite.config.ts
│── README.md
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/bans-07/GitHired.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd GitHired
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open in Browser:**
   Visit `http://localhost:5173/` to see the application running.

## 🔧 Configuration

Create a `.env` file in the root directory and add your GitHub API token:
```
VITE_GITHUB_API_KEY=your_github_api_token
```

## 📌 Future Enhancements

- 📊 **Advanced filtering** (e.g., programming languages, activity levels)
- 📧 **Export saved candidates** to CSV or email
- ⚡ **Improved UI/UX** with animations and better design
- 🔄 **Backend database support** for persistent storage

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes (`git commit -m "Added a new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## 📜 License
This project is licensed under the MIT License.

---
Made with ❤️ by [bans-07](https://github.com/bans-07)

