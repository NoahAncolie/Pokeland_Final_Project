import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userAtom, JWT } from "store/atoms";

const CreateItem = () => {

    const user = useAtomValue(userAtom);
    let userParsed;
    const jwt = useAtomValue(JWT);
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ stock, setStock ] = useState("");
    const [ condition, setCondition ] = useState("");
    const [ year, setYear ] = useState("");
    const [ image, setImage ] = useState("");


    
    
    function fetchData(e) {
        if(user !== "") {
         userParsed = JSON.parse(user);
        }
        console.log(userParsed.id);
        console.log(image);
        const form = document.getElementById("form");
        const formData = Array.from(new FormData(form));
        console.log(formData);
        e.preventDefault();
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
          "image": formData[7][1],
          "user_id": userParsed.id
        },
      }),
    }).then((response) => {
      console.log(response);
      return response.json()
    }) 
    .catch((err) => console.error(err));
};
    

    return (
        <>
     <div className="form-background">
        <div className="col-sm-0 col-lg-4"></div>
          <header className="user__header">
            <h2 className="user__title" id="createtitle">
              Ajoute un produit à la vente . 👇
            </h2>
          </header>

          <form id="form" onSubmit={fetchData} >
        <div className="row form">
          <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
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
            <div className="col-lg-5 ">
            <div>
              <input
                type="file"
                name="image2"
                id="image"
                value={""}
                className="form__input"
                onChange={(e) => setImage(e.target.files[0])}
                
              />
            </div>
            </div>
            <input className="btn" type="submit" value="Ajouter" />
            </div>
          </form>
          <Link to="/" className="change-form">Accueil</Link>
        </div>
      
    
        </>
    )
}

export default CreateItem;