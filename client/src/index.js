import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./router/Router";

export const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <AppRouter>
      <App />
    </AppRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
