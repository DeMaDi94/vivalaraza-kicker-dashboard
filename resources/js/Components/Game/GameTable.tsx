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
import { Player } from "@/types/player";

export function GameTable({
  game,
  players,
}: {
  game: Game & {
    rounds_with_player_points: Array<{
      id: number;
      round_number: number;
      player_points: Array<{ points: number; id: number; player_id: number }>;
    }>;
  };
  players: Array<Player>;
}) {
  return (
    <Table>
      <TableCaption>Alle bisherigen Runden</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Runde</TableHead>
          {players.map((player) => (
            <TableHead className="w-[100px]" key={player.id}>
              {player.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {game.rounds_with_player_points.map((round) => (
          <TableRow key={round.id}>
            <TableCell>{round.round_number}</TableCell>
            {players.map((player) => {
              const point = round.player_points.find(
                (point) => point.player_id === player.id
              );

              return (
                <TableCell className="w-[100px]" key={point?.id}>
                  {point?.points}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
