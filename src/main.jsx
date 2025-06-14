import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "modern-normalize";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </PersistGate>
  </StrictMode>
);
