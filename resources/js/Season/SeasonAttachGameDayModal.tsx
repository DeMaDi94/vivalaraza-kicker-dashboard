/** @format */

import { ChangeEvent, FormEvent, useState } from "react";
import { router, useForm } from "@inertiajs/react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export function SeasonAttachGameDayModal({ seasonId }: { seasonId: number }) {
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset } = useForm({
    game_day_number: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    post(`/seasons/${seasonId}/game-day`);
    setOpen(false);
    reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Spieltag hinzufügen</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Spieltag
              </Label>
              <Input
                id="name"
                type="number"
                value={data.game_day_number}
                className="col-span-3"
                onChange={(e) => setData("game_day_number", e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Erstellen</Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
