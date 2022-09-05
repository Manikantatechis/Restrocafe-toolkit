import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PopupWriteRevew from "../components/Popup/WriteReview";
import PopupRevews from "../components/Popup/Reviews";
import Item from "../components/Common/Item";
import { fetchItems } from "../features/ItemSlice/operations";
import { getItems } from "../features/ItemSlice/ItemSlice";
import { getCarts, getSubtotal } from "../features/cartSlice/cartSlice";
import { fetchFromLocalStorage } from "../features/cartSlice/operations";
import queryString from "query-string";
import brush from '../assets/img/divider.svg';


const Home = () => {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const carts = useSelector(getCarts);
  console.log(carts)
  const subtotal =useSelector(getSubtotal);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems(parsed.category));
  }, []);

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }

    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }

    return (
      <li>
        <Item
          key={item.id}
          item={item}
          selected_count={selected_count}
          setShowWriteReview={setShowWriteReview}
          setShowReviews={setShowReviews}
          setSelectedItemId={setSelectedItemId}
        />
      </li>
    );
  };

  return (
    <div class="home">
      <Header />

      <section class="content">
        {showCartList ? (
          <>
            <h1>Selected Items</h1>
            <p>Please show this page to the waiter.</p>
          </>
        ) : (
          <>
            <div className="popular-recipes">
              <p>Our Most Popular Recipes</p>
              <img src={brush} alt="" /> <br />
              <span>
                Try our Most Delicious food and it usually take minutes to
                deliver!
              </span>
            </div>
            <ul class="category">
              <li class="active">
                <a href="/">All</a>
              </li>
              <li>
                <a href="/?category=hot">Hot</a>
              </li>
              <li>
                <a href="/?category=cold">Cold</a>
              </li>
              <li>
                <a href="/?category=bagel">Bagel</a>
              </li>
            </ul>
          </>
        )}
        <ul class="items">{items && items.map((item) => showItem(item))}</ul>
      </section>

      <Footer
        price={subtotal}
        showCartList={showCartList}
        setShowCartList={setShowCartList}
      />

      {showWriteReview && (
        <PopupWriteRevew
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowWriteReview={setShowWriteReview}
        />
      )}
      {showReviews && (
        <PopupRevews
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          setShowReviews={setShowReviews}
        />
      )}
    </div>
  );
};

export default Home;
