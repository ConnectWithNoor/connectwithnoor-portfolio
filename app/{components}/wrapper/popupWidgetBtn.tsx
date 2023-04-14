"use client";

import { Variants } from "framer-motion";
import { PopupButton } from "react-calendly";
import MotionDivWrapper from "./motionDivWrapper";

const variant: Variants = {
  animate: {
    x: [-5, 0, -5],
    transition: { ease: "easeIn", duration: 1, repeat: Infinity },
  },
};

function PopupWidgetBtn() {
  return (
    <MotionDivWrapper variants={variant}>
      <PopupButton
        url="https://calendly.com/connectwithnoorr/30min"
        rootElement={document.getElementById("calendly-btn")!}
        text="Book Free Consultation Now"
        className="calendly-btn"
      />
    </MotionDivWrapper>
  );
}

export default PopupWidgetBtn;
