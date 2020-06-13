import React from "react";
import "../styles/Home.scss";

function Home() {
  return (
    // TODO REMOVE INLINE STYLES
    <section id="Home" className="landing">
      <div>
        <h1 className="title">
          Erratika
        </h1>
        <div style={{ fontSize: "1.75rem"}}>
          <span>Full Stack</span>
          <span> • </span>
          <span>DevOps</span>
          <span> • </span>
          <span>Android</span>
        </div>
      </div>
    </section>
  );
}
export default Home;
