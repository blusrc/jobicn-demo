import { buttonVariants } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="h-screen flex items-center justify-center gap-4">
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={"/dashboard"}
      >
        Dashboard example showcase
        <ChevronRightIcon className="size-4" />
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={"/funnel/question"}
      >
        Funnel Demo
        <ChevronRightIcon className="size-4" />
      </Link>
    </main>
  );
}
