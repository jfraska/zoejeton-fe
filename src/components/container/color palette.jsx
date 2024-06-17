import ColorPicker from "@/components/container/color-picker";

export default function ColorPalette({ colors, setColor }) {
  const handleColorChange = (e, field) => {
    const updatedData = {
      ...colors,
      value: {
        ...colors.value,
        [field]: e,
      },
    };

    setColor(updatedData);
  };

  return (
    <div className="bg-white p-2 flex flex-wrap gap-2 rounded">
      {Object.keys(colors.value).map((key) => (
        <ColorPicker
          key={key}
          color={colors.value[key]}
          name={key}
          setColor={handleColorChange}
        />
      ))}
    </div>
  );
}
