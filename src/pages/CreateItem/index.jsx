import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { userAtom, JWT } from "store/atoms";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {

  const user = useAtomValue(userAtom);
  const jwt = useAtomValue(JWT);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [condition, setCondition] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const alert = useAlert();
  const navigate = useNavigate();



  function fetchData() {
    console.log(image);
    fetch("https://pokeland-api.herokuapp.com/products", {
      method: "post",
      headers: {
        "Authorization": jwt,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "product": {
          "name": name,
          "price": price,
          "country": country,
          "description": description,
          "stock": stock,
          "condition": condition,
          "year": year,
          "image_path": image,
          "user_id": user.id
        },
      }),
    }).then((response) => {
      console.log(response);
      return response.json()
    })
    .catch((err) => console.error(err));
      alert.info("Produit ajouté à la liste ✓");
      navigate("/items");
  };


  return (
    <div className="form-background">
      <div className="row">
        <div className="col-sm-0 col-lg-3"></div>
        <div className="col-lg-6">
          <header className="user__header">
            <h2 className="user__title" id="createtitle">
              Ajoute un produit à la vente . 👇
            </h2>
          </header>

          <form id="" onSubmit={(event) => {event.preventDefault(); fetchData(); }} >
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <input
                    type="text"
                    placeholder="nom"
                    name="name"
                    id="name"
                    value={name}
                    className="form__input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="number"
                    placeholder="prix"
                    name="price"
                    id="price"
                    value={price}
                    className="form__input"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="text"
                    placeholder="pays"
                    name="country"
                    id="country"
                    value={country}
                    className="form__input"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="textarea"
                    placeholder="description"
                    name="description"
                    id="description"
                    value={description}
                    className="form__input"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="number"
                    placeholder="stock"
                    name="stock"
                    id="stock"
                    value={stock}
                    className="form__input"
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="text"
                    placeholder="état"
                    name="condition"
                    id="condition"
                    value={condition}
                    className="form__input"
                    onChange={(e) => setCondition(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="number"
                    placeholder="année de fabrication"
                    name="year"
                    id="year"
                    value={year}
                    className="form__input"
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div>
                  <input
                    type="text"
                    placeholder="url de l'image"
                    name="image"
                    id="image"
                    value={image}
                    className="form__input"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
              <input className="btn" type="submit" value="Ajouter" />
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default CreateItem;