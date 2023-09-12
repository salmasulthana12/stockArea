import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import {
  fetchWarehouses,
  setSearchQuery,
} from "../../actions/warehouseActions";
import FilterData from "../FilterData";
import SearchBar from "../SearchBox";

const WareHouseList = () => {
  // default render with no data
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // dispatch first action to update the reducer with json data
  useEffect(() => {
    dispatch(fetchWarehouses());
  }, [dispatch]);

  // access json data in warehouses variable
  const warehouseList = useSelector(
    (state) => state.warehouseReducer.warehouses
  );

  useEffect(() => {
    setData(warehouseList);
  }, [warehouseList]);

  const searchQuery = useSelector(
    (state) => state.warehouseReducer.searchQuery
  );

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="container">
      <h1>Warehouse Listing</h1>

      <div className="list-container">
        <SearchBar
          value={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
        />
        <FilterData />
      </div>

      <br />
      <table>
        <thead>
          <tr>
            <th>Warehouse Name</th>
            <th>city</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {warehouseList
            ?.filter((item) => {
              return searchQuery.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchQuery);
            })
            .map((warehouse) => (
              <tr key={warehouse.id}>
                <td>{warehouse.name}</td>
                <td>{warehouse.city}</td>
                <td>
                  <Link to={`/warehouse/${warehouse.id}`}>
                    <button>View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WareHouseList;
