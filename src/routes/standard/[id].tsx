import { createAsync, useParams } from "@solidjs/router";
import { getCharacter } from "~/routes/api/standart";
import {createResource, Show} from "solid-js";
import { Character as CharacterType } from "~/types";
import {CharacterInfoComponent} from "~/components/CharacterInfoComponent";

export default function Character() {
    const params = useParams();

    const [character] = createResource(params.id, getCharacter);

    console.log('character:', character());

    return (
        <CharacterInfoComponent character={character} />

    );
}
