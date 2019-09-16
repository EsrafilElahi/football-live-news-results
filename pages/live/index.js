import axios from "axios";
import Layout from "../../components/layout/Layout";
import { MatchCard } from "./../../components/other/MatchCard";
import Pagination from "./../../components/other/Pagination";
import usePaginationTools from "./../../components/pagination tools/usePaginationTools";

function Live({ data }) {
  const posts = data.matches;
  const { paginatedPosts, paginate, postsPerPage } = usePaginationTools(posts);

  return (
    <Layout alertTitle="Live">
      <div
        className={
          paginatedPosts.length > 12 ? "row gy-3 content-sec" : "row gy-3"
        }
      >
        {posts.length === 0 ? (
          <div className="mt-4 text-danger">There Is No Live Match 🤔</div>
        ) : (
          paginatedPosts.map((post) => {
            const Hteam = post.homeTeam.name;
            const Ateam = post.awayTeam.name;
            const Hscore = post.score.fullTime.homeTeam;
            const Ascore = post.score.fullTime.awayTeam;
            const LeagueName = post.competition.name;

            return (
              <div key={post.id} className="c">
                <MatchCard
                  LeagueName={LeagueName}
                  Hteam={Hteam}
                  Hscore={Hscore}
                  Ateam={Ateam}
                  Ascore={Ascore}
                />
              </div>
            );
          })
        )}

        {paginatedPosts.length > 12 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        ) : null}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    `https://api.football-data.org/v2/matches?status=LIVE`,
    {
      headers: { "X-Auth-Token": "24574cf932a34d28b394c721600f5471" },
    }
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

export default Live;
