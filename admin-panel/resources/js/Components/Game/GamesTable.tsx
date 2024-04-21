import { Game } from "@/types/Game";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

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
                </TableRow>
            </TableHeader>
            <TableBody>
                {games.map((game) => (
                    <TableRow key={game.id}>
                        <TableCell className="font-medium">
                            {game.name}
                        </TableCell>

                        {game.players.map((player) => (
                            <TableCell className="font-medium">
                                {player.name}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
