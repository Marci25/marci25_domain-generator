/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generateDomains(pronouns, adjectives, nouns) {
    let domains = [];

    for (let p of pronouns) {
      for (let a of adjectives) {
        for (let n of nouns) {
          domains.push(`${p}${a}${n}.com`);
        }
      }
    }
    return domains;
  }
  let domainsList = generateDomains(pronoun, adj, noun);
  domainsList.forEach(
    domain =>
      (document.querySelector("#Dominios").innerHTML +=
        "<li>" + domain + "</li>")
  );
};
