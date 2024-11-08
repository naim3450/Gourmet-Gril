import TitleDes from "../../Common/TitleDes";
import searchVector from "../../assets/searchVector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context/Context";
import ReviewCard from "../ReviewCard";
import customerImg1 from "../../assets/customer1.png";


const Review = () => {

  let settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    height: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };


  const { reviewArr } = useContext(Context)


  return (
    <div className="pt-[100px] pb-[50px] relative">
      <div className="absolute top-10 left-0 opacity-45">
        <img src={searchVector} alt="" className="w-[300px]" />
      </div>
      <Container>
        <div>
          <TitleDes
            mainTitle={"What Our Customers Say"}
            className={"max-w-full"}
            textCenter={true}
          />
        </div>
        {/* ALL CARD */}
        <div className="pt-10">
          <div className="w-full reviewslide">

            <Slider {...settings} className="">

              <ReviewCard src={customerImg1} name={`Ama Ampomah`} />
              <ReviewCard src={customerImg1} name={`Ama Ampomah`} />
              <ReviewCard src={customerImg1} name={`Ama Ampomah`} />
              <ReviewCard src={customerImg1} name={`Ama Ampomah`} />


              {
                reviewArr == false ? false
                  :
                  reviewArr.map((el, idx) => {
                    return (
                      <ReviewCard src={el.imageUrl} name={el.name} text={el.review} ratingVal={el.rating} />
                    )
                  })
              }
            </Slider>
          </div>
        </div>



        {/* Button to show/hide the form */}
      </Container>
    </div>
  );
};

export default Review;