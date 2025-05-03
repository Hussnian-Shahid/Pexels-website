import React, { useEffect, useState } from "react";

const ACCESS_KEY = "j7-dFqz1O7QvH0zvZ8630wIsnGaF-9aOLDPptaxsU1Q";

const LearnRestApi = () => {
  // GET
  // POST
  // UPDATE
  // PUT
  // DELETE
  
  const [imageData, setImageData] = useState({});
  const [query, setQuery] = useState("cat");

  const sendRequest = async () => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=100&client_id=${ACCESS_KEY}`;

    const getData = await fetch(url, {
      method: "GET",
      "Content-Type": "application/json",
    });

    const data = await getData.json();

    setImageData(data);

    return data;
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendRequest();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="border p-4 px-3 m-6"
          placeholder="search images"
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="grid grid-cols-4">
        {imageData?.results?.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="w-full aspect-square object-cover"
                src={item.urls.regular}
                alt="Image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnRestApi;
