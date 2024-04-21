import {
    DialogClose,
    DialogDescription,
    DialogTitle,
} from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { ChangeEvent, FormEvent, useState } from "react";
import { router, useForm } from "@inertiajs/react";

export function GameCreateModal() {
    const [open, setOpen] = useState(false);

    const { data, setData, post } = useForm({
        name: "",
        player_one: "",
        player_two: "",
        player_three: "",
        player_four: "",
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post("/games");
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Spiel erstellen</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Spiel name
                            </Label>
                            <Input
                                id="name"
                                value={data.name}
                                className="col-span-3"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="player_one" className="text-right">
                                Spieler 1
                            </Label>
                            <Input
                                id="player_one"
                                value={data.player_one}
                                className="col-span-3"
                                onChange={(e) =>
                                    setData("player_one", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="player_two" className="text-right">
                                Spieler 2
                            </Label>
                            <Input
                                id="player_two"
                                value={data.player_two}
                                className="col-span-3"
                                onChange={(e) =>
                                    setData("player_two", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="player_three"
                                className="text-right"
                            >
                                Spieler 3
                            </Label>
                            <Input
                                id="player_three"
                                value={data.player_three}
                                className="col-span-3"
                                onChange={(e) =>
                                    setData("player_three", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="player_four" className="text-right">
                                Spieler 4
                            </Label>
                            <Input
                                id="player_four"
                                value={data.player_four}
                                className="col-span-3"
                                onChange={(e) =>
                                    setData("player_four", e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Erstellen</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
