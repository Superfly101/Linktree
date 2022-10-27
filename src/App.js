import Footer from "./components/Footer/Footer";
import Links from "./components/Links/Links";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <main className="container mx-auto px-4">
        <Profile />
        <Links />
      </main>

      <Footer />
    </>
  );
}

export default App;
