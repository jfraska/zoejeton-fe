import { useContext, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/collapsible";
import { Switch } from "@/components/UI/switch";
import { TokensIcon } from "@radix-ui/react-icons";
import BackgroundCustomize from "./background-customize";
import CustomizeContext from "@/context/customize";

export default function ButtonCustomize({ data }) {
  const [state, setState] = useState(true);
  const { dataContent, setDataContent } = useContext(CustomizeContext);

  const handleChangeBackground = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === data.key) {
        return { ...item, value: { ...item.value, background: e } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  useEffect(() => {
    const element = document.getElementById(data.key);
    const image = data.value.background;
    if (image && typeof image[0] !== "string") {
      element.style.backgroundImage = `url(${image[0].getFileEncodeDataURL()})`;
    }
  }, [data]);

  useEffect(() => {
    const element = document.getElementById(data.key);
    if (element) {
      element.style.display = state ? "block" : "none";
    }
  }, [state]);

  return (
    <Collapsible className="px-2 py-2 bg-neutral-300 rounded-xl">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CollapsibleTrigger asChild>
          <a
            href={`#${data.key}`}
            className="flex items-center gap-2 cursor-pointer text-black"
          >
            <TokensIcon />
            <h1 className="">{data.key}</h1>
          </a>
        </CollapsibleTrigger>

        <Switch
          defaultChecked={true}
          checked={state}
          onCheckedChange={() => setState(!state)}
        />
      </div>
      <CollapsibleContent className="mt-2">
        {data.value.background && (
          <BackgroundCustomize
            key={data.key}
            image={data.value.background}
            setImage={handleChangeBackground}
          />
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
