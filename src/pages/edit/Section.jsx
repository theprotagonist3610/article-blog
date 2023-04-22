import React from "react";
import { useState, useEffect } from "react";

const Section = ({ index, sections, setSections }) => {
  let [valider, setValider] = useState(false);
  let [titre, setTitre] = useState("");
  let [initialParagraph, setInitialParagraph] = useState("");
  let [other, setOther] = useState([]);
  let [showModal_link, setShowModal_link] = useState({
    show: false,
    index: 0,
    link: "",
  });
  const updateSections = () => {
    let updated = [...sections];
    updated[index] = {
      titre: titre,
      valide: valider,
      paragraphes: [initialParagraph, ...other],
    };
    setSections(updated);
    return updated;
  };
  const putInStrong = (data, start, end) => {
    let strongText = `<strong>${data.substring(start, end)}</strong>`;
    let splitedTexts = { start: [], end: [] };
    for (let i = 0; i < data.length; i++) {
      i < start
        ? splitedTexts.start.push(data[i])
        : i > end
        ? splitedTexts.end.push(data[i])
        : (splitedTexts.end = splitedTexts.end);
    }
    return `${splitedTexts.start.join("")}${strongText}${splitedTexts.end.join(
      ""
    )}`;
  };
  const putInItalic = (data, start, end) => {
    let strongText = `<i>${data.substring(start, end)}</i>`;
    let splitedTexts = { start: [], end: [] };
    for (let i = 0; i < data.length; i++) {
      i < start
        ? splitedTexts.start.push(data[i])
        : i > end
        ? splitedTexts.end.push(data[i])
        : (splitedTexts.end = splitedTexts.end);
    }
    return `${splitedTexts.start.join("")}${strongText}${splitedTexts.end.join(
      ""
    )}`;
  };
  const putInUnderline = (data, start, end) => {
    let strongText = `<u>${data.substring(start, end)}</u>`;
    let splitedTexts = { start: [], end: [] };
    for (let i = 0; i < data.length; i++) {
      i < start
        ? splitedTexts.start.push(data[i])
        : i > end
        ? splitedTexts.end.push(data[i])
        : (splitedTexts.end = splitedTexts.end);
    }
    return `${splitedTexts.start.join("")}${strongText}${splitedTexts.end.join(
      ""
    )}`;
  };
  const putInLink = (data, start, end, link) => {
    let strongText = `<a href="${link}">${data.substring(start, end)}</a>`;
    let splitedTexts = { start: [], end: [] };
    for (let i = 0; i < data.length; i++) {
      i < start
        ? splitedTexts.start.push(data[i])
        : i > end
        ? splitedTexts.end.push(data[i])
        : (splitedTexts.end = splitedTexts.end);
    }
    return `${splitedTexts.start.join("")}${strongText}${splitedTexts.end.join(
      ""
    )}`;
  };
  useEffect(() => {
    updateSections();
  }, [titre, initialParagraph, other, valider]);
  return (
    <fieldset
      style={{ backgroundColor: valider ? "rgba(29, 183, 5,.3)" : "inherit" }}
      className={`fieldset-style ${index}`}
    >
      {showModal_link.show ? (
        <div className="article_activity_link_edit">
          <div>Entrez le lien</div>
          <textarea
            style={{ width: "80%" }}
            onChange={(e) => {
              setShowModal_link({
                show: showModal_link.show,
                index: showModal_link.index,
                link: e.target.value,
              });
            }}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowModal_link({
                show: false,
                index: showModal_link.index,
                link: showModal_link.link,
              });
              let res = putInLink(
                document.getElementsByClassName(
                  `section-${index} paragraph-${showModal_link.index}`
                )[0].value,
                document.getElementsByClassName(
                  `section-${index} paragraph-${showModal_link.index}`
                )[0].selectionStart,
                document.getElementsByClassName(
                  `section-${index} paragraph-${showModal_link.index}`
                )[0].selectionEnd,
                showModal_link.link
              );
              if (showModal_link.index === 0) {
                setInitialParagraph(res);
              } else {
                let result = [...other];
                result[showModal_link.index - 1] = res;
                setOther(result);
              }
              document.getElementsByClassName(
                `section-${index} paragraph-${showModal_link.index}`
              )[0].value = res;
            }}
          >
            Confirmer
          </button>
        </div>
      ) : (
        ""
      )}
      <legend>{`Section ${index + 1}`}</legend>
      <div className={`section-titre ${index}`}>
        <div>Entrez le titre de la section</div>
        <textarea
          onChange={(e) => {
            setTitre(e.target.value);
          }}
          className="fieldset-textArea-style"
          style={{ width: "100%", height: "30px" }}
        ></textarea>
      </div>
      <div className={`paragraph-group ${index}`}>
        <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
          <div>Entrez un paragraphe</div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                let res = putInStrong(
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].value,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionStart,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionEnd
                );
                setInitialParagraph(res);
                document.getElementsByClassName(
                  `section-${index} paragraph-0`
                )[0].value = res;
              }}
            >
              <strong>G</strong>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                let res = putInItalic(
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].value,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionStart,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionEnd
                );
                setInitialParagraph(res);
                // setSections(updateSections());
                document.getElementsByClassName(
                  `section-${index} paragraph-0`
                )[0].value = res;
              }}
            >
              <i>I</i>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                let res = putInUnderline(
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].value,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionStart,
                  document.getElementsByClassName(
                    `section-${index} paragraph-0`
                  )[0].selectionEnd
                );
                setInitialParagraph(res);
                // setSections(updateSections());
                document.getElementsByClassName(
                  `section-${index} paragraph-0`
                )[0].value = res;
              }}
            >
              <u>U</u>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowModal_link({ show: true, index: 0, link: "" });
              }}
            >
              &#128279;
            </button>
          </div>
        </div>
        <textarea
          onChange={(e) => {
            setInitialParagraph(e.target.value);
          }}
          className={`fieldset-textArea-style section-${index} paragraph-0`}
          style={{ width: "100%", height: "150px" }}
        ></textarea>
      </div>
      {other.map((el, id) => (
        <div key={id} className={`paragraph-group ${index}`}>
          <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
            <div>Entrez un paragraphe</div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let res = putInStrong(
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].value,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionStart,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionEnd
                  );
                  let result = [...other];
                  result[id] = res;
                  setOther(result);
                  //   setSections(updateSections());
                  document.getElementsByClassName(
                    `section-${index} paragraph-${id + 1}`
                  )[0].value = res;
                }}
              >
                <strong>G</strong>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let res = putInItalic(
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].value,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionStart,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionEnd
                  );
                  let result = [...other];
                  result[id] = res;
                  setOther(result);
                  //   setSections(updateSections());
                  document.getElementsByClassName(
                    `section-${index} paragraph-${id + 1}`
                  )[0].value = res;
                }}
              >
                <i>I</i>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let res = putInUnderline(
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].value,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionStart,
                    document.getElementsByClassName(
                      `section-${index} paragraph-${id + 1}`
                    )[0].selectionEnd
                  );
                  let result = [...other];
                  result[id] = res;
                  setOther(result);
                  //   setSections(updateSections());
                  document.getElementsByClassName(
                    `section-${index} paragraph-${id + 1}`
                  )[0].value = res;
                }}
              >
                <u>U</u>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal_link({ show: true, index: id + 1, link: "" });
                }}
              >
                &#128279;
              </button>
            </div>
          </div>
          <textarea
            onChange={(e) => {
              let result = [...other];
              result[id] = e.target.value;
              setOther(result);
            }}
            className={`fieldset-textArea-style section-${index} paragraph-${
              id + 1
            }`}
            style={{ width: "100%", height: "150px" }}
          ></textarea>
        </div>
      ))}
      {!valider ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setOther([...other, ""]);
          }}
        >
          Nouveau paragraphe
        </button>
      ) : (
        ""
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setValider(!valider);
        }}
        style={{ backgroundColor: "rgba(79, 242, 166,.8)" }}
      >
        {!valider ? "Valider section" : "Modifier section"}
      </button>
    </fieldset>
  );
};
export default Section;
