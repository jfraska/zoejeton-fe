import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/UI/drawer";

export default function Customize() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button className="fixed top-12 right-4 w-10 aspect-square z-10 flex justify-center items-center rounded-lg bg-white backdrop-filter backdrop-blur-md bg-opacity-60 shadow-lg transition-all ease-linear duration-100 hover:scale-105 hover:bg-opacity-90 focus:outline-none"></button>
      </DrawerTrigger>
      <DrawerContent left="true" className="font-default">
        <DrawerHeader>
          <DrawerTitle className="text-black text-lg font-medium">
            Share link
          </DrawerTitle>
          <DrawerDescription>
            Anyone who has this link will be able to view this.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center space-x-2 p-4"></div>
        <DrawerFooter>
          <button
            className="mt-6 flex justify-between uppercase py-2 px-2 items-center w-full bg-black text-white rounded-lg hover:bg-[#00000068] transition-all ease-in-out"
            onClick={() => router.push(`${urlCheckout}/katalog/${data?.id}`)}
          >
            <h1>Checkout</h1>
          </button>
          {/* <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
