import { NextApiResponse, NextApiRequest } from "next";
require("dotenv").config();
const nodemailer = require("nodemailer");

type ResponseData = {
  message: string;
};

export default function mailer(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Bad Request" });
  }

  const data = req.body;

  if (!data?.name || !data.email || !data.message) {
    return res.status(400).json({ message: "Bad Request" });
  }

  const pass = process.env.ADMIN_API;
  const email = process.env.EMAIL;
  const user = process.env.USER;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: user,
      pass: pass,
    },
    secure: true,
  });

  const mailData = {
    from: `${data.email}`,
    to: email,
    replyTo: `${data.email}`,
    inReplyTo: `${data.message}`,
    subject: `Consulta de: ${data.name}`,
    html: `<p>${data.message}</p>`,
  };

  try {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(info);
        res.send(info);
      }
      res.status(200).end();
    });
  } catch (error) {
    console.log(error)
    res.status(404);
  }
}
