import Infos from "./components/Infos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../styles/globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Arnaud Ulric — QA Engineer",
  description: "About me and my work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ height: "100vh" }}>
        <StoreProvider>
          <Header />

          <div className="main">
            <aside className="sidebar">
              <Infos />
            </aside>

            <main className="main-content">{children}</main>
          </div>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
