import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { setFilterOptions } from "../../actions/warehouseActions";

const FilterData = () => {
  const filterOptions = [
    {
      id: 1,
      name: "City",
      options: [
        {
          id: 1,
          name: "Delhi",
          label: "Delhi",
        },
        {
          id: 2,
          name: "Chennai",
          label: "Chennai",
        },
        {
          id: 3,
          name: "Indore",
          label: "Indore",
        },
        {
          id: 4,
          name: "Mumbai",
          label: "Mumbai",
        },
        {
          id: 5,
          name: "Bangalore",
          label: "Bangalore",
        },
        {
          id: 6,
          name: "Guwahati",
          label: "Guwahati",
        },
      ],
    },
    {
      id: 2,
      name: "Cluster",
      options: [
        {
          id: 1,
          name: "cluster-a-1",
          label: "cluster-a-1",
        },
        {
          id: 2,
          name: "cluster-a-32",
          label: "cluster-a-32",
        },
        {
          id: 3,
          name: "cluster-a-21",
          label: "cluster-a-21",
        },
        {
          id: 4,
          name: "cluster-a-2",
          label: "cluster-a-2",
        },
        {
          id: 5,
          name: "cluster-v-2",
          label: "cluster-v-2",
        },
      ],
    },
  ];

  const dispatch = useDispatch();

  const [currentCityFilter, setCurrentCityFilter] = useState(""); // Separate state for city filter
  const [currentClusterFilter, setCurrentClusterFilter] = useState(""); // Separate state for cluster filter

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCurrentCityFilter(selectedCity);
  };

  const handleClusterChange = (e) => {
    const selectedCluster = e.target.value;
    setCurrentClusterFilter(selectedCluster);
  };

  useEffect(() => {
    if (currentCityFilter !== "") {
      // Check for an empty string to filter by city
      dispatch(setFilterOptions("City", currentCityFilter));
    }
  }, [currentCityFilter, dispatch]);

  useEffect(() => {
    if (currentClusterFilter !== "") {
      // Check for an empty string to filter by cluster
      dispatch(setFilterOptions("Cluster", currentClusterFilter));
    }
  }, [currentClusterFilter, dispatch]);

  return (
    <div>
      <select value={currentCityFilter} onChange={handleCityChange}>
        <option value="">Filter By City</option>
        {filterOptions
          .find((item) => item.name === "City")
          ?.options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.label}
            </option>
          ))}
      </select>

      <select value={currentClusterFilter} onChange={handleClusterChange}>
        <option value="">Filter By Cluster</option>
        {filterOptions
          .find((item) => item.name === "Cluster")
          ?.options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterData;
