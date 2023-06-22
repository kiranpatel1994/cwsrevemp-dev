import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children, headerSettings, footerSettings }) {
  return (
    <>
      <Header logo={headerSettings} />
      {children}
      <Footer settings={footerSettings} />
    </>
  );
}
