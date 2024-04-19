import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export function GamesTable({
    games,
}: {
    games: Array<{ name: string; id: number }>;
}) {
    return (
        <Table>
            <TableCaption>Alle bisherigen Spiele</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Spiel</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {games.map((game) => (
                    <TableRow key={game.id}>
                        <TableCell className="font-medium">
                            {game.name}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
