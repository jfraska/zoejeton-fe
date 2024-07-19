import { useContext, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/collapsible";
import { Switch } from "@/components/UI/switch";
import { TokensIcon } from "@radix-ui/react-icons";
import BackgroundCustomize from "@/components/container/background-customize";
import CustomizeContext from "@/context/customize";
import ColorPalette from "@/components/container/color-palette";

export default function ButtonCustomize({ template, type = "page" }) {
  const [state, setState] = useState(!template?.visible?.disable);
  const { dataContent, setDataContent, dataColor, setDataColor, data } =
    useContext(CustomizeContext);

  const handleChangeBackground = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === template.key) {
        return { ...item, value: { ...item.value, background: e } };
      }
      return item;
    });

    setDataContent(updatedData);
  };

  const handleChangeVisbility = (e) => {
    const updatedData = dataContent?.map((item) => {
      if (item.key === template.key) {
        return { ...item, visible: { ...item.visible, disable: state } };
      }
      return item;
    });

    setDataContent(updatedData);
    setState(!state);
  };

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
            href={`#${template?.key ? template.key : type}`}
            className="flex items-center gap-2 font-medium text-neutral-900"
          >
            <TokensIcon />
            <h1 className="capitalize">
              {template?.key ? template.key : type}
            </h1>
          </a>
        </CollapsibleTrigger>

        {type === "page" && template.visible && (
          <Switch
            className="data-[state=unchecked]:bg-[#e5e5e5]"
            checked={state}
            onCheckedChange={handleChangeVisbility}
          />
        )}
      </div>
      <CollapsibleContent className="mt-2">
        {type === "page" && template.value.background && (
          <BackgroundCustomize
            slug={data.slug}
            key={template.key}
            image={template.value.background}
            setImage={handleChangeBackground}
          />
        )}

        {type === "color" && (
          <ColorPalette colors={dataColor} setColor={setDataColor} />
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
