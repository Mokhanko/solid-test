import { Character } from "~/types";
import {useNavigate} from "@solidjs/router";

type CharacterCardProps = {
    character: Character;
    fromStandard?: boolean; // Use the `navigate` hook from `@solidjs/router` to navigate to the character's page.
}

export default function CharacterCard({character, fromStandard = false}: CharacterCardProps) {
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent ,id: string) => {
        e.preventDefault();
        navigate(`/${fromStandard ? 'standard' : 'query'}/${id}`);
    };

    return (
        <div
            class="cursor-pointer w-64 h-96 rounded overflow-hidden shadow-lg m-4 bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={(e) => handleClick(e, character.id)}
        >
            <img class="w-full h-3/5 object-cover" src={character.image} alt={character.name} />
            <div class="px-6 py-4">
                <div class="font-bold text-black text-xl mb-2">{character.name}</div>
                <p class="text-gray-700 text-base">
                    <strong>Date of Birth:</strong> {character.dateOfBirth || "Unknown"}
                </p>
                <p class="text-gray-700 text-base">
                    <strong>Patronus:</strong> {character.patronus || "Unknown"}
                </p>
            </div>
        </div>
    );
}

