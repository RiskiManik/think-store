import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getGames = async (page) => {
  try {
    const response = await axios.get(`${baseURL}games`, {
      params: {
        key: apiKey,
        page: page,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error retrieving games:", error);
    return []; // Mengembalikan array kosong jika terjadi error
  }
};

const id = await getGames();
const itemId = id.map((item) => item.id);

export const getDetailsGame = async () => {
  const details = await Promise.all(
    itemId.map((id) => axios.get(`${baseURL}games/${id}?key=${apiKey}`))
  );

  return details;
};

export const detailGamePage = async (id) => {
  const response = await axios.get(`${baseURL}games/${id}`, {
    params: {
      key: apiKey,
    },
  });

  return response;
};

export const searchGame = async (q) => {
  const search = await axios.get(`${baseURL}games?key=${apiKey}&search=${q}`);
  return search.data.results;
};
