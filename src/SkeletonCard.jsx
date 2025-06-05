import React, { useEffect, useRef,memo } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const SkeletonCard = () => {
  const circleScale = useRef(new Animated.Value(1)).current;
  const boldLineScale = useRef(new Animated.Value(1)).current;
  const smallLineScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.sequence([
          Animated.timing(circleScale, {
            toValue: 1.1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(circleScale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(boldLineScale, {
            toValue: 1.1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(boldLineScale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(smallLineScale, {
            toValue: 1.1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(smallLineScale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => animate());
    };

    animate();
  }, [circleScale, boldLineScale, smallLineScale]);

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.leftCircle, { transform: [{ scale: circleScale }] }]} />
      <View style={styles.rightContent}>
        <Animated.View style={[styles.boldLine, { transform: [{ scale: boldLineScale }] }]} />
        <Animated.View style={[styles.smallLine, { transform: [{ scale: smallLineScale }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  leftCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d0d0d0',
  },
  rightContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  boldLine: {
    height: 16,
    width: '80%',
    backgroundColor: '#d0d0d0',
    borderRadius: 6,
    marginBottom: 8,
  },
  smallLine: {
    height: 12,
    width: '60%',
    backgroundColor: '#d0d0d0',
    borderRadius: 6,
  },
});

export default memo(SkeletonCard);
// export default SkeletonCard;