import { SignUp } from "@clerk/nextjs";
import React from "react";

// the [[...sign-up]] route will bring back to singup page weherever we are
// catches all of the sign in/up re directs and end up in correct page

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
