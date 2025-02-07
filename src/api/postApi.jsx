import axios from "axios";

const postApi = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    console.log("Success:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error.response?.data || error.message);
    throw error;
  }
};

export default postApi;
