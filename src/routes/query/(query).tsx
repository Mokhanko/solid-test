import {For, Show, Suspense} from "solid-js";
import {Character} from "~/types";
import CharacterCard from "~/components/CardComponent";
import {charactersQuery} from "~/routes/api/queryTest";

export default function Query() {
    const characters = charactersQuery();

    return (
        <Show when={characters.isSuccess}>
            <div class="flex flex-wrap justify-center">
                <For each={characters.data}>{(character: Character) => (
                    <CharacterCard character={character} />
                )}</For>
            </div>
        </Show>
    );
}
