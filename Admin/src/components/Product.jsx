import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [productdata, setProductData] = useState();
  const navi=useNavigate();
  useEffect(() => {
    const db = getDatabase(app);
    const REF = ref(db, "all");
    onValue(REF, (snapshot) => {
      const data = snapshot.val();
      setProductData(data);
    });
  }, []);
  const deleteproduct = (key) =>{
    const db = getDatabase(app);
    const REF = ref(db, "all/" + key);
    remove(REF)
  }
  return (
    <div>
   {productdata && (
    <div>
    {Object.entries(productdata).map(([key, c]) => {
       return(
        <div className="product-conatiner">
          <div className="product-detail">
<img src={c.ImageUrl} alt="" />
<div className="product-detail-text"><h5>{c.Title}</h5>
<h6>Price : {c.Price}</h6>
</div>
          </div>
          <div className="product-btn">
            <button onClick={()=>{navi('/updateproduct' ,{state: [key,c]})}}>Update</button>
            <button onClick={()=>{deleteproduct(key)}}>Delete</button>
          </div>
        </div>
       )
      })}

    </div>
   )}
    </div>
  );
};

export default Product;
