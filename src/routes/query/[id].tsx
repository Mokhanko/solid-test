import {characterQueryById} from "~/routes/api/queryTest";
import {useParams} from "@solidjs/router";
import {Match, Show, Switch} from "solid-js";
import {CharacterInfoComponent} from "~/components/CharacterInfoComponent";
import {Character} from "~/types";

export default function QueryCharacter() {
    const params = useParams();

    const test = characterQueryById(params.id);

    return (
        <Switch>
            <Match when={test.isPending}>Loading...</Match>
            <Match when={test.error}>
                {'An error has occurred: ' + (test.error as Error).message}
            </Match>
            <Match when={test.data !== undefined}>
                <div class="container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start">
                    <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <img
                            class="h-64 w-64 object-cover rounded-md shadow-md"
                            src={test.data[0]?.image}
                            alt={test.data[0]?.name}
                        />
                    </div>
                    <div class="max-w-md w-full bg-white rounded-xl shadow-md p-6">
                        <h2 class="text-2xl font-bold mb-4">{test.data[0]?.name}</h2>
                        <p class="text-gray-700">
                            <strong>Alternate
                                Names:</strong> {test.data[0]?.alternate_names?.join(", ") || "None"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Species:</strong> {test.data[0]?.species}
                        </p>
                        <p class="text-gray-700">
                            <strong>Gender:</strong> {test.data[0]?.gender}
                        </p>
                        <p class="text-gray-700">
                            <strong>House:</strong> {test.data[0]?.house}
                        </p>
                        <p class="text-gray-700">
                            <strong>Date of Birth:</strong> {test.data[0]?.dateOfBirth || "Unknown"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Year of Birth:</strong> {test.data[0]?.yearOfBirth || "Unknown"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Wizard:</strong> {test.data[0]?.wizard ? "Yes" : "No"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Ancestry:</strong> {test.data[0]?.ancestry}
                        </p>
                        <p class="text-gray-700">
                            <strong>Eye Colour:</strong> {test.data[0]?.eyeColour}
                        </p>
                        <p class="text-gray-700">
                            <strong>Hair Colour:</strong> {test.data[0]?.hairColour}
                        </p>
                        <p class="text-gray-700">
                            <strong>Wand:</strong> {test.data[0]?.wand?.wood} wood, {test.data[0]?.wand?.core} core, {test.data[0]?.wand?.length} inches
                        </p>
                        <p class="text-gray-700">
                            <strong>Patronus:</strong> {test.data[0]?.patronus || "Unknown"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Hogwarts Student:</strong> {test.data[0].hogwartsStudent ? "Yes" : "No"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Hogwarts Staff:</strong> {test.data[0]?.hogwartsStaff ? "Yes" : "No"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Actor:</strong> {test.data[0]?.actor}
                        </p>
                        <p class="text-gray-700">
                            <strong>Alternate
                                Actors:</strong> {test.data[0]?.alternate_actors?.join(", ") || "None"}
                        </p>
                        <p class="text-gray-700">
                            <strong>Alive:</strong> {test.data[0]?.alive ? "Yes" : "No"}
                        </p>
                    </div>
                </div>
            </Match>
        </Switch>
    )
}