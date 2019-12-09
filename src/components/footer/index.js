import React from "react";
import Column from "./Column";
import github from "../../assets/github.svg";
import slack from "../../assets/slack.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
let svgs = [github, slack, facebook, twitter];
let data = [
  {
    title: "Use Cases",
    list: ["Overview", "Development", "Product Management"]
  },
  {
    title: "Community",
    list: ["Forum", "Questions", "Tutorials", "Community Guidelines"]
  },
  { title: "Products", list: ["Support", "Postman Community"] }
];
export default () => (
  <footer className="site-footer">
    <article className="footer-container">
      {data.map(column => (
        <Column column={column} />
      ))}
    </article>
    <section className="important-links">
      <h2>Social Links</h2>
      <div className="social-links-container">
        {svgs.map(svg => (
          <img className="links-svgs" alt="links-social-media" src={svg}></img>
        ))}
      </div>
    </section>
  </footer>
);
