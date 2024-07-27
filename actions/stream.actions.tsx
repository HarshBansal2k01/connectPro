"use server"

// backend -> doone in server side only

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const apiSecret = process.env.STREAM_SECRET_KEY;

// creating tokens

export const tokenProvider = async () => {
    // clerk

    const user = await currentUser();

    if(!user) throw new Error("User not logged in");
    if(!apiKey) throw new Error("Stream API key missing");
    if(!apiSecret) throw new Error("Stream API secret missing");

    const client = new StreamClient(apiKey, apiSecret);
    // exp is optional (by default the token is valid for an hour)

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

    // token issued
    const issued = Math.floor(Date.now() / 1000)-60;

    const token = client.createToken(user.id, exp, issued);

    return token
}