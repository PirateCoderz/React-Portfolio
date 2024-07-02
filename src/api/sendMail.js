import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export const GET = async (req) => {
    return NextResponse.json({ message: "Get request called" })
}

export const POST = async (req) => {

    try {
        const body = await req.json();

        console.log('body', body);

        const name = body.firstName;
        const lastName = body.lastName;
        const email = body.email;
        const phone = body.phone;
        const message = body.message;

        if (!name && !lastName && !email && !company && !phone && !message) {
            console.log("All field are required");
            throw new Error("All field are required");
        }
        else {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
                connectionTimeout: 10000,
                greetingTimeout: 5000,
                socketTimeout: 45000
            });

            console.log("transporter", transporter);


            const mailOptions = {
                to: process.env.EMAIL_RECIEVER,
                from: email,
                subject: "User Information",
                html: `First Name :  ${name}, <br/> 
                    Last Name : ${lastName}, <br/> 
                    Mail :  ${email}, <br/> 
                    Company : ${company}, <br/> 
                    Phone : ${phone}, <br/> 
                    Message : ${message}`
            };

            // console.log("mailOptions", mailOptions);

            const sent = await transporter.sendMail(mailOptions);
            // console.log("sent", sent);

            if (!sent) {
                throw new Error("Mail not sent. Something went wrong");
            }
        }
        return NextResponse.json({ body: body, message: "Mail has been send", success: true }, { status: 200 })
    }
    catch (err) {
        console.log('error', err)
        return NextResponse.json({ message: "Error occur while sending mail.", error: err.message, success: false }, { status: 400 })
    }
}