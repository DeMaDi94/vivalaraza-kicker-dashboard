/** @format */

import { Player } from "@/types/player";
import { TGameWithScore, TRoundsWithPlayerPoints } from "@/Pages/Game";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function GameStandings({
  players,
  game,
}: {
  game: TGameWithScore;
  players: Array<Player>;
}) {
  return (
    <Table>
      <TableCaption>Spielstand</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Spieler</TableHead>
          <TableHead className="flex items-center justify-end">
            Punkte
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player) => (
          <TableRow key={game.id}>
            <TableCell>{player.name}:</TableCell>
            <TableCell className="flex justify-end">
              {game.rounds_with_player_points.reduce(
                (accumulator, currentValue) => {
                  return (
                    accumulator +
                    (currentValue.player_points.find(
                      (player_point) => player_point.player_id === player.id
                    )?.points ?? 0)
                  );
                },
                0
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
