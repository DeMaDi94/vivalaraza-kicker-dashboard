import { Player } from "./player";

export type Game = {
    id: number;
    name: string;
    players: Array<Player>;
};
