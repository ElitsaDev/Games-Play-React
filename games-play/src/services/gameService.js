import { request } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async() => {
    const result = await request.get(baseUrl);

    const games = Object.values(result);
    return games;
}

export const create = async() => {
    const result = await request.post(baseUrl);
}