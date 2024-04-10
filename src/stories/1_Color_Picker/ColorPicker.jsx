import { useCallback, useState } from "react";

import cv from "color-convert";
import { CopyIcon } from "@radix-ui/react-icons";

// components
import Hsl from "./Hsl";

/**
 * 自定義顏色選擇器。 <br/>
 * 大部分的時候直接使用，內建的顏色選擇器 <input type="color" style={{ width: 150, height: 150 }} /> 就好。
 */
const ColorPicker = () => {
  const [rgb, setRgb] = useState([255, 0, 0]);
  const rgbStr = `#${cv.rgb.hex(rgb)}`;
  // 計算灰度值，如果灰度值小於 128，將文字顏色設置為白色，否則設置為黑色
  const [r, g, b] = rgb;
  const fontColor = 0.299 * r + 0.587 * g + 0.114 + b < 128 ? "white" : "black";

  const handleHslSelect = useCallback((h, s, l) => {
    setRgb(cv.hsl.rgb([h, s, l]));
  }, []);

  return (
    <div className=" container mx-auto">
      <div className=" grid grid-cols-4 gap-8">
        <div
          className=" h-full flex justify-center items-center relative"
          style={{ background: rgbStr }}
        >
          <p className=" text-xl font-bold" style={{ color: fontColor }}>
            {rgbStr}
          </p>
          <CopyIcon
            onClick={() => navigator.clipboard.writeText(rgbStr)}
            className=" w-5 h-5 absolute bottom-[10px] right-[10px] cursor-pointer"
            style={{ color: fontColor }}
          />
        </div>

        <div className=" col-span-3">
          <Hsl onSelect={handleHslSelect} />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
