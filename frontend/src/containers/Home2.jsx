import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Item from "../components/Common/Item";
import { fetchItems } from "../features/ItemSlice/operations";
import { getItems } from "../features/ItemSlice/ItemSlice";
import queryString from "query-string";
import brush from '../assets/img/divider.svg';


export default function Home() {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState();
  const subtotal=0
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  console.log(items[0]);


  useEffect(() => {
    dispatch(fetchItems(''));
  }, []);



  const showItem = 0
  return (
    <div class="home">
      {/* <Header /> */}


      <section class="content">

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
        <ul class="items">
          {items && items.map(item => (<Item key={item.id}
          item={item} />))}</ul>
      </section>

      <Footer
        price={subtotal}
        showCartList={showCartList}
        setShowCartList={setShowCartList}
      />

      {/* {showWriteReview && (
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
      )} */}
    </div>
  )
}

