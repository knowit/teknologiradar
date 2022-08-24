import { useEffect, useState, useMemo } from "react";
import {
  Animation,
  AnimationStates,
  createAnimation,
  createAnimationRunner,
} from "../../animation";
import { Item } from "../../model";

interface Props {
  itemsInRing: Item[];
  leaving: boolean;
  onLeave: () => void;
}

export const useAnimations = ({
  itemsInRing,
  leaving,
  onLeave,
}: Props) => {
  type AnimationConfig = {
    background: Animation;
    navHeader: Animation;
    text: Animation;
    items: Animation[];
    footer: Animation;
  }

  type AnimationNames = keyof AnimationConfig;

  const animationsIn: AnimationConfig = useMemo(
    () => ({
      background: createAnimation(
        {
          transform: "translateX(calc((100vw - 1200px) / 2 + 800px))",
          transition: "transform 45ms cubic-bezier(0.24, 1.12, 0.71, 0.98)",
        },
        {
          transition: "transform 45ms cubic-bezier(0.24, 1.12, 0.71, 0.98)",
          transform: "translateX(0)",
        },
        0
      ),
      navHeader: createAnimation(
        {
          transform: "translateX(-40px)",
          opacity: "0",
        },
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateX(0px)",
          opacity: "1",
        },
        30
      ),
      text: createAnimation(
        {
          transform: "translateY(-20px)",
          opacity: "0",
        },
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateY(0px)",
          opacity: "1",
        },
        60
      ),
      items: itemsInRing.map((item, i) =>
        createAnimation(
          {
            transform: "translateX(-40px)",
            opacity: "0",
          },
          {
            transition: "opacity 15ms ease-out, transform 30ms ease-out",
            transform: "translateX(0px)",
            opacity: "1",
          },
          40 + 10 * i
        )
      ),
      footer: createAnimation(
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateX(-40px)",
          opacity: "0",
        },
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateX(0px)",
          opacity: "1",
        },
        60 + itemsInRing.length * 20
      ),
    }),
    [itemsInRing]
  );

  const animationsOut: AnimationConfig = useMemo(
    () => ({
      background: createAnimation(
        animationsIn.background.stateB,
        animationsIn.background.stateA,
        50 + itemsInRing.length * 10
      ),
      navHeader: createAnimation(
        animationsIn.navHeader.stateB,
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateX(40px)",
          opacity: "0",
        },
        0
      ),
      text: createAnimation(
        animationsIn.text.stateB,
        {
          transform: "translateY(20px)",
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          opacity: "0",
        },
        0
      ),
      items: itemsInRing.map((item, i) =>
        createAnimation(
          animationsIn.items[i].stateB,
          {
            transition: "opacity 15ms ease-out, transform 30ms ease-out",
            transform: "translateX(40px)",
            opacity: "0",
          },
          10 + 50 * i
        )
      ),
      footer: createAnimation(
        animationsIn.text.stateB,
        {
          transition: "opacity 15ms ease-out, transform 30ms ease-out",
          transform: "translateX(40px)",
          opacity: "0",
        },
        50 + itemsInRing.length * 10
      ),
    }),
    [itemsInRing, animationsIn]
  );

  const [animations, setAnimations] = useState<AnimationStates>(() => {
    return leaving ? createAnimationRunner(animationsIn).getState() : {};
  });

  const [stateLeaving, setStateLeaving] = useState(leaving);

  useEffect(() => {
    if (!stateLeaving && leaving) {
      let animationRunner = createAnimationRunner(animationsOut, () =>
        setAnimations(animationRunner.getState)
      );
      animationRunner.run();
      animationRunner.awaitAnimationComplete(onLeave);
      setStateLeaving(true);
    }
    if (stateLeaving && !leaving) {
      let animationRunner = createAnimationRunner(animationsIn, () =>
        setAnimations(animationRunner.getState)
      );
      animationRunner.run();
      setStateLeaving(false);
    }
  }, [stateLeaving, leaving, animationsIn, animationsOut, onLeave]);

  const getAnimationStates = (name: AnimationNames) => animations[name];

  const getAnimationState = (name: AnimationNames) => {
    const animations = getAnimationStates(name);
    if (animations === undefined || animations.length === 0) {
      return undefined;
    }
    return animations[0];
  };

  return {
    getAnimationStates,
    getAnimationState,
  };
};
