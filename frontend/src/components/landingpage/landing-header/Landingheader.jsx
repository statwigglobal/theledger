import React, { useState, useEffect, useRef } from "react";
import "./Landingheader.css";
import VaccineLedgerLogo from "../../../assets/logos/vaccineledger.svg";
import EnglishFlag from "../../../assets/images/flags/English.webp";
import SpanishFlag from "../../../assets/images/flags/Spanish.webp";
import { Link } from "react-router-dom";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function Landingheader() {
  const [LanguageOpen, setLanguageOpen] = useState(false);
  const [Language, setLanguage] = useState("english");

  let domNode = useClickOutside(() => {
    setLanguageOpen(false);
  });
  return (
    <header className="landing-header">
      <div className="vl-page-container">
        <nav className="landing-navbar">
          <figure className="brand-logo">
            <img
              src={VaccineLedgerLogo}
              alt="vaccineledger"
              className="brand-logo-image"
            />
          </figure>
          <ul className="landing-navlist">
            <li className="landing-nav-item">
              <Link to="/" className="landing-nav-link active">
                <p className="vl-body">Home</p>
              </Link>
            </li>
            <li className="landing-nav-item">
              <Link to="/" className="landing-nav-link">
                <p className="vl-body">Services</p>
              </Link>
            </li>
            <li className="landing-nav-item">
              <Link to="/" className="landing-nav-link">
                <p className="vl-body">Contact Us</p>
              </Link>
            </li>
            <li className="landing-nav-item mobile-nav-item">
              <Link to="/" className="landing-nav-link">
                <p className="vl-body">Gitlab Repository</p>
              </Link>
            </li>
            <li
              className={`landing-nav-item language-dropdown mobile-nav-item ${
                LanguageOpen && "active"
              }`}
              ref={domNode}
            >
              <section
                className={`language-select ${LanguageOpen && "active"}`}
                onClick={() => setLanguageOpen(!LanguageOpen)}
              >
                {Language === "english" ? (
                  <>
                    <div className="flag-circle">
                      <img
                        src={EnglishFlag}
                        alt="flags"
                        className="flag-circle-image"
                      />
                    </div>

                    <p className="vl-body">Eng</p>
                  </>
                ) : (
                  <>
                    <div className="flag-circle">
                      <img
                        src={SpanishFlag}
                        alt="flags"
                        className="flag-circle-image"
                      />
                    </div>

                    <p className="vl-body">Spa</p>
                  </>
                )}

                <i className="fa-solid fa-caret-down"></i>
              </section>
              {/* Dropdown */}
              <section className="language-list">
                <article
                  className="language-card"
                  onClick={() => {
                    setLanguage("english");
                    setLanguageOpen(false);
                  }}
                >
                  <div className="flag-circle">
                    <img
                      src={EnglishFlag}
                      alt="flags"
                      className="flag-circle-image"
                    />
                  </div>

                  <p className="vl-body">English</p>
                </article>
                <article
                  className="language-card no-border"
                  onClick={() => {
                    setLanguage("spanish");
                    setLanguageOpen(false);
                  }}
                >
                  <div className="flag-circle">
                    <img
                      src={SpanishFlag}
                      alt="flags"
                      className="flag-circle-image"
                    />
                  </div>

                  <p className="vl-body">Spanish</p>
                </article>
              </section>
            </li>

            {/* Mobile Link */}
            <li className="landing-nav-item tablet-menu-icon vl-link">
              <div className="landing-nav-link active">
                <i className="fa-solid fa-bars vl-body"></i>
              </div>
            </li>
          </ul>
          <div className="landing-nav-item mobile-menu-icon vl-link">
            <div className="landing-nav-link active">
              <i className="fa-solid fa-bars vl-body"></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
