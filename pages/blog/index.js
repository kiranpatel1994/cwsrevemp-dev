import Head from "next/head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogContent from "../../components/blogContent/blogContent";
import { useEffect } from "react";
import GraphAPI from "../../services/graphQL";
function Blog({ blogPagination, blogListingDetail }) {
  useEffect(() => {
    document.body.classList.add("blog");
    return () => {
      document.body.classList.remove("blog");
    };
  }, []);
  return (
    <div>
      <BlogContent blogData={blogPagination} blogDetail={blogListingDetail} />
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const limit = process.env.NEXT_PUBLIC_BLOG_LIMIT;
  const blogPagination = await GraphAPI.blogPagination(limit, "");
  const blogListingDetail = await GraphAPI.blogListing();
  return {
    props: {
      blogPagination: blogPagination.data.data?.posts,
      blogListingDetail:
        blogListingDetail.data.data?.pageBy?.blogListingSettings,
    },
  };
}
