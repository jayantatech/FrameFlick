import React, { useEffect, useState } from "react";
import SearchHero from "./searchHero/SearchHero";
import fetchData from "../../components/hooks/fetchData";
import { useSelector } from "react-redux";
import SearchFilms from "./searchFilms/SearchFilms";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("iron man");
  const [searchMessage, setSearchMessage] = useState("iron man");
  const [storeData, setStoreData] = useState(null);
  const { data, loading } = fetchData(
    `search/multi?query=${
      searchText && searchText
    }&include_adult=false&language=en-US&page=1`
  );

  const { storeText, storeGenresData, genresText } = useSelector(
    (state) => state.searchPage
  );

  useEffect(() => {
    if (data) {
      setStoreData(data);
    }
  }, [data]);

  useEffect(() => {
    if (storeText) {
      setSearchText(storeText);
      setSearchMessage(storeText);
    }
  }, [storeText]);

  useEffect(() => {
    if (storeGenresData?.results?.length > 0) {
      setStoreData(storeGenresData);
    }
  }, [storeGenresData]);

  useEffect(() => {
    if (genresText) {
      setSearchMessage(genresText?.name);
    }
  }, [genresText]);
  return (
    <>
      <SearchHero />;
      <SearchFilms
        searchInfo={searchMessage}
        data={storeData}
        loading={loading}
        isMorePage={false}
      />
      ;
    </>
  );
};

export default SearchPage;
