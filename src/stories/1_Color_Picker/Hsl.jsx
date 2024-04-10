import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { hsl } from "./util";
import Palette from "./Palette";

const Hsl = ({ onSelect }) => {
  // 初始化色相、飽和度和亮度的值
  const [initH, initS, initL] = [0, 100, 50];
  const [hue, setHue] = useState(initH);
  const [saturation, setSaturation] = useState(initS);
  const [lightness, setLightness] = useState(initL);

  // 使用useEffect監聽色相、飽和度和亮度的變化，調用onSelect回調函數
  useEffect(() => {
    onSelect(hue, saturation, lightness);
  }, [onSelect, hue, saturation, lightness]);

  // 使用useMemo生成色相、飽和度和亮度對應的顏色數組
  const hColors = useMemo(() => _.range(360).map((h) => hsl(h, 100, 50)), []);
  const sColors = useMemo(
    () => _.range(101).map((s) => hsl(hue, s, 50)),
    [hue]
  );
  const lColors = useMemo(
    () => _.range(101).map((l) => hsl(hue, 100, l)),
    [hue]
  );

  return (
    <>
      <div className=" flex justify-center items-end gap-2">
        <span className=" text-center select-none">H</span>
        <Palette initVal={initH} onSelect={setHue} colors={hColors} />
      </div>
      <div className=" flex justify-center items-end gap-2">
        <span className=" text-center select-none">S</span>
        <Palette initVal={initS} onSelect={setSaturation} colors={sColors} />
      </div>
      <div className=" flex justify-center items-end gap-2">
        <span className=" text-center select-none">L</span>
        <Palette initVal={initL} onSelect={setLightness} colors={lColors} />
      </div>
    </>
  );
};

Hsl.propTypes = {
  onSelect: PropTypes.func,
};

export default Hsl;
