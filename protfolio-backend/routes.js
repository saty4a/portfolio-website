import express from "express";
import { getTextMessageInput, sendMessage } from "./modules/messageHelper.js";
import whatsAppConfig from "./config.js";

const route = express.Router();

route.get("/", (req, res) => {
  try {
    res.status(200).json({
      data: null,
      message: "api wohttp://localhost:4000/sendrking",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      data: null,
      message: "error",
      success: false,
    });
  }
});

route.post("/send", (req, res) => {
  try {
    Object.entries(req.body).map(([key, val] = entry) => {
      const item = `${key}: ${val}`;
      const data = getTextMessageInput(whatsAppConfig.RECIPIENT_WAID, item);
      sendMessage(data).then((response) => {
        console.log(response.status);
      });
    });
    res.status(200).json({
      data: req.body,
      message: "data received",
      success: "true",
    });
  } catch (error) {
    res.status(400).json({
      data: req.body,
      message: "data not received",
      success: "false",
    });
  }
});

export default route;
