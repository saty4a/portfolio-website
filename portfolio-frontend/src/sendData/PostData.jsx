import axios from "axios";

export const sendData = async (senderData) => {
  try {
    const response = await axios
      .post("https://portfolio-backend-v1.vercel.app/send", senderData)
      .then((data) => {
        return data;
      });
      if (response) {
        return response;
      }
  } catch (error) {}
};
