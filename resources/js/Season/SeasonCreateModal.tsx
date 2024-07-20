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

export function SeasonCreateModal() {
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset } = useForm({
    year: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    post("/seasons");
    setOpen(false);
    reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Saison erstellen</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Jahr
              </Label>
              <Input
                id="name"
                value={data.year}
                className="col-span-3"
                onChange={(e) => setData("year", e.target.value)}
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
