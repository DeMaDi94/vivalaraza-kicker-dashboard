/** @format */

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';
import { FormEvent, useState } from 'react';
import { Player } from '@/types/player';
import { useForm } from '@inertiajs/react';

export function RoundCreateModal({
  gameId,
  players, 
}: {
  gameId: number;
  players: Array<Player>;
}) {
  const [open, setOpen] = useState(false);

  const { data, setData, post, reset } = useForm({
    player_one: { value: '', id: players[0].id },
    player_two: { value: '', id: players[0].id },
    player_three: { value: '', id: players[0].id },
    player_four: { value: '', id: players[0].id },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    post(`/games/${gameId}/rounds`, { onSuccess: () => reset() });
    setOpen(false);
  }

  const keys = Object.keys(data);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Runde hinzufügen</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              {players.map((player, index) => {
                return (
                  <>
                    <Label htmlFor={player.name} className="text-right">
                      {player.name}
                    </Label>
                    <Input
                      type="number"
                      value={data[keys[index] as keyof typeof data].value}
                      className="col-span-3"
                      onChange={e => {
                        setData(keys[index] as keyof typeof data, {
                          value: e.target.value,
                          id: player.id,
                        });
                      }}
                    />
                  </>
                );
              })}

              {/* // <Label htmlFor={players[0].name} className="text-right">
              //   {players[0].name}
              // </Label>
              // <Input
              //   type="number"
              //   value={data.player_one.value}
              //   className="col-span-3"
              //   onChange={(e) => {
              //     setData("player_one", {
              //       value: e.target.value,
              //       id: players[0].id,
              //     });
              //   }}
              // />
              // <Label htmlFor={players[1].name} className="text-right">
              //   {players[1].name}
              // </Label>
              // <Input
              //   type="number"
              //   value={data.player_two.value}
              //   className="col-span-3"
              //   onChange={(e) => {
              //     setData("player_two", {
                    value: e.target.value,
                    id: players[1].id,
                  });
                }}
              />
              <Label htmlFor={players[2].name} className="text-right">
                {players[2].name}
              </Label>
              <Input
                type="number"
                value={data.player_three.value}
                className="col-span-3"
                onChange={(e) => {
                  setData("player_three", {
                    value: e.target.value,
                    id: players[2].id,
                  });
                }}
              />
              <Label htmlFor={players[3].name} className="text-right">
                {players[3].name}
              </Label>
              <Input
                type="number"
                value={data.player_four.value}
                className="col-span-3"
                onChange={(e) => {
                  setData("player_four", {
                    value: e.target.value,
                    id: players[3].id,
                  });
                }}
              /> */}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Hinzufügen</Button>
          </DialogFooter>
        </form>
        {/* <form onSubmit={submit}>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>}
          <input
            type="checkbox"
            checked={data.remember}
            onChange={(e) => setData("remember", e.target.checked)}
          />{" "}
          Remember Me
          <DialogFooter>
            <Button type="submit">Hinzufügen</Button>
          </DialogFooter>
        </form> */}
      </DialogContent>
    </Dialog>
  );
}
