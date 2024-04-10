import PropTypes from "prop-types";
import { useState } from "react";

const Palette = ({ initVal, onSelect, colors }) => {
  const [val, setVal] = useState(initVal ?? 0);
  return (
    <section className=" container mx-auto">
      <div className=" flex relative top-6 select-none mb-7">
        {colors.map((c, index) => {
          return (
            <div
              style={{ backgroundColor: c }}
              className="h-5  flex-1 cursor-pointer"
              onClick={() => {
                setVal(index);
                onSelect(index);
              }}
              onMouseEnter={(e) => {
                if (e.buttons & 1) {
                  setVal(index);
                  onSelect(index);
                }
              }}
              key={index}
            >
              <span
                className=" absolute -top-6 border-l-[1px] border-black pl-1 pointer-events-none"
                hidden={index !== val}
              >
                {index}
                {colors.length <= 101 && "%"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Palette.propTypes = {
  initVal: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Palette;
