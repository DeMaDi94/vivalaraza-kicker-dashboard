/** @format */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Season } from "@/types/season";
import SeasonList from "@/Season/SeasonList";
import { SeasonAttachUserModal } from "@/Season/SeasonAttachUserModal";
import { Player } from "@/types/player";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";

export default function Show({
  auth,
  season,
  players,
}: PageProps<{ season: Season; players: Array<Player> }>) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Saison" />
      <div className="grid grid-cols-3">
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
    </AuthenticatedLayout>
  );
}
