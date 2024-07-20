/** @format */

import { Card } from "@/Components/ui/card";
import ArrowRight from "@/Components/ui/icons/ArrowRight";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Season } from "@/types/season";
import { SeasonCreateModal } from "./SeasonCreateModal";

const SeasonList = (props: { seasons: Array<Season> }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Saisons</h1>
        <SeasonCreateModal />
      </div>
      <Card className="p-5">
        <Table>
          <TableCaption>Alle bisherigen Saisons</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Saison</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.seasons.map((season) => (
              <TableRow
                key={season.id}
                className="cursor-pointe flex justify-between"
              >
                <TableCell>{season.year}</TableCell>
                <TableCell className="w-12">
                  <ArrowRight className="size-4" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default SeasonList;
