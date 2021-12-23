import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(0 51 109)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(0 51 109)", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>2015</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloribus quis ullam, quisquam assumenda non,
          voluptas incidunt velit et error culpa quae cupiditate labore blanditiis explicabo natus ad minima recusandae!
        </p>
      </div>
      <div>
        <h3>2015</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas similique alias, veniam aliquid impedit
          dolorem ipsum consectetur officiis at veritatis nisi? Cum alias officiis explicabo libero quod dolor eveniet.
        </p>
      </div>
      <div>
        <h3>2016</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab, unde laboriosam sint ea exercitationem
          eos ullam vitae reprehenderit ex eligendi deleniti accusamus enim iusto. Repudiandae quod culpa possimus
          laboriosam.
        </p>
      </div>
      <div>
        <h3>2017</h3>
      </div>
      <div>
        <h3>2018</h3>
      </div>
      <div>
        <h3>2019</h3>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
