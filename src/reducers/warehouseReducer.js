const initialState = {
  warehouses: [],
  searchQuery: "",
  filterOptions: {
    city: "",
    cluster: "",
    spaceAvailable: 0,
  },
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WAREHOUSES":
      return {
        ...state,
        warehouses: action.payload,
      };
   
    case "SAVE_WAREHOUSE":
      const updatedWarehouses = state.warehouses.map((wh) =>
        wh.id === action.warehouse.id ? action.warehouse : wh
      );
      console.log("Updated Warehouses:", updatedWarehouses);
      return {
        ...state,
        warehouses: updatedWarehouses,
      };
      case 'EDIT_WAREHOUSE':
      return { ...state, editedWarehouse: action.payload };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.query,
      };
    case "SET_FILTER_OPTIONS":
      return {
        ...state,
        filterOptions: action.options,
      };
    case "SET_CITY_FILTER":
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          city: action.city,
        },
      };
    case "SET_CLUSTER_FILTER":
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          cluster: action.cluster,
        },
      };
    case "SET_SPACE_AVAILABLE_FILTER":
      return {
        ...state,
        filterOptions: {
          ...state.filterOptions,
          spaceAvailable: action.spaceAvailable,
        },
      };
    default:
      return state;
  }
};

export default warehouseReducer;
