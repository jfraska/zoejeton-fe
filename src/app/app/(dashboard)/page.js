// import { Badge } from "@/components/UI/badge";
import { Button } from "@/components/UI/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/UI/card";

import { Input } from "@/components/UI/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/UI/sheet";

export default function Dashboard() {
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no invitation
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start a new experience with an invitation from us.
          </p>
          <Button className="mt-4">Add invitation</Button>
        </div>
      </div>
    </section>
  );
}
