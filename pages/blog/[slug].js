import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";
import WebsiteDesignDev from "../../components/websiteDesignDevelopment/websiteDesignDevelopment";
import WebApp from "../../components/webApp/webApp";
import Hosting from "../../components/hosting/hosting";
import Ecommerce from "../../components/ecommerce/ecommerce";
import SocialMediaManagement from "../../components/socialMediaManagement/socialMediaManagement";
import WhiteLabel from "../../components/whiteLabel/whiteLabel";
import LogoBranding from "../../components/logoBranding/logoBranding";
import PrintedMarketing from "../../components/printedMarketing/printedMarketing";
import PropertyManagement from "../../components/propertyManagement/propertyManagement";
import BlogDetail from "../../components/blogDetail/blogDetail";
import GraphAPI from "../../services/graphQL";
import Custom404 from "../../components/404/404";
import Loader from "../../components/header/Loader";
import { useEffect } from "react";

function BlogDetails({ blogDetail, relativePostDetail }) {
  const router = useRouter();
  useEffect(() => {
    document.body.classList.add("blog-detail");
    return () => {
      document.body.classList.remove("blog-detail");
    };
  }, []);
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <BlogDetail blogDetail={blogDetail} relativeDetail={relativePostDetail} />
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const blogPosts = await GraphAPI.blogPostListing();
  const paths = blogPosts.data.data.posts.edges.map((item) => {
    const params = { slug: item.node.slug };
    return { params };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const blogDetail = await GraphAPI.singlePostSettings({ params });
  const blogDetailData = blogDetail.data.data.postBy;
  if (!blogDetailData) {
    return {
      notFound: true,
    };
  }
  const catName = blogDetailData.categories?.nodes[0]?.name;
  const notIn = blogDetailData.postId;
  const relativePostDetail = await GraphAPI.relativePostSettings(
    catName,
    notIn
  );

  return {
    props: {
      blogDetail: blogDetailData,
      relativePostDetail: relativePostDetail.data.data?.posts?.edges,
    },
  };
}
