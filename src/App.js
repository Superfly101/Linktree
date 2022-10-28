import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Profile from "./components/Profile/Profile";
import ShareModal from "./components/ShareModal/ShareModal";

function App() {
  const [shareModalShown, setShareModalShown] = useState(false);

  const toggleShareModal = () => {
    setShareModalShown((prev) => !prev);
  };

  return (
    <>
      {shareModalShown && <ShareModal onCloseHandler={toggleShareModal} />}
      <main className="container mx-auto px-4">
        <Profile onShareHandler={toggleShareModal} />
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
