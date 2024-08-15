import { useContext, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/collapsible";
import { Switch } from "@/components/UI/switch";
import { TokensIcon } from "@radix-ui/react-icons";
import BackgroundCustomize from "@/components/container/template/background-customize";
import CustomizeContext from "@/context/customize";
import ColorPalette from "@/components/container/template/color-palette";

export default function ButtonCustomize({
  template,
  type,
  isSelected,
  setSelected,
}) {
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

  if (type === "color") {
    return (
      <Collapsible
        open={isSelected}
        onOpenChange={setSelected}
        className="px-2 py-2 bg-neutral-300 rounded-xl"
      >
        <CollapsibleTrigger asChild>
          <button className="flex items-center gap-2 font-medium text-neutral-900">
            <TokensIcon />
            <h1 className="capitalize">{type}</h1>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-2">
          {type === "color" && (
            <ColorPalette colors={dataColor} setColor={setDataColor} />
          )}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  if (type === "fitur" && !template.visible) {
    return (
      <Collapsible
        open={isSelected}
        onOpenChange={setSelected}
        className="px-2 py-2 bg-neutral-300 rounded-xl"
      >
        <div className="flex items-center justify-between">
          <CollapsibleTrigger asChild>
            <a
              href={`#${template.key}`}
              className="flex items-center gap-2 font-medium text-neutral-900"
            >
              <TokensIcon />
              <h1 className="capitalize">{template.key}</h1>
            </a>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="mt-2">
          {template.value.background && (
            <BackgroundCustomize
              slug={data.slug}
              key={template.key}
              image={template.value.background}
              setImage={handleChangeBackground}
            />
          )}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  if (template.visible) {
    return (
      <Collapsible
        open={isSelected}
        onOpenChange={setSelected}
        className="px-2 py-2 bg-neutral-300 rounded-xl"
      >
        <div className="flex items-center justify-between">
          <CollapsibleTrigger asChild>
            <a
              href={`#${template.key}`}
              className="flex items-center gap-2 font-medium text-neutral-900"
            >
              <TokensIcon />
              <h1 className="capitalize">{template.key}</h1>
            </a>
          </CollapsibleTrigger>

          <Switch checked={state} onCheckedChange={handleChangeVisbility} />
        </div>
        <CollapsibleContent className="mt-2">
          {template.value.background && (
            <BackgroundCustomize
              slug={data.slug}
              key={template.key}
              image={template.value.background}
              setImage={handleChangeBackground}
            />
          )}
        </CollapsibleContent>
      </Collapsible>
    );
  }
}
