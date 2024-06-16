/** @format */

import { Game } from "@/types/game";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { router } from "@inertiajs/react";
import ArrowRight from "../ui/icons/ArrowRight";

export function GamesTable({ games }: { games: Array<Game> }) {
  return (
    <Table>
      <TableCaption>Alle bisherigen Spiele</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Spiel</TableHead>
          <TableHead className="w-[100px]">Spieler 1</TableHead>
          <TableHead className="w-[100px]">Spieler 2</TableHead>
          <TableHead className="w-[100px]">Spieler 3</TableHead>
          <TableHead className="w-[100px]">Spieler 4</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {games.map((game) => (
          <TableRow
            key={game.id}
            className="cursor-pointer"
            onClick={() => router.get(`/games/${game.id}`)}
          >
            <TableCell className="font-medium">{game.name}</TableCell>

            {game.players.map((player) => (
              <TableCell className="font-medium" key={player.id}>
                {player.name}
              </TableCell>
            ))}
            <TableCell className="w-12">
              <ArrowRight className="size-4" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
