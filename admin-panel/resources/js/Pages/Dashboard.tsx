import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Button } from "@/Components/ui/button";
import { GamesTable } from "@/Components/Table";

export default function Dashboard({
    auth,
    games,
}: PageProps<{ games: Array<{ name: string; id: number }> }>) {
    console.log(games);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="mx-10 my-5 flex justify-end">
                <Button>Spiel starten</Button>
            </div>

            <Card className="m-10 p-5">
                <GamesTable games={games} />
            </Card>
        </AuthenticatedLayout>
    );
}
