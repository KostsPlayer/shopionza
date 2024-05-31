import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import TempStyle from "./TempStyle/TempStyle";
import TempHome from "./TempHome/TempHome";
import TempPage from "./TempPage/TempPage";
import SmoothScroll from "../../helper/SmoothScroll";
import Cursor from "../../helper/Cursor";
import gsap from "gsap";

function Templates() {
  const location = useLocation();
  const redirect = useNavigate();
  const query = queryString.parse(location.search);
  const currentPage = parseInt(query.page) || 1;

  useEffect(() => {
    // Ensure the currentPage is within valid range on initial render
    if (currentPage < 1 || currentPage > 3) {
      redirect("/templates?page=1", { replace: true });
    }
  }, [currentPage, redirect]);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <TempStyle />;
      case 2:
        return <TempHome />;
      case 3:
        return <TempPage />;
      default:
        return <TempStyle />;
    }
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= 3) {
      redirect(`/templates?page=${newPage}`);
    }
  };

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="templates">
        <div className="templates-content">{renderPage()}</div>
        <div className="templates-footer">
          <button
            className={`templates-footer-back ${
              currentPage === 1 ? "templates-footer-invicible" : ""
            }`}
            onClick={() => changePage(currentPage - 1)}
          >
            Back
          </button>
          <div className="templates-footer-bar">
            <div className="templates-footer-bar-progress"></div>
            <div className="templates-footer-bar-text">
              <div className="templates-footer-bar-text-item">STYLE</div>
              <div className="templates-footer-bar-text-item">STYLE</div>
              <div className="templates-footer-bar-text-item">STYLE</div>
              <div className="templates-footer-bar-text-item">STYLE</div>
              <div className="templates-footer-bar-text-item">STYLE</div>
            </div>
          </div>
          <button
            className={`templates-footer-next ${
              currentPage === 3 ? "templates-footer-invicible" : ""
            }`}
            onClick={() => changePage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Templates;
