import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface GestureProps {
  width: number;
  height: number;
}

export const PanGesture = ({ width, height }: GestureProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const { width: windowWidth } = Dimensions.get("window");
  const cardWidth = windowWidth * 0.8;
  const ratio = 228 / 362;
  const cardHeight = cardWidth * ratio;

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_event, context) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      context.offsetX = translateX.value;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      context.offsetY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = clamp(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        context.offsetX + event.translationX,
        0,
        width - cardWidth
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      translateY.value = clamp(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        context.offsetY + event.translationY,
        0,
        height - cardHeight
      );
    },
    onEnd: (_event, _context) => {
      translateX.value = withDecay({
        clamp: [0, width - cardWidth],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View {...{ style }}>
          <View
            style={{
              height: cardHeight,
              width: cardWidth,
              backgroundColor: "purple",
              borderRadius: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
            >
              John GK
            </Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
