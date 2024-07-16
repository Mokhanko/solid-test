import { getCharacters } from "~/routes/api/standart";
import { createAsync } from "@solidjs/router";
import {For} from "solid-js";
import {Character} from "~/types";
import CharacterCard from "~/components/CardComponent";

export default function Standard() {
    const characters = createAsync(() => getCharacters());

    return (
        <div class="flex flex-wrap justify-center">
            <For each={characters()}>{(character: Character) => <CharacterCard character={character} fromStandard={true} />}</For>
        </div>
    );
}
