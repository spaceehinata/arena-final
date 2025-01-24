import { animated, useTransition } from "@react-spring/web";

function Mount({ children, isVisible }) {
  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: isVisible,
    delay: 100,
  });
  return transitions(
    (styles, item) =>
      item && <animated.div style={styles}>{children}</animated.div>
  );
}

export default Mount;
