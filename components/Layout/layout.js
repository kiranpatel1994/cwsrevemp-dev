import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({
  children,
  headerSettings,
  footerSettings,
  seo,
  thumbnail,
}) {
  return (
    <>
      <Header data={headerSettings} seo={seo} thumbnail={thumbnail} />
      {children}
      <Footer settings={footerSettings} />
    </>
  );
}
