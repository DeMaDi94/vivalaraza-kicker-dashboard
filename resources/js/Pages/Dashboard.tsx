/** @format */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Card } from "@/Components/ui/card";
import { GamesTable } from "@/Components/Game/GamesTable";
import { GameCreateModal } from "@/Components/Game/GameCreateModal";
import { Game } from "@/types/game";

export default function Dashboard({
  auth,
  games,
}: PageProps<{ games: Array<Game> }>) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <div className="mb-5 flex justify-end">
        <GameCreateModal />
      </div>

      <Card className="p-5">
        <GamesTable games={games} />
      </Card>
    </AuthenticatedLayout>
  );
}
