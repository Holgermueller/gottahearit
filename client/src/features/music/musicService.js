import axios from "axios";

const API_URL = "/api/music/";

const addMusic = async (musicData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, musicData, config);

  return response.data;
};

const getMusic = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteMusic = async (musicId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + musicId, config);
  return response.data;
};

const musicService = {
  addMusic,
  getMusic,
  deleteMusic,
};

export default musicService;
