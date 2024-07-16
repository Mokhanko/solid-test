import {Resource, Show} from "solid-js";
import {Character as CharacterType} from "~/types";

type CharacterInfoProps = {
    character:  Resource<CharacterType[]>;
}
export function CharacterInfoComponent({ character }: CharacterInfoProps) {
    return (
        <div class="container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start">
            <Show when={character()} fallback={<div>Loading...</div>}>
                {(character) => {
                    const characterToShow = character()[0];

                    return (
                        <>
                            <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                                <img
                                    class="h-64 w-64 object-cover rounded-md shadow-md"
                                    src={characterToShow.image}
                                    alt={characterToShow.name}
                                />
                            </div>
                            <div class="max-w-md w-full bg-white rounded-xl shadow-md p-6">
                                <h2 class="text-2xl font-bold mb-4">{characterToShow.name}</h2>
                                <p class="text-gray-700">
                                    <strong>Alternate
                                        Names:</strong> {characterToShow.alternate_names?.join(", ") || "None"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Species:</strong> {characterToShow.species}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Gender:</strong> {characterToShow.gender}
                                </p>
                                <p class="text-gray-700">
                                    <strong>House:</strong> {characterToShow.house}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Date of Birth:</strong> {characterToShow?.dateOfBirth || "Unknown"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Year of Birth:</strong> {characterToShow?.yearOfBirth || "Unknown"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Wizard:</strong> {characterToShow?.wizard ? "Yes" : "No"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Ancestry:</strong> {characterToShow?.ancestry}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Eye Colour:</strong> {characterToShow?.eyeColour}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Hair Colour:</strong> {characterToShow?.hairColour}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Wand:</strong> {characterToShow.wand?.wood} wood, {characterToShow.wand?.core} core, {characterToShow.wand?.length} inches
                                </p>
                                <p class="text-gray-700">
                                    <strong>Patronus:</strong> {characterToShow?.patronus || "Unknown"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Hogwarts Student:</strong> {characterToShow.hogwartsStudent ? "Yes" : "No"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Hogwarts Staff:</strong> {characterToShow.hogwartsStaff ? "Yes" : "No"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Actor:</strong> {characterToShow.actor}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Alternate
                                        Actors:</strong> {characterToShow.alternate_actors?.join(", ") || "None"}
                                </p>
                                <p class="text-gray-700">
                                    <strong>Alive:</strong> {characterToShow.alive ? "Yes" : "No"}
                                </p>
                            </div>
                        </>
                    )
                }}
            </Show>
        </div>
    )
}