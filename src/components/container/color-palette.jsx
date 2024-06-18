import ColorPicker from "@/components/container/color-picker";
import { rgbToHex } from "@mui/material";
// import { getPaletteFromURL } from "color-thief-node";
import { useEffect, useState } from "react";

export default function ColorPalette({ colors, setColor }) {
  const [palette, setPalette] = useState([]);

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

  // useEffect(() => {
  //   const imgElements = document.querySelectorAll(".image");
  //   let colors = [];

  //   const fetchPalettes = async () => {
  //     const promises = Array.from(imgElements).map(async (img) => {
  //       const colorPalette = await getPaletteFromURL(img.getAttribute("src"));
  //       return colorPalette.map((color) =>
  //         rgbToHex(`rgb(${color[0]},${color[1]},${color[2]})`)
  //       );
  //     });

  //     const results = await Promise.all(promises);
  //     colors = results.flat();
  //     setPalette(colors);
  //   };

  //   fetchPalettes();
  // }, []);

  return (
    <div className="bg-white p-2 flex flex-wrap gap-2 rounded">
      {Object.keys(colors.value).map((key) => (
        <ColorPicker
          key={key}
          color={colors.value[key]}
          name={key}
          preset={palette}
          setColor={handleColorChange}
        />
      ))}
    </div>
  );
}
