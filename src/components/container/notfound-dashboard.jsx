import { Button } from "@/components/UI/button";
import Link from "next/link";

export default function NotfoundDashboard({
  pathname,
  title,
  desc,
  textButton,
  link,
  ...props
}) {
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl capitalize">
          {pathname}
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
          <Button {...props} className="mt-4 bg-foreground text-background">
            {link ? <Link href={link}>{textButton}</Link> : textButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
