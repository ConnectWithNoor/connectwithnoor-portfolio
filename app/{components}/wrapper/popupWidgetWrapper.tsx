"use client";

import { Variants, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";
import MotionDivWrapper from "./motionDivWrapper";

const variant: Variants = {};

function PopupWidgetWrapper() {
  const [show, setShow] = useState(0);
  const [isMount, setIsMount] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  scrollYProgress.on("change", (value) => {
    value > 0.071 ? setShow(value * 7) : setShow(0);
  });

  return (
    <MotionDivWrapper variants={variant} style={{ opacity: show }}>
      <PopupWidget
        url="https://calendly.com/connectwithnoorr/30min"
        rootElement={document.getElementById("calendly-widget")!}
        text="Book Free Consultation Now"
        textColor="#ffffff"
        color="#313bac"
      />
    </MotionDivWrapper>
  );
}

export default PopupWidgetWrapper;
