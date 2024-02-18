import React, { useEffect, useState } from "react";
import SearchHero from "./searchHero/SearchHero";
import fetchData from "../../components/hooks/fetchData";
import { useSelector } from "react-redux";
import SearchFilms from "./searchFilms/SearchFilms";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("iron man");
  const { data, loading } = fetchData(
    `search/multi?query=${
      searchText && searchText
    }&include_adult=false&language=en-US&page=1`
  );

  const { storeText } = useSelector((state) => state.searchPage);

  useEffect(() => {
    if (storeText) {
      setSearchText(storeText);
    }
  }, [storeText]);

  return (
    <>
      <SearchHero />;
      <SearchFilms
        searchInfo={searchText}
        data={data}
        loading={loading}
        isMorePage={false}
      />
      ;
    </>
  );
};

export default SearchPage;
