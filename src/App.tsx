import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Row from "./compornents/Row";
import { requests } from "./request";
import Banner from "./compornents/Banner";
import Nav from "./compornents/Nav";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Nav></Nav>
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
