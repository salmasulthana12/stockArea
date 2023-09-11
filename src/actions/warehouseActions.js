import warehouses from "../warehouses.json";

export const fetchWarehouses = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_WAREHOUSES", payload: warehouses });
  };
};

export const saveWarehouse = (warehouse) => {
    return (dispatch) => {
        console.log("Edited Warehouse Data:", warehouse);
      dispatch({ type: "SAVE_WAREHOUSE", warehouse });
    };
  };

  export const editWarehouse = (warehouse) => {
    return {
      type: 'EDIT_WAREHOUSE',
      payload: warehouse,
    };
  };

export function setSearchQuery(query) {
    return {
      type: 'SET_SEARCH_QUERY',
      query,
    };
  }
  
  export function setFilterOptions(options) {
    return {
      type: 'SET_FILTER_OPTIONS',
      options,
    };
  }



export const setCityFilter = (city) => {
  return {
    type: 'SET_CITY_FILTER',
    city,
  };
};

export const setClusterFilter = (cluster) => {
  return {
    type: 'SET_CLUSTER_FILTER',
    cluster,
  };
};

export const setSpaceAvailableFilter = (spaceAvailable) => {
  return {
    type: 'SET_SPACE_AVAILABLE_FILTER',
    spaceAvailable,
  };
};

  