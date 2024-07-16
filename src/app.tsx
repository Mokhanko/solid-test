import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import {QueryClient, QueryClientProvider} from "@tanstack/solid-query";
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'


const queryClient = new QueryClient()

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <SolidQueryDevtools initialIsOpen={false} />
        <Router
          root={props => (
              <div class="flex h-screen">
                  <div class="w-1/10 min-w-[10%]">
                      <Nav/>
                  </div>
                  <div class="w-9/10 flex-grow h-full overflow-y-auto">
                      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
                  </div>
              </div>
          )}
        >
            <FileRoutes/>
        </Router>
      </QueryClientProvider>
  );
}
