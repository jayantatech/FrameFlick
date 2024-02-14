export const fetchDataFromApi = async (url = "discover/movie") => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/${url && url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTQ2MTZjZDVlNTc5NjVjMTQxMGY4ODc5Yzg0NTkyZiIsInN1YiI6IjY1ODAzMWE0MmY4ZDA5MDkxM2E3ZDU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZVsaBWjVHomPjaYSP9-oKAqIH2-cYrBHm6KW5uy6H8",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    throw new Error(`Error in fetchDataFromApi: ${error.message}`);
  }
};
