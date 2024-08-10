import { useState } from "react";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import ButtonCustomize from "@/components/container/button-customize";

export default function CustomizeList({
  content,
  type = "page",
  handleReorder = () => {},
}) {
  const controls = useDragControls();
  const [selected, setSelected] = useState(null);
  // const y = useMotionValue(0);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {/* <Reorder.Group
      as="div"
      axis="y"
      onReorder={handleReorder}
      values={content}
      className="flex flex-col gap-2 mt-2"
    > */}
      {content?.map((item) => (
        // <Reorder.Item
        //   as="div"
        //   key={item}
        //   value={item}

        //   id={item.key}
        //   style={{ y }}
        //   dragListener={false}
        //   dragControls={controls}
        // >

        <ButtonCustomize
          type={type}
          template={item}
          isSelected={selected === item.key}
          setSelected={() =>
            setSelected(selected === item.key ? null : item.key)
          }
        />

        // </Reorder.Item>
      ))}
    </div>
    // </Reorder.Group>
  );
}
