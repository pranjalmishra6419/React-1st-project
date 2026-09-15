import React from "react";
import "./CSS/Home.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Carousel from "react-bootstrap/Carousel";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/ProductCard";
import UserCard from "../Components/UserCard";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Home = () => {
  let category = [
    { _id: 1, text: "CAKES", imageUrl: "./images/c1.webp" },
    { _id: 2, text: "Flowers", imageUrl: "./images/c2.webp" },
    { _id: 3, text: "Combos", imageUrl: "./images/c3.webp" },
    { _id: 4, text: "plants", imageUrl: "./images/c4.webp" },
    { _id: 5, text: "birthday", imageUrl: "./images/c5.webp" },
    { _id: 6, text: "Anniversary", imageUrl: "./images/c7.webp" },
  ];
  let productcart = [
    { _id: 1, text: "CAKES", imageUrl: "./images/c1.webp" },
    { _id: 2, text: "Flowers", imageUrl: "./images/c2.webp" },
    { _id: 3, text: "Combos", imageUrl: "./images/c3.webp" },
    { _id: 4, text: "plants", imageUrl: "./images/c4.webp" },
    { _id: 5, text: "birthday", imageUrl: "./images/c5.webp" },
    { _id: 6, text: "Anniversary", imageUrl: "./images/c7.webp" },
  ];

  return (
    <>
      <Header />

      {/* slider start */}
      <div className="slider-outer">
        <Carousel>
          <Carousel.Item>
            <img
              src="/images/s1.webp"
              className="slider-image"
              alt="Slider Image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/s2.webp"
              className="slider-image"
              alt="Slider Image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/s3.webp"
              className="slider-image"
              alt="Slider Image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* slider end */}



      {/* cotegorycard start*/}
      <div className="category-card-home-outer">
        {category.slice(0, 6).map((item) => (
          <CategoryCard
            key={item._id}
            text={item.text}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {/* cotegorycard end*/}



      {/* container image start */}
      <div className="anaya-image">
        <div className="anaya-top-image">
          <img src="./images/co1.webp" alt="" className="anaya-first-image" />
          <img src="./images/co2.webp" alt="" className="anaya-second-image" />
        </div>
        <div className="anaya-bottom-image">
          <img src="./images/co3.webp" alt="" />
        </div>
      </div>
      {/* container image end */}
      


      {/* Product flower Cards start */}
      <h1 className="heading-bestflowerbouqet">Best Flower Bouquet</h1>
      <div className="category-card-home-outer">
        {productcart.slice(0, 6).map((item) => (
          <ProductCard
            key={item._id}
            text={item.text}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {/* Product flower Cards end */}




      {/* Flower  images start */}
      <div className="flower-image-outer">
        <div className="flower-images-container">
          <img src="/images/fl1.webp" alt="" />
          <img src="/images/fl2.webp" alt="" />
          <img src="/images/fl3.webp" alt="" />
          <img src="/images/fl5.webp" alt="" />
        </div>
      </div>
      {/* Flower images end */}





      {/* Product Best Selling Combos Cards start */}
      <h1 className="heading-bestflowerbouqet">Best Selling Combos</h1>
      <div className="category-card-home-outer">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/* Product Best Selling Combos Cards end */}



        {/* text home page as a about start */}
        <div className="text-main-outer">
          <div className="text-about-para">
            <img src="/images/text1.webp" alt="" />
            <div>
            <p>Safety And Hygiene</p>
            <p>Our Bakery & Florist shop takes complete control over safety and hydgeine. We also follow proper covid safety guidelines.</p>
            </div>
          </div>
          <div className="text-about-para">
            <img src="/images/text1.webp" alt="" />
            <div>
            <p>Express 3 Hour Delivery</p>
            <p>Get Flowers,cakes, gifts,chocolate same-day delivery in 3 hours. We guarantee ontime delivery.</p>
            </div>
          </div>
          <div className="text-about-para">
            <img src="/images/text1.webp" alt="" />
            <div>
            <p>Delivery In 500+ Cities</p>
            <p>We bet, you will have the best experience of flowers & cakes in more the 600 cities in India.</p>
            </div>
          </div>
          <div className="text-about-para">
            <img src="/images/text1.webp" alt="" />
            <div>
            <p>Midnight Delivery</p>
            <p>Surprise your loved one with our reliable midnight flower delivery services.</p>
            </div>
          </div>
        </div>

        {/* text home page as a about end */}



      {/*  Product Best Selling cakes Cards end */}
      <h1 className="heading-bestflowerbouqet">Best Selling Cakes</h1>
      <div className="category-card-home-outer">
        <ProductCard />
      </div>
      {/*  Product Best Selling cakes Cards end */}

        <UserCard/>







      <Footer/>
    </>
  );
};

export default Home;