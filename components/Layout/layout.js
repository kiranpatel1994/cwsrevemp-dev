import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({
  children,
  headerSettings,
  footerSettings,
  seo,
}) {
  return (
    <>
      <Header data={headerSettings} seo={seo} />
      {children}
      <Footer settings={footerSettings} />
    </>
  );
}
