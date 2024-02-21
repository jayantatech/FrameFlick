import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { setFilmGenres } from "../../store/HomeSlice";

const DemoCarousel = () => {
  const dispatch = useDispatch();
  const filmGenres = useSelector((state) => state.home.filmGenres);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("your-api-endpoint");
        const data = await response.json();

        dispatch(setFilmGenres(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const onChange = (index) => {
    console.log("Carousel index changed:", index);
  };

  const onClickItem = (index) => {
    console.log("Clicked on item at index:", index);
  };

  const onClickThumb = (index) => {
    console.log("Clicked on thumb at index:", index);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {filmGenres?.map((genre, index) => (
        <div key={index}>
          <img src={genre?.image} alt={`Genre ${index + 1}`} />
          <p className="legend">{genre.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
