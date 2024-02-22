import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  
const [opened,setOpened]=useState(false);
const [wishlist, setWishlist] = useState([]);
const [wishlistAmount, setWishlistAmount] = useState(0);

const handledClose=()=>{
  setOpened(!opened)
}

const addToWishlist = async (productId, productCount, product) => {
  const updatedWishlist = [...wishlist, { productId, productCount, product }];
  setWishlist(updatedWishlist);
  setWishlistAmount(prevAmount => prevAmount + productCount);
};


const removeFromWishlist = (id) => {
  const removedItem = wishlist.find((item) => item.productId === id);
  if (removedItem) {
    const newWishlist = wishlist.filter((item) => item.productId !== id);
    setWishlist(newWishlist);
    setWishlistAmount((prevAmount) => prevAmount - removedItem.productCount);
  }
};

  return <WishlistContext.Provider value={{opened,setOpened,handledClose,wishlist,wishlistAmount,addToWishlist,removeFromWishlist}}>{children}</WishlistContext.Provider>;
};

export default WishlistProvider;
