import { text } from "stream/consumers";
import whatsAppConfig from "../config.js";
import axios from "axios";

export function sendMessage(data) {
  let config = {
    method: "post",
    url: `https://graph.facebook.com/${whatsAppConfig.VERSION}/${whatsAppConfig.PHONE_NUMBER_ID}/messages`,
    headers: {
      Authorization: `Bearer ${whatsAppConfig.ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  const res = axios(config);
  return res;
}

export function getTextMessageInput(recipient, data) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: recipient,
    type: "text",
    text: {
        body: data
    }
    // interactive:{
    //     type: "list",
    //     body:{
    //         text: `${data.senderName}`
    //     },
    //     action:{ 
    //         button: "details",
    //         sections:[
    //             {
    //                 rows:[
    //                     {
    //                         id:"1",
    //                         title: `${data.senderEmail}`,
    //                         description:`${data.senderMessage}`
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // },
  });
}
