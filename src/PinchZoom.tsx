import { animated, useSpring } from "@react-spring/web";
import { createUseGesture, dragAction, pinchAction } from "@use-gesture/react";
import React, { ReactNode, useEffect, useRef } from "react";

const useGesture = createUseGesture([dragAction, pinchAction]);

export default function PinchZoom({ children }: { children: ReactNode }) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handler = (e: any) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
        if (pinching) return cancel();

        api.start({ x, y });
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, rotateZ: 0, x, y });
        return memo;
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { rubberband: true },
    }
  );

  return (
    <animated.div ref={ref} style={{ ...style, touchAction: "none" }}>
      {children}
    </animated.div>
  );
}
