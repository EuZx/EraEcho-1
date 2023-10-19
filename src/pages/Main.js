import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <section className="coverpic">
        <div className="cover">
          <h2 className="seach-items-or">Seach Items or Keywords</h2>
        </div>
      </section>
      <Button
        className="search"
        variant="outline-primary"
        href="/searchresultspage"
      >
        search
      </Button>
      <h1 className="eraecho2">EraEcho</h1>
      <nav className="three-tabs">
        <a className="home2">Home</a>
        <Link className="login1" to="/loginpage">
          Login
        </Link>
        <Link className="my-history2" to="/myhistory">
          My History
        </Link>
      </nav>
      <h2 className="top-picks">Top Picks</h2>
      <h2 className="best-ratings">Best Ratings</h2>
      <h2 className="you-may-like">You May Like</h2>
      <h2 className="similar-items">Similar Items</h2>
      <a className="top-pick-1" target="_blank" href="/itemdetailspage" />
      <a className="top-pick-2" target="_blank" href="/itemdetailspage" />
      <div className="top-pick-3" />
      <div className="top-pick-4" />
      <div className="top-pick-5" />
      <div className="top-pick-6" />
      <div className="best-rating-1" />
      <div className="best-rating-2" />
      <div className="best-rating-3" />
      <div className="best-rating-4" />
      <div className="best-rating-5" />
      <div className="best-rating-6" />
      <div className="may-like-1" />
      <div className="may-like-2" />
      <div className="may-like-3" />
      <div className="may-like-4" />
      <div className="may-like-5" />
      <div className="may-like-6" />
      <div className="similar-1" />
      <div className="similar-2" />
      <div className="similar-3" />
      <div className="similar-4" />
      <div className="similar-5" />
      <div className="similar-6" />
      <div className="top-1-text">details</div>
      <div className="top-2-text">details</div>
      <div className="top-3-text">details</div>
      <div className="top-4-text">details</div>
      <div className="top-5-text">details</div>
      <div className="top-6-text">details</div>
      <div className="best-1-text">details</div>
      <div className="best-2-text">details</div>
      <div className="best-3-text">details</div>
      <div className="best-4-text">details</div>
      <div className="best-5-text">details</div>
      <div className="best-6-text">details</div>
      <div className="maylike-1-text">details</div>
      <div className="maylike-2-text">details</div>
      <div className="maylike-3-text">details</div>
      <div className="maylike-4-text">details</div>
      <div className="maylike-5-text">details</div>
      <div className="maylike-6-text">details</div>
      <div className="similar-1-text">details</div>
      <div className="similar-2-text">details</div>
      <div className="similar-3-text">details</div>
      <div className="similar-4-text">details</div>
      <div className="similar-5-text">details</div>
      <div className="similar-6-text">details</div>
    </div>
  );
};

export default Main;
