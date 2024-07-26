import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* Navbar should be present in every file in the root */}
      {children}
      
    </main>
  );
};

export default RootLayout;
