"use client";

import { Provider } from "react-redux";
import { ErrorTracker } from "@/app/errorTracker";
import { persistore, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Wrapper } from "@/components/ui/Wrapper/Wrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <ErrorTracker />
        <Wrapper>{children}</Wrapper>
      </PersistGate>
    </Provider>
  );
}
