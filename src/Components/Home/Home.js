import React from "react";
import Row from "../Row/Row";
import { requests } from "../../Axios/requests";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import "./Home.css";
import { useStateValue } from "../../ContextApi/stateProvider";
import { truncate } from "../../Utils/truncate";

function Home() {
  const { param } = useParams();
  const [{ user }] = useStateValue();

  return (
    <div className="home">
      <Nav />
      <Banner />
      {param === undefined && (
        <Row
          title="Athlete Highlights"
          isLargeRow
          fetchUrl={requests.fetchTrending}
        />
      )}

      {(param === undefined || param === "tv") && (
        <>
          {param === "tv" && (
            <Row
              title="Game Highlights"
              isLargeRow
              fetchUrl={requests.fetchTrendingTV}
            />
          )}
          <Row title="Training Highlights" fetchUrl={requests.fetchPopularTV} />
          <Row
            title="Brain Dump"
            fetchUrl={requests.fetchNetflixOriginalsTV}
          />
          <Row title="Strength and Conditioning" fetchUrl={requests.fetchAiringTodayTV} />
        </>
      )}

      {param === undefined && (
        <Row
          title={
            "Top Picks for " +
            truncate(
              user?.displayName ? user?.displayName : user?.email.slice(0, -10),
              15
            )
          }
          fetchUrl={requests.fetchTrending}
        />
      )}

      {(param === undefined || param === "movies") && (
        <>
          {/*{param === undefined && <h2>Movies</h2>}
          <Row
            title="Popular on Netflix"
            isLargeRow={param === "movies"}
            fetchUrl={requests.fetchPopularMovies}
          />
          
          <Row
            title="New Release"
            fetchUrl={requests.fetchNowPlayingMovies}
          />
          {/*<Row title="Recently Added" fetchUrl={requests.fetchNowPlayingMovies} />*/}
          {param === "movies" && (
            <Row
              title="Favorited Instruction Videos"
              isLargeRow
              fetchUrl={requests.fetchTrendingMovie}
            />
          )}
          <Row title="Defensive Instruction" fetchUrl={requests.fetchActionMovies} />
          <Row title="Offensive Instruction" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Pitching Instruction" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Baserunning" fetchUrl={requests.fetchRomanceMovies} />
          <Row
            title="Arm Care And Velocity Development"
            fetchUrl={requests.fetchDocumentariesMovies}
          />
        </>
      )}

      {param === "latest" && (
        <>
          <Row
            title="Offensive Approach"
            isLargeRow
            fetchUrl={requests.fetchPopularTV}
          />
          <Row title="Baseball IQ" fetchUrl={requests.fetchAiringTodayTV} />
          <Row
            title="Lessons From The Pros"
            fetchUrl={requests.fetchNowPlayingMovies}
          />
        </>
      )}
    </div>
  );
}

export default Home;
