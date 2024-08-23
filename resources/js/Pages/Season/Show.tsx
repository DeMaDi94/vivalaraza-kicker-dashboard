/** @format */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Season } from "@/types/season";
import SeasonList from "@/Season/SeasonList";
import { SeasonAttachUserModal } from "@/Season/SeasonAttachUserModal";
import { Player } from "@/types/player";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import { SeasonAttachGameDayModal } from "@/Season/SeasonAttachGameDayModal";
import { GameDay } from "@/types/gameDay";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import ArrowRight from "@/Components/ui/icons/ArrowRight";

export default function Show({
  auth,
  season,
  players,
  gameDays,
}: PageProps<{
  season: Season;
  players: Array<Player>;
  gameDays: Array<GameDay>;
}>) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Saison" />
      <div className="grid grid-cols-3 space-x-2">
        <div>
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <h1 className="font-bold text-3xl">Spieler</h1>
                <SeasonAttachUserModal seasonId={season.id} />
              </div>
            </CardHeader>
            <CardContent>
              <ul>
                {players.map((player) => (
                  <li>{player.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-end">
                <SeasonAttachGameDayModal seasonId={season.id} />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Alle bisherigen Spieltage</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Spieltag</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gameDays.map((gameDay) => (
                    <TableRow
                      key={gameDay.id}
                      className="cursor-pointer flex justify-between text-lg"
                    >
                      <TableCell> {gameDay.game_day_number}</TableCell>
                      <TableCell className="w-12">
                        <ArrowRight className="size-4" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
