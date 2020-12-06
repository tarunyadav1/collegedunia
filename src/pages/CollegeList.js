import React, { useState, useEffect } from "react";

import "./CollegeList.css";

import CollegeCard from "../components/CollegeCard";
import { useListPagination } from "../hooks/useListPagination";

function CollegeList() {
  const [pageNumber, setPageNumber] = useState(1);

  const { colleges, loading, nextAvailable } = useListPagination(pageNumber);

  const useMountEffect = (func) => useEffect(func, []);

  useMountEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });

  const handleWindowScroll = () => {
    const endOfPage =
      Math.round(window.innerHeight + document.documentElement.scrollTop) ===
      Math.round(document.scrollingElement.scrollHeight);

    if (endOfPage) {
      setPageNumber(pageNumber + 1);
    }
  };

  console.log(colleges);

  return (
    <div className="college-list">
      <div className="college-list__title">Colleges in North India</div>
      <div className="college-list__items">
        {colleges.map((college) => (
          <CollegeCard college={college} />
        ))}
      </div>
    </div>
  );
}

export default CollegeList;
