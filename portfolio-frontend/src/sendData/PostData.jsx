import axios from "axios";

export const sendData = async (senderData) => {
  try {
    const response = await axios
      .post("http://localhost:4000/send", senderData)
      .then((data) => {
        return data;
      });
      if (response) {
        return response;
      }
  } catch (error) {}
};
