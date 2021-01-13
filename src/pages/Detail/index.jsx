import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import ContentCourse from "./components/ContentCourse";
import Project from "./components/Project";
import Related from "./components/Related";

function Detail(props) {
  return (
    <>
      <Header />
     
        <main>
          <Banner />
          <ContentCourse />
          <Project />
          <Related />
        </main>
      <Footer />
    </>
  );
}

export default Detail;
