import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 relative w-80 min-h-[200px]">
        <Card className="rounded-none border-none bg-transparent shadow-none">
          <CardHeader className="pb-3">
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              {/* <BellIcon className="mt-px h-5 w-5" /> */}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Everything</p>
                <p className="text-sm text-muted-foreground">
                  Email digest, mentions & all activity.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              {/* <EyeNoneIcon className="mt-px h-5 w-5" /> */}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
