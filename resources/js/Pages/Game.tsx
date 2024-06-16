/** @format */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Card } from "@/Components/ui/card";

import { Game } from "@/types/game";
import { Player } from "@/types/player";
import { GameTable } from "@/Components/Game/GameTable";
import { Button } from "@/Components/ui/button";
import ArrowLeft from "@/Components/ui/icons/ArrowLeft";
import { RoundCreateModal } from "@/Components/Round/RoundCreateModal";

export default function Component({
  auth,
  game,
  players,
}: PageProps<{
  game: Game & {
    rounds_with_player_points: Array<{
      id: number;
      round_number: number;
      player_points: Array<{ points: number; id: number; player_id: number }>;
    }>;
  };
  players: Array<Player>;
}>) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title={game.name} />
      <div className="mb-5 flex justify-between">
        <Link href="/dashboard">
          <Button variant={"outline"} className="flex gap-1 items-center">
            <ArrowLeft className="size-4" />
            Dashboard
          </Button>
        </Link>
        <h2 className="font-bold text-xl">{game.name}</h2>

        <RoundCreateModal gameId={game.id} players={players} />
      </div>
      <Card className="p-5">
        <GameTable players={players} game={game} />
      </Card>
    </AuthenticatedLayout>
  );
}
