
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchWarehouses, saveWarehouse,editWarehouse } from "../../actions/warehouseActions";
import { Link } from "react-router-dom";
import "./index.css";


const WarehouseDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouseReducer.warehouses);
  const warehouse = warehouses.find((wh) => wh.id === parseInt(id));
  const editedWarehouse = useSelector((state) => state.warehouseReducer.editedWarehouse);

  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({ ...warehouse });

    useEffect(()=>{
        dispatch(fetchWarehouses())
        
    },[dispatch])

    useEffect(() => {
      if (editedWarehouse) {
        setEditedData({ ...editedWarehouse });
      } else {
        setEditedData({ ...warehouse });
      }
    }, [editedWarehouse, warehouse]);


    const handleEditClick = () => {
      setEditMode(true);
      dispatch(editWarehouse(warehouse));
    };
  
    const handleCancelClick = () => {
      setEditMode(false);
      dispatch(editWarehouse(null));
    };
  
    const handleSaveClick = () => {
      dispatch(saveWarehouse(editedData));
      setEditMode(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedData({
        ...editedData,
        [name]: value,
      });
    };

    const handleBack = () =>{
      navigate("/")
    }

  return (
    <div className="details-container">
      <h1>Warehouse Details</h1>
      {warehouse ? (
        <div className="warehouse-details">
          {editMode ? (
            <>
              <label htmlFor="name">Warehouse Name:</label>
              <input
                className="text-field"
                type="text"
                name="name"
                id="name"
                value={editedData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="city">City:</label>
              <input
                className="text-field"
                type="text"
                name="city"
                id="city"
                value={editedData.city}
                onChange={handleInputChange}
              />
              <label htmlFor="cluster">Cluster:</label>
              <input
                className="text-field"
                type="text"
                name="cluster"
                id="cluster"
                value={editedData.cluster}
                onChange={handleInputChange}
              />
              <label htmlFor="spaceAvailable">Space Available:</label>
              <input
                className="text-field"
                type="number"
                name="space_available"
                id="spaceAvailable"
                value={editedData.space_available}
                onChange={handleInputChange}
              />

              <div className="text-card">
                <input
                  className="text-checkbox"
                  type="checkbox"
                  name="is_live"
                  id="liveStatus"
                  checked={editedData.is_live}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      is_live: e.target.checked,
                    })
                  }
                />
                <label htmlFor="liveStatus">Live Status</label>
              </div>
              <div className="button-styling">
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
              </div>
            </>
          ) : (
            <div>
              <h2>{warehouse.name}</h2>
              <p>City: {warehouse.city}</p>
              <p>Cluster: {warehouse.cluster}</p>
              <p>Space Available: {warehouse.space_available}</p>
              <p>Live Status: {warehouse.is_live ? "Live" : "Not Live" }</p>
              <button onClick={handleEditClick}>Edit</button>
              {/* <Link to='/'><button>Back</button></Link> */}
              <button onClick={handleBack}>Back</button>
            </div>
          )}
        </div>
      ) : (
        <p>Warehouse not found</p>
      )}
    </div>
  );
};

export default WarehouseDetails;
