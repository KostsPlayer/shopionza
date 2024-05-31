import React, { useState, useEffect } from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import Cursor from "../../helper/Cursor";
import axios from "axios";

export default function Preferences() {
  axios.defaults.withCredentials = true;
  const [dataTheme, setDataTheme] = useState([]);
  const [themeActice, setThemeActive] = useState(null);

  const chooseTheme = (indexTheme) => {
    setThemeActive(indexTheme);

    console.log(indexTheme);
  };

  const fetchDataTheme = async () => {
    axios
      .get("http://localhost:5050/theme-categories")
      .then((res) => {
        setDataTheme(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchDataTheme();
  }, [dataTheme]);

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="preferences">
        <h2 className="preferences-title">What's your site about?</h2>
        <span className="preferences-subtitle">
          This will help us find you some starting ideas and examples
        </span>
        <div className="preferences-theme">
          {dataTheme.map((data) => {
            return (
              <div
                className={`preferences-theme-item ${
                  data.id === themeActice ? "preferences-theme-item-active" : ""
                }`}
                key={data.id}
                onClick={() => chooseTheme(data.id)}
              >
                <span>{data.theme}</span>
              </div>
            );
          })}
        </div>
        <span className="preferences-note">
          Don't see what you're looking for?
        </span>
        <div className="preferences-other-theme">
          <input
            type="text"
            placeholder="Describe your site.."
            className="preferences-other-theme-input"
          />
        </div>
        <div className="preferences-button">
          <span className="skip">Skip</span>
          <span className="next">Next</span>
        </div>
      </div>
    </>
  );
}
