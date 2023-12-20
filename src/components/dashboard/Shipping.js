import React, { useEffect, useState } from "react";
import "../styles/carsOfDash.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllShipments, addShipment, deleteShipment} from "../actions/shipment.js";
import { toast, Toaster } from "react-hot-toast";


const Shipping = () => {
    const shipments = useSelector((state) => state.shipments);
    const dispatch = useDispatch();

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [location,setLocation] = useState("");
    const [duration,setDuration] = useState("");
    const [DeleteshowPopup, setDeleteShowPopup] = useState(false);

    const [AddshowPopup, setAddShowPopup] = useState(false);

    useEffect(() => {
        dispatch(getAllShipments());
      }, [dispatch]);

      const handleDelete = () => {
        if (selectedLocation) {
          dispatch(deleteShipment(selectedLocation._id));
          setSelectedLocation(null);
          setDeleteShowPopup(false);
        }
      };

      const ClosedeletePop = () => {
        setDeleteShowPopup(false);
      };

      const handleAddClose = () => {
        setAddShowPopup(false);
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();

        dispatch(addShipment(location, duration));
    setAddShowPopup(false)
    toast.success("You have Added a new location Successfully!");
    }

      const OpendeletePop = (car) => {
        setSelectedLocation(car);
        setDeleteShowPopup(true);
      };

      
  return (
    <div>
       <Toaster toastOptions={{ duration: 4000 }} />
       <h1>Shipment</h1>
       <button
          className="cr-addcar-button"
          onClick={() => setAddShowPopup(true)}
        >
          + Add Location
        </button>
        {AddshowPopup && (
            <form onSubmit={handleSubmit}>
                <div className="cr-addpopup">

                <div className="cr-addpopup-head">
                <h2>Add a location</h2>
                <span className="cr-addpopup-closee" onClick={handleAddClose}>
                  {" "}
                  &times;
                </span>
              </div>
              <div className="cr-addpopup-first">
                <input
                  type="text"
                  placeholder=" Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=" Duration"
                  onChange={(e) => setDuration(e.target.value)}
                />
                </div>
                <div>
                <button className="cr-addcar-buttonn" type="submit">
                  Add
                </button>
              </div>
                </div>
            </form>
        )}
        {DeleteshowPopup && (
          <div className="cr-deletepopup">
            <div className="cr-deletepopup-head">
              <h2>Are You Sure You want to Delete?</h2>
              <span className="cr-deletepopup-close" onClick={ClosedeletePop}>
                {" "}
                &times;
              </span>
            </div>
            <div className="yesNoButtons">
              <button className="cr-nodelete" onClick={ClosedeletePop}>
                No, Thank You!
              </button>
              <button className="cr-yesDelete" onClick={handleDelete}>
                Yes PLease
              </button>
            </div>
          </div>
        )}
        <div className="cr-third-main">
          <div className="cr-third-div-table">
            <table className="cr-third-table">
              <thead>
                <tr>
                  <th className="cr-third-table-th">Location</th>
                  <th className="cr-third-table-th">Duration</th>
                  <th className="cr-third-table-th">Delete</th>
                </tr>
              </thead>
              <tbody>
        {shipments.map((shipment) => (
            <tr>
              <td>{shipment.location}</td>
              <td>{shipment.duration}</td>
              <td>
                <img
                  className="crMn-carDelete"
                  src="./images/bin-svgrepo-com (1).svg"
                  onClick={() =>  OpendeletePop(shipment)}
                />
              </td>
            </tr>
        ))}
              </tbody>
            </table>
            </div>
            </div>
    </div>
  )
}

export default Shipping;
