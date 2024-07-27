import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI/card";
import { AccountForm } from "./account-form";

export default function Page() {
  return (
    <section className="flex h-full flex-col gap-4 lg:gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Ubah Data</CardTitle>
          </CardHeader>
          <CardContent>
            <AccountForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ubah Password</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </section>
  );
}
