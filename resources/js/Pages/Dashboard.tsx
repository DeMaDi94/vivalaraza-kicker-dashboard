/** @format */

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Season } from "@/types/season";
import SeasonList from "@/Season/SeasonList";

export default function Dashboard({
  auth,
  seasons,
}: PageProps<{ seasons: Array<Season> }>) {
  console.log(seasons);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <SeasonList seasons={seasons} />
    </AuthenticatedLayout>
  );
}
