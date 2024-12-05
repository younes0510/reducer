import React, { useContext } from "react";
import produits from "../prodct";
import { Context } from "../store/Context";

const ProductList = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-6">Product List</h1>
      <div className="grid grid-cols-3 gap-6">
        {produits.map((produit) => (
          <div key={produit.id} className="rounded-lg shadow-xl p-4 bg-white">
           <img src={produit.image} alt="" />
            <h1 className="text-2xl font-bold text-gray-800">{produit.nom}</h1>
            <h2 className="text-xl font-medium text-gray-600">{produit.prix}€</h2>
            <h1>{state.userType == 'guest' ? '⛔' : ''}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
