import { useEffect, useState } from "react";

import { getColleges } from "../services/CollegeListApi";

const useListPagination = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [nextAvailable, setNextAvailable] = useState(true);

  const fetchColleges = async () => {
    try {
      const { colleges: nextColleges, nextAvailable } = await getColleges(
        pageNumber
      );
      setColleges((colleges) => [...colleges, ...nextColleges]);
      setNextAvailable(nextAvailable);
    } catch (err) {
      setColleges([]);
      setNextAvailable(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchColleges();
  }, [pageNumber]);

  return { loading, colleges, nextAvailable, length: colleges.length };
};

export { useListPagination };
