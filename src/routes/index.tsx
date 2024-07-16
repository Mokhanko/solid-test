import {A} from "@solidjs/router";

export default function Home() {

    return (
        <div class="container mx-auto p-4">
            <div class="flex justify-center mb-4">
                <A href="/standard" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Standard
                </A>
                <A href="/query" class="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Query
                </A>
            </div>

        </div>
    );
}
