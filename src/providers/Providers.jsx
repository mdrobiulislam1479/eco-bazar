"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </div>
  );
};

export default Providers;
