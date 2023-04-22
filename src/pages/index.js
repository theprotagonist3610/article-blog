import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ categories, all }) {
  let [searchWord, setSearchWord] = useState("");
  let [searchList, setSearchList] = useState([...all]);
  const matchSearch = () => {
    let liste = [];
    categories.map((categorie) => {
      categorie.liste.map((el) => {
        new RegExp(searchWord.toLowerCase()).test(el.titre.toLowerCase()) &&
          liste.push(el);
      });
    });
    return liste;
  };
  const returnOthers = (liste, phone = 0) => {
    let res = [];
    if (liste.length >= 2) {
      for (let i = 1; i < liste.length; i++) {
        if (phone && res.length < 2) {
          res.push(liste[i]);
        } else if (!phone && res.length < 3) {
          res.push(liste[i]);
        }
      }
    }
    return res;
  };
  let [phoneOnglets, setPhoneOnglets] = useState(false);
  let [phoneSearchOnglet, setPhoneSearchOnglet] = useState(false);
  return (
    <>
      <Head>
        <title>Tout est NET : Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div id="background">
          <div className="blob" id="blob1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D6D6D6"
                d="M57.8,-44.6C73.7,-26.2,84.4,-2.2,80.6,19.9C76.7,42,58.2,62.2,35.5,72.6C12.9,83.1,-13.9,83.8,-33.8,73.1C-53.7,62.4,-66.8,40.3,-72.5,16.2C-78.2,-7.8,-76.7,-33.8,-63.4,-51.7C-50.1,-69.5,-25,-79.2,-2,-77.6C21,-76,41.9,-63.1,57.8,-44.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="blob" id="blob2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#7DD8F6"
                d="M63.1,-51.4C75.1,-35.4,73.3,-9.5,64.6,9.1C55.9,27.8,40.2,39.3,21.2,51.1C2.3,63,-19.9,75.2,-35.3,69.3C-50.7,63.4,-59.3,39.5,-65.2,14.7C-71,-10.2,-74.1,-35.8,-62.7,-51.7C-51.4,-67.5,-25.7,-73.6,-0.1,-73.5C25.6,-73.5,51.2,-67.4,63.1,-51.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="blob" id="blob3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D6D6D6"
                d="M31.8,-49.9C40.5,-37.4,46.6,-27.2,53.7,-15.1C60.8,-3,68.9,11,66,21.9C63.2,32.9,49.2,40.7,36.3,47C23.5,53.3,11.7,58.1,0.9,56.8C-9.9,55.6,-19.7,48.2,-33.3,42.1C-46.9,36,-64.2,31.3,-69.5,21.1C-74.8,11,-68,-4.4,-60.6,-17.3C-53.2,-30.2,-45.1,-40.5,-34.8,-52.6C-24.6,-64.6,-12.3,-78.3,-0.4,-77.8C11.5,-77.2,23,-62.4,31.8,-49.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="blob" id="blob4">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#7DD8F6"
                d="M37.6,-1.3C37.6,21.8,18.8,43.6,0.4,43.6C-18,43.6,-36,21.8,-36,-1.3C-36,-24.4,-18,-48.7,0.4,-48.7C18.8,-48.7,37.6,-24.4,37.6,-1.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="blob" id="blob5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D6D6D6"
                d="M53,-40.4C58.4,-35.6,45.1,-14.2,37.7,4.6C30.2,23.3,28.4,39.4,19.7,45.3C10.9,51.2,-4.8,47,-15.9,39.3C-26.9,31.5,-33.2,20.3,-37.7,6.8C-42.2,-6.7,-45,-22.4,-38.4,-27.5C-31.9,-32.5,-15.9,-27,4,-30.1C23.9,-33.3,47.7,-45.2,53,-40.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="blob" id="blob6">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#7DD8F6"
                d="M58.3,-39.2C71.8,-29.5,76.5,-5.5,68.1,9.2C59.7,23.9,38.2,29.4,20,36C1.8,42.6,-13.1,50.4,-30.7,48C-48.4,45.6,-68.7,33,-74.8,14.6C-80.9,-3.7,-72.8,-27.6,-58,-37.6C-43.1,-47.6,-21.6,-43.5,0.4,-43.9C22.4,-44.2,44.7,-48.8,58.3,-39.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div id="frontground">
          <div id="header">
            <div id="header-top">
              <div id="logo">
                <div
                  id="hide-icon"
                  onClick={() => {
                    setPhoneOnglets(!phoneOnglets);
                  }}
                >
                  Hide
                </div>
                <div>
                  <a
                    href={"/"}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    Tout Est Net
                  </a>
                </div>
              </div>
              <div
                id="onglets-phone"
                style={{ left: phoneOnglets ? "0%" : "-100%" }}
              >
                <div
                  className="onglets back"
                  onClick={() => {
                    setPhoneOnglets(!phoneOnglets);
                  }}
                >
                  Retour
                </div>
                <div className="onglets accueil">
                  <a
                    href={"/"}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    Accueil
                  </a>
                </div>
                {categories.map((el, index) => (
                  <div key={index}>{el.categorie}</div>
                ))}
                <div className="onglets contact">
                  <a
                    href={"/contact"}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    Contact
                  </a>
                </div>
                <div
                  className="onglets recherche"
                  onClick={() => {
                    setPhoneSearchOnglet(!phoneSearchOnglet);
                  }}
                >
                  Recherche
                </div>
              </div>
              <div
                id="article-search-phone"
                style={{ top: phoneSearchOnglet ? "0%" : "-100%" }}
              >
                <div
                  id="search-back"
                  onClick={() => {
                    setPhoneSearchOnglet(!phoneSearchOnglet);
                  }}
                >
                  <div>Retour</div>
                </div>
                <div id="search-input">
                  <input type="text"></input>
                  <div id="valid-search">&#128269;</div>
                </div>
                <div id="liste-search">
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                  <div className="liste-titre">
                    Ceci est un titre legeremet long pour occuper beaucoup de
                    place
                  </div>
                </div>
              </div>
              <div id="onglets-computer">
                <div className="onglets accueil">
                  <a
                    href={"/"}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    Accueil
                  </a>
                </div>
                <div className="onglets contact">
                  <a
                    href={"/contact"}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div id="header-bottom">
              {categories.map((el, index) => (
                <div key={index}>
                  <a
                    href={`http://localhost:3000/categories/${el.categorie}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {el.categorie}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div id="content-phone">
            {categories.map((categorie, index) => (
              <div key={index} className="categorie-resume">
                <div className="categorie-resume-header">
                  <div className="categorie-name">{categorie.categorie}</div>
                  <div className="categorie-color">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        gridArea: "2 / 1 / 3 / 2",
                        backgroundColor: "#7DD8F6",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="categorie-resume-principal">
                  <div className="categorie-resume-principal-back">
                    <img
                      alt="image"
                      src="img/img2.jpg"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </div>
                  <div className="categorie-resume-principal-front">
                    <div className="resume-titre">
                      {categorie.liste[0].titre}
                    </div>
                    <div className="resume-resume">
                      {categorie.liste[0].resume}
                    </div>
                    <div className="resume-author">
                      {categorie.liste[0].author}
                    </div>
                    <div className="resume-date">
                      {categorie.liste[0].datestamp}
                    </div>
                  </div>
                </div>
                <div className="categorie-resume-others">
                  {returnOthers(categorie.liste, 1).map((el, id) => (
                    <div key={id} className="other-resume">
                      <div className="other-resume-back">
                        <img
                          src="img/img4.jpg"
                          width={"100%"}
                          height={"100%"}
                        ></img>
                      </div>
                      <div className="other-resume-front">
                        <div className="other-resume-titre">{el.titre}</div>
                        <div className="other-resume-author">{el.author}</div>
                        <div className="other-resume-date">{el.datestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="categorie-resume">
              <div className="categorie-resume-header">
                <div className="categorie-name">Jeunesse</div>
                <div className="categorie-color">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      gridArea: "2 / 1 / 3 / 2",
                      backgroundColor: "#7DD8F6",
                    }}
                  ></div>
                </div>
              </div>
              <div className="categorie-resume-principal">
                <div
                  className="categorie-resume-principal-back"
                  style={{
                    overflow: "hidden",
                    backgroundImage: `img/img2.jpg`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="categorie-resume-principal-front">
                  <div className="resume-titre">
                    Ceci est un titre que j'ecris volontairement long pour
                    tester le site que je cree pour un client
                  </div>
                  <div className="resume-resume">
                    <p>
                      Ceci est un titre que j'ecris volontairement long pour
                      tester le site que je cree pour un client. Ceci est un
                      titre que j'ecris volontairement long pour tester le site
                      que je cree pour un client. Ceci est un titre que j'ecris
                      volontairement long pour tester le site que je cree pour
                      un client.
                    </p>
                  </div>
                  <div className="resume-author">Alexandre HOUNKPEVI</div>
                  <div className="resume-date">18 Septembre 2023</div>
                </div>
              </div>
              <div className="categorie-resume-others">
                <div className="other-resume">
                  <div className="other-resume-back">
                    <img
                      src="img/img4.jpg"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </div>
                  <div className="other-resume-front">
                    <div className="other-resume-titre">
                      Ceci est un titre que j'ecris volontairement long pour
                      tester le site que je cree pour un client
                    </div>
                    <div className="other-resume-author">
                      Alexandre HOUNKPEVI
                    </div>
                    <div className="other-resume-date">18 Septembre 2023</div>
                  </div>
                </div>
                <div className="other-resume">
                  <div className="other-resume-back">
                    <img
                      src="img/img4.jpg"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </div>
                  <div className="other-resume-front">
                    <div className="other-resume-titre">
                      Ceci est un titre que j'ecris volontairement long pour
                      tester le site que je cree pour un client
                    </div>
                    <div className="other-resume-author">
                      Alexandre HOUNKPEVI
                    </div>
                    <div className="other-resume-date">18 Septembre 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content-computer">
            <div id="article-accueil">
              {categories.map((categorie, index) => (
                <div key={index} className="categorie-resume">
                  <div className="categorie-resume-header">
                    <div className="categorie-name">{categorie.categorie}</div>
                    <div className="categorie-color">
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          gridArea: "2 / 1 / 3 / 2",
                          backgroundColor: "#7DD8F6",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="categorie-resume-content">
                    <div
                      className="categorie-resume-principal"
                      onClick={(e) => {
                        window?.location?.assign(
                          `http://localhost:3000/articles/${categorie.liste[0].url}`
                        );
                      }}
                    >
                      <div className="categorie-resume-principal-back">
                        <img
                          alt="image"
                          src="img/img2.jpg"
                          width={"100%"}
                          height={"100%"}
                        >
                          {/* ici il faut inserer lien d'image */}
                        </img>
                      </div>
                      <div className="categorie-resume-principal-front">
                        <div className="resume-titre">
                          {categorie.liste[0].titre}
                        </div>
                        <div className="resume-resume">
                          {categorie.liste[0].resume}
                        </div>
                        <div className="resume-date">
                          {categorie.liste[0].datestamp}
                        </div>
                        <div className="resume-author">
                          {categorie.liste[0].author}
                        </div>
                      </div>
                    </div>

                    <div className="categorie-resume-others">
                      {returnOthers(categorie.liste).map((el, id) => (
                        <div
                          key={id}
                          className="other-resume"
                          onClick={(e) => {
                            window?.location?.assign(
                              `http://localhost:3000/articles/${el.url}`
                            );
                          }}
                        >
                          <div
                            className="other-resume-img"
                            style={{
                              background: "url(img/img4.jpg)",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="other-resume-details">
                            <div className="other-resume-titre">{el.titre}</div>
                            <div className="other-resume-author">
                              {el.author}
                            </div>
                            <div className="other-resume-date">
                              {el.datestamp}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="article-search">
              <div id="search-zone">
                <input
                  onChange={(e) => {
                    setSearchWord(e.target.value);
                    e.target.value != ""
                      ? setSearchList(matchSearch())
                      : setSearchList(all);
                  }}
                  type="text"
                  placeholder="Chercher un article"
                ></input>
                <div id="valid-search">&#128269;</div>
              </div>
              <div id="liste-zone">
                {searchList.map((el, index) => (
                  <div key={index} className="liste-titre">
                    <a
                      href={`http://localhost:3000/articles/${el.url}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {el.titre}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
function extractData(data) {
  return {
    categorie: data.categorie,
    datestamp: data.datestamp,
    author: data.auteur,
    resume: data.resume,
    titre: data.titre,
  };
}
export async function getServerSideProps() {
  let Map = await (
    await fetch("http://localhost:3000/articles/map.json")
  ).json();
  let all = await (async () => {
    let liste = [];
    for (let i = 0; i < Map.length; i++) {
      liste.push({
        url: Map[i],
        ...extractData(
          await (
            await fetch(`http://localhost:3000/articles/${Map[i]}.json`)
          ).json()
        ),
      });
    }
    for (let i = 0; i < liste.length; i++) {
      let temp = 0;
      for (let j = 0; j < liste.length - 1; j++) {
        if (liste[j].datestamp < liste[j + 1].datestamp) {
          temp = liste[j];
          liste[j] = liste[j + 1];
          liste[j + 1] = temp;
        }
      }
    }
    return liste;
  })();
  let content = await (async () => {
    let liste = [];
    for (let i = 0; i < Map.length; i++) {
      liste.push(
        extractData(
          await (
            await fetch(`http://localhost:3000/articles/${Map[i]}.json`)
          ).json()
        )
      );
    }
    return liste;
  })();
  for (let i = 0; i < Map.length; i++) {
    Map[i] = { url: Map[i], ...content[i] };
  }
  let categories = (() => {
    let data = [];
    Map.map((el) => data.push(el.url.split("__")[0]));
    let res = [];
    new Set(data).forEach((val) => res.push(val));
    return res;
  })();
  let articles_by_categorie = (() => {
    let res = categories,
      response = [];
    let data = [];
    res.map((el) => {
      Map.map((e) => new RegExp(el).test(e.url) && data.push(e));
      response.push({ categorie: el, liste: data });
      data = [];
    });
    return response;
  })();
  let a_la_une = (() => {
    let liste = [],
      temp = 0;
    Map.map((el) => liste.push([el, parseInt(el.url.split("__")[2])]));
    for (let i = 0; i < liste.length; i++) {
      for (let j = 0; j < liste.length - 1; j++) {
        if (liste[j][1] < liste[j + 1][1]) {
          temp = liste[j];
          liste[j] = liste[j + 1];
          liste[j + 1] = temp;
        }
      }
    }
    let list = [];
    liste.map((el) => list.push(el[0]));
    return list;
  })();
  articles_by_categorie.unshift({ categorie: "A la Une", liste: a_la_une });
  return {
    props: {
      categories: articles_by_categorie,
      all: all,
    },
  };
}
