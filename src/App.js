import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ProfileLinks from "./components/ProfileLinks/ProfileLinks";
import Profile from "./components/Profile/Profile";
import ShareModal from "./components/ShareModal/ShareModal";

function App() {
  const [shareModalShown, setShareModalShown] = useState(false);

  const toggleShareModal = () => {
    setShareModalShown((prev) => !prev);
  };

  return (
    <>
      {/* Modal to share linktree to other platforms (Whatsapp, Twitter, LinkedIn) */}
      {shareModalShown && <ShareModal onCloseHandler={toggleShareModal} />}

      <main className="container mx-auto px-4">
        {/*Profile Avatar */}
        <Profile onShareHandler={toggleShareModal} />

        {/* Profile links section */}
        <ProfileLinks />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
