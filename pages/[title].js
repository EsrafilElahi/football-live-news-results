import React from "react";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import NewsDetail from "./../components/other/NewsDetail";
import Layout from "./../components/layout/Layout";

function NewsDetails({ data }) {
  const posts = data.articles;
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout alertTitle="News Detail">
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <div>
              {post.title == title ? (
                <NewsDetail
                  title={post.title}
                  src={post.urlToImage}
                  desc={post.description}
                  author={post.author}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  let today = moment().format("yyyy-MM-DD");
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=soccer&from=${today}&sortBy=popularity&apiKey=32d8d94782b44cbfb5683dab7817ccf7`
  );
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export default NewsDetails;
