import { Plus } from "lucide-react";

import logo from "../assets/logo.svg";
import letsStart from "../assets/lets-start.svg";
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit Logo" />
      <img src={letsStart} alt="in.orbit Logo" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <span className="underline">cadastrar um</span> agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
