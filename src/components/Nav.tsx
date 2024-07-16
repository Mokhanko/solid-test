import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
      location.pathname.includes(path) ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
      <nav class="bg-sky-800 h-full">
        <ul class="flex flex-col items-start p-3 text-gray-200 space-y-4">
          <li class={`border-l-4 ${active("/query")} pl-3`}>
            <a href="/query">Query</a>
          </li>
          <li class={`border-l-4 ${active("/standard")} pl-3`}>
            <a href="/standard">Standard</a>
          </li>
        </ul>
      </nav>
  );
}
