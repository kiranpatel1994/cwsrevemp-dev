import Header from "../header/Header";
import Footer from "../footer/Footer";
import { replaceImgUrls } from "../../services/graphQL";

export default function Layout({
  children,
  headerSettings,
  footerSettings,
  seo,
  thumbnail,
}) {
  return (
    <>
      <Header
        data={replaceImgUrls(headerSettings)}
        seo={replaceImgUrls(seo)}
        thumbnail={replaceImgUrls(thumbnail)}
      />
      {children}
      <Footer settings={replaceImgUrls(footerSettings)} />
    </>
  );
}
