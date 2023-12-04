import React, { useEffect, useState } from "react";
import "../styles/carsOfDash.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCars, addCar, removeCar } from "../actions/car";
import userEvent from "@testing-library/user-event";
import axios from "axios";

function MainOfCars() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const [AddshowPopup, setAddShowPopup] = useState(false);
  const [UpdateshowPopup, setUpdateShowPopup] = useState(false);
  const [carName, setCarName] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [TVA, setTVA] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [files, setFiles] = useState([]);
  const [DOR, setDOR] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  const handleUpdate = (car) => {
    setUpdateShowPopup(true);
  };

  const handleDelete = (car) => {
    dispatch(removeCar(car._id));
  };

  const handleAddClose = () => {
    setAddShowPopup(false);
  };
  const handleUpdateClose = () => {
    setUpdateShowPopup(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("carName", carName);
    formData.append("company", company);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("initialPrice", initialPrice);
    formData.append("sellingPrice", sellingPrice);
    formData.append("TVA", TVA);
    formData.append("discount", discount);
    formData.append("quantity", quantity);
    formData.append("DOR", DOR);
    formData.append("color", color);

    files.forEach((file) => {
      formData.append('files', file);
    });
    

    dispatch(addCar(formData));
  };

  return (
    <div className="cr-component">
      <div className="cr-third">
        <button
          className="cr-addcar-button"
          onClick={() => setAddShowPopup(true)}
        >
          + Add Car
        </button>
        {AddshowPopup && (
          <form onSubmit={handleSubmit}>
            <div className="cr-addpopup">
              <div className="cr-addpopup-head">
                <h2>Add a Car</h2>
                <span className="cr-addpopup-close" onClick={handleAddClose}>
                  {" "}
                  &times;
                </span>
              </div>
              <div className="cr-addpopup-first">
                <input
                  type="text"
                  placeholder=" Car Name"
                  onChange={(e) => setCarName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=" Company"
                  onChange={(e) => setCompany(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=" Type"
                  onChange={(e) => setType(e.target.value)}
                />
                <input
                  type="number"
                  placeholder=" Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div className="cr-addpopup-first">
                <input
                  type="text"
                  placeholder=" DOR"
                  onChange={(e) => setDOR(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Initial price"
                  onChange={(e) => setInitialPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Selling price"
                  onChange={(e) => setSellingPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=" TVA"
                  onChange={(e) => setTVA(e.target.value)}
                />
                <input
                  type="number"
                  placeholder=" Discount"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div className="cr-addpopup-first">
                <textarea
                  placeholder=" Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div>
                <label>Image:</label>{" "}
                <input
                  type="file"
                  onChange={(e) =>
                    setFiles((prev) => [...prev, e.target.files[0]])
                  }
                />
                <label>3D:</label>{" "}
                <input
                  type="file"
                  onChange={(e) =>
                    setFiles((prev) => [...prev, e.target.files[0]])
                  }
                />
                <label>Sound:</label>{" "}
                <input
                  type="file"
                  onChange={(e) =>
                    setFiles((prev) => [...prev, e.target.files[0]])
                  }
                />
                <label>Color: </label>
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
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
        {UpdateshowPopup && (
          <form onSubmit="">
            <div className="cr-addpopup">
              <div className="cr-addpopup-head">
                <h2>Edit a Car</h2>
                <span className="cr-addpopup-close" onClick={handleUpdateClose}>
                  {" "}
                  &times;
                </span>
              </div>
              <div className="cr-addpopup-first">
                <input type="text" placeholder=" Car Name" name="carName" />
                <input type="text" placeholder=" Company" name="company" />
                <input type="text" placeholder=" Type" name="type" />
                <input type="number" placeholder=" Quantity" name="quantity" />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div className="cr-addpopup-first">
                <input type="text" placeholder=" DOR" name="DOR" />
                <input type="text" placeholder=" Price" name="price" />

                <input type="text" placeholder=" TVA" name="TVA" />
                <input type="number" placeholder=" Discount" name="discount" />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div className="cr-addpopup-first">
                <textarea placeholder=" Description" name="description" />
              </div>
              <hr className="cr-horizontal-line"></hr>
              <div>
                <label>Image:</label> <input type="file" name="files" />
                <label>3D:</label> <input type="file" />
                <label>Sound:</label> <input type="file" />
                <label>Color: </label>
                <input type="color" name="color" />
              </div>
              <div>
                <button className="cr-addcar-buttonn" type="submit">
                  Done
                </button>
              </div>
            </div>
          </form>
        )}
        <div className="cr-third-main">
          <div className="cr-third-div-table">
            <table className="cr-third-table">
              <thead>
                <tr>
                  <th className="cr-third-table-th">Title</th>
                  <th className="cr-third-table-th">Qty</th>
                  <th className="cr-third-table-th">Price</th>
                  <th className="cr-third-table-th">Update/Delete</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td>{car.carName}</td>
                    <td>{car.quantity}</td>
                    <td>{car.initialPrice}</td>
                    <td>
                      <img
                        className="crMn-carUpdate"
                        src="./images/pen-square-svgrepo-com (1).svg"
                        onClick={() => handleUpdate(car)}
                      />
                      <img
                        className="crMn-carDelete"
                        src="./images/bin-svgrepo-com.svg"
                        onClick={() => handleDelete(car)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainOfCars;
