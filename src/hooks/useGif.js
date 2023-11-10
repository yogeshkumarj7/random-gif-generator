import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  // api call

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSourse = data.data.images.downsized_medium.url;
    setGif(imgSourse);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, gif, fetchData };
};

export default useGif;
