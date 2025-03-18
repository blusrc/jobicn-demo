import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description:
      "Perfect for small businesses getting started with our platform",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for growing businesses with higher demands",
    price: "$20",
  },
] as const;

export default function QuizDemo() {
  return (
    <main className="h-screen flex justify-center border">
      <div className="max-w-5xl w-full flex flex-col">
        <header className="flex flex-1 justify-between py-4 items-start gap-6">
          <Button size={"icon"} variant={"outline"}>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <div className="flex w-full gap-0.5 flex-col items-center justify-center leading-snug">
            <p className="text-xs font-medium text-muted-foreground">
              Personalization
            </p>
            <Progress
              className="w-full h-1.5 opacity-80 hover:opacity-100"
              value={60}
            />
          </div>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon className="size-4" />
          </Button>
        </header>

        <section className="h-full flex items-center justify-center">
          <div className="max-w-lg w-full">
            <RadioGroup defaultValue="starter" className="w-full">
              {plans.map((plan) => (
                <Label
                  className="hover:bg-accent/50 flex items-center gap-3 rounded-lg border py-4 px-3"
                  key={plan.id}
                >
                  <RadioGroupItem
                    value={plan.id}
                    id={plan.name}
                    className="size-5"
                  />

                  <div className="font-medium text-md grow">{plan.name}</div>
                  <div className="text-muted-foreground text-xs leading-[inherit]">
                    $12/mo
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </section>

        <footer className="flex flex-1 justify-center py-8 items-center gap-6">
          <Button size={"lg"} className="w-lg rounded-full">
            Continue
            <ChevronRightIcon className="size-4" />
          </Button>
        </footer>
      </div>
    </main>
  );
}
