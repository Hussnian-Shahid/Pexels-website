import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("cat");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initial fetch when component mounts
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sendRequest = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=j7-dFqz1O7QvH0zvZ8630wIsnGaF-9aOLDPptaxsU1Q`
      );
      const data = await sendRequest.json();
      setImageData(data);
      console.log(data.results);

      // Check if no results were found
      if (data.results && data.results.length === 0) {
        setError(
          `No results found for "${query}". Please try refining your search.`
        );
      }

      return data;
    } catch (error) {
      console.error("Failed to fetch the API", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const changefuntion = (e) => {
    setQuery(e.target.value);
  };

  const enterFunction = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchPhotos();
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  const buttons = [
    {
      id: 1,
      value: "Home",
    },
    {
      id: 2,
      value: "Vedio",
    },
    {
      id: 3,
      value: "Leaderboard",
    },
    {
      id: 4,
      value: "Challenges",
    },
  ];

  return (
    <>
      <div className="w-full relative">
        {/* Background image div */}
        <div
          className="absolute inset-0 bg-cover bg-center h-64 sm:h-72 md:h-80 lg:h-96"
          style={{ backgroundImage: "url('background.jpeg')" }}
        ></div>
        <div className="absolute inset-0 h-64 sm:h-72 md:h-80 lg:h-96 bg-black/70"></div>

        <div className="relative">
          {/* navbar */}
          <div className="relative flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 font-normal z-10">
            {/* logo section */}
            <div className="text-white text-xl sm:text-2xl italic font-medium">
              pexels
            </div>

            {/* other first section */}
            <div className="flex text-white cursor-pointer gap-1 items-center text-xs sm:text-sm">
              {/* explore - hide on smallest screens */}
              <div
                className="hidden sm:flex items-center hover:bg-black/40 
                px-2 sm:px-3 py-1 sm:py-2 rounded-full font-semi-bold text-xs sm:text-sm text-white"
              >
                <div>Explore</div>
                <div>
                  <svg
                    className="h-4 w-4 sm:h-6 sm:w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* licence - hide on smallest screens */}
              <div className="hidden sm:block hover:bg-black/40 cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                License
              </div>

              {/* three dots */}
              <div>
                <svg
                  className="h-10 w-10 sm:h-12 sm:w-12 hover:bg-black/40 cursor-pointer p-3 sm:p-4 rounded-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>

              {/* Join */}
              <div className="bg-white text-black rounded-lg px-2 sm:px-3 text-xs sm:text-sm py-1 sm:py-2 hover:bg-gray-100">
                Join
              </div>
            </div>
          </div>

          {/* input section */}
          <div className="text-center relative text-white px-4 sm:px-6">
            <div className="font-semibold m-auto pt-8 sm:pt-12 md:pt-16 text-lg sm:text-xl md:text-2xl">
              <div>The best free stock photos, royalty free</div>
              <div>images & videos shared by creators.</div>
            </div>
            <form
              className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto group mt-4 sm:mt-5"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search for free photos"
                className="bg-[#F7F7F7] font-semibold text-black w-full rounded-lg outline-0 p-2 pl-20 sm:pl-28 text-xs sm:text-sm"
                value={query}
                onChange={changefuntion}
                onKeyDown={enterFunction}
              />

              {/* photos section */}
              <div className="flex gap-0 absolute cursor-pointer px-1 sm:px-2 py-1 top-0 left-0 justify-center shadow-xl items-center rounded-xl bg-[#f5f5f5]">
                <div>
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-[#CDCDCD]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="3"
                      stroke="currentcolor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                      stroke="currentcolor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm text-black px-1 py-1">
                  Photos
                </div>
                <div>
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[#CDCDCD]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentcolor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* search section */}
              <button
                type="submit"
                className="hover:bg-[#EDEDED] absolute cursor-pointer group right-0 top-0 flex justify-center items-center px-2 sm:px-3 py-1 sm:py-2 m-0.5 rounded-lg"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-[#CDCDCD] group-hover:text-[#4c4b4b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            {/* Error message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-2 mx-auto max-w-xs sm:max-w-md md:max-w-lg text-xs sm:text-sm">
                <p>{error}</p>
                <p className="text-xs mt-1">
                  Try using simpler keywords or check your spelling.
                </p>
              </div>
            )}
          </div>

          {/* section */}
          <div className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <div className="font-custom bg-white my-3 sm:my-4 md:my-5 flex justify-center items-center w-full overflow-x-auto whitespace-nowrap">
              {buttons.map((button) => (
                <div
                  key={button.id}
                  className="hover:bg-[#e3e3e3] rounded-full m-1 px-2 sm:px-3 md:px-4 text-xs sm:text-sm font-medium py-1 sm:py-2 cursor-pointer hover:text-[#383838] text-[#676767] bg-white"
                >
                  {button.value}
                </div>
              ))}
            </div>
          </div>

          {/* Photos gallery section */}
          <div className="font-custom text-xl sm:text-2xl pl-4 sm:pl-6 mt-4">
            Free Stock Photos
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-center items-center my-6 sm:my-8 md:my-10">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          )}

          {/* Photos grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 cursor-pointer">
              {imageData?.results?.map((data) => (
                <div key={data.id}>
                  <div className="relative group">
                    <img
                      className="rounded-lg w-full aspect-square object-cover group-hover:scale-102 transition-all duration-300"
                      src={data.urls.small}
                      alt="image"
                    />
                    <a
                      href={data.links.download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute bottom-2 right-2 text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center p-1 sm:p-2 gap-1 duration-300 rounded-xl bg-green-500">
                        <div>
                          <MdOutlineFileDownload />
                        </div>
                        <div>Download</div>
                      </div>
                    </a>
                    <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center p-1 sm:p-2 gap-1 duration-300 rounded-xl">
                      <img
                        src={data.user.profile_image.small}
                        className="rounded-full w-5 h-5 sm:w-6 sm:h-6"
                        alt=""
                      />
                      <div className="truncate max-w-[100px] sm:max-w-[150px]">
                        {data.user.first_name}
                        {data.user.last_name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
