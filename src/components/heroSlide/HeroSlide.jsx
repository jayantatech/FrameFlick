import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
setFilmGenres;
// Adjust the import based on your actual file structure

const DemoCarousel = () => {
  const dispatch = useDispatch();
  const filmGenres = useSelector((state) => state.home.filmGenres);

  useEffect(() => {
    // Assuming you want to fetch film genres when the component mounts
    // Fetch your film genres using the appropriate action
    // Adjust this based on your actual data fetching logic
    const fetchData = async () => {
      try {
        // Your data fetching logic here
        const response = await fetch("your-api-endpoint");
        const data = await response.json();

        // Dispatch the action to set film genres in the Redux store
        dispatch(setFilmGenres(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  const onChange = (index) => {
    // Handle carousel change if needed
    console.log("Carousel index changed:", index);
  };

  const onClickItem = (index) => {
    // Handle click on carousel item if needed
    console.log("Clicked on item at index:", index);
  };

  const onClickThumb = (index) => {
    // Handle click on carousel thumb if needed
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
          {/* Adjust the image source based on your genre data */}
          <img src={genre.image} alt={`Genre ${index + 1}`} />
          <p className="legend">{genre.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
