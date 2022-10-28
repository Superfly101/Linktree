import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <main className="container mx-auto px-4">
        <Profile />
        <Links />
        <div className="flex justify-center gap-4 h-14 p-4">
          <a>
            <img
              src="/icons/slack-icon.png"
              className="h-full"
              alt="Slack icon"
            />
          </a>
          <a href="https://github.com/Superfly101/linktree">
            <img
              src="/icons/github-icon.png"
              className="h-full"
              alt="GitHub icon"
            />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
