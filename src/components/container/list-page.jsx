import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import ButtonCustomize from "@/components/container/button-customize";

export default function ListPage({ items }) {
  const controls = useDragControls();
  const y = useMotionValue(0);

  const handleReorder = () => {};

  return (
    <Reorder.Group
      axis="y"
      onReorder={handleReorder}
      values={items}
      className="flex flex-col gap-2 mt-2"
      as="div"
    >
      {items?.map((item, index) => (
        <Reorder.Item
          key={index}
          as="div"
          value={item}
          //   id={item}
          //   style={{ y }}
          //   dragListener={false}
          dragControls={controls}
        >
          <ButtonCustomize template={item} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
