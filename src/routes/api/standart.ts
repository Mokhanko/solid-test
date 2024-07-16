import { cache } from "@solidjs/router";
import { Character } from "~/types";
import {CHARACTER_LIST_URL, CHARACTER_URL} from "~/constants";

export const getCharacters = cache(async () => {
    "use server";
    const response = await new Promise<Response>((resolve) => {
        setTimeout(async () => {
            const res = await fetch(CHARACTER_LIST_URL);
            resolve(res);
        }, 0);
    });
    return (await response.json()) as Character[];
}, "characters");

export const getCharacter = cache(async (id: string) => {
    const response = await new Promise<Response>((resolve) => {
        setTimeout(async () => {
            const res = await fetch(`${CHARACTER_URL}/${id}`);

            resolve(res);
        }, 0);
    });
    return (await response.json()) as Character[];
}, "character");