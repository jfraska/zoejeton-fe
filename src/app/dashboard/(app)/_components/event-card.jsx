import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/UI/card";
import { Label } from "@/components/UI/label";
import { Switch } from "@/components/UI/switch";
import { getDataContent } from "@/lib/utils";

export default function EventCard({ result }) {
  if (result) {
    const data = result.data;

    const date = new Date(
      getDataContent(data.content, "event", "akad", "date")
    );

    const month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return (
      <div className="col-span-4 flex flex-col gap-4">
        <Card className="grid h-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Rangkaian Acara</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-start justify-start gap-4 space-x-2">
              <div className="flex flex-col w-2/5 justify-start items-center font-medium">
                <h1 className="text-4xl">{date.getDate()}</h1>
                <h1 className="text-xl">{`${
                  month[date.getMonth()]
                } ${date.getFullYear()}`}</h1>
              </div>
              <div className="h-full w-px bg-neutral-800" />
              <div className="flex flex-col justify-start items-start">
                {data.content.map(
                  (item) =>
                    item.key === "event" &&
                    Object.keys(item.value).map((key) => (
                      <div key={key}>
                        <h1 className="text-lg font-medium capitalize">
                          {key}
                        </h1>
                        <h2 className="mb-2">{item.value[key].date}</h2>
                      </div>
                    ))
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="pb-2 text-sm">
            <button>Ubah Rangkaian Acara</button>
          </CardFooter>
        </Card>
        <Card>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between space-x-2 mt-4">
              <Label htmlFor="functional" className="flex flex-col space-y-1">
                <span>Functional Cookies</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  These cookies allow the website to provide personalized
                  functionality.
                </span>
              </Label>
              <Switch id="functional" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
