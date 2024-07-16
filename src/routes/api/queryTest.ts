import {createQuery} from "@tanstack/solid-query";
import {Character} from "~/types";
import {CHARACTER_LIST_URL, CHARACTER_URL} from "~/constants";

export const charactersQuery = () => {
    return createQuery<Character[]>(() => ({
        queryKey: ["characters"],
        queryFn: async () => {
            console.log('query fetching characters..');
            const response = await fetch(CHARACTER_LIST_URL);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
        staleTime: 15 * 1000,
    }));
}

export const characterQueryById = (id: string) => {
    return createQuery(() => ({
        queryKey: ["character", id],
        queryFn: async () => {
            console.log(`Query fetching character with ID: ${id}`);
            const response = await fetch(`${CHARACTER_URL}/${id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    }));
};

