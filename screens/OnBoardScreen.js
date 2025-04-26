import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OnBoard from './onBoard';
import OnBoard2 from './onBoard2';
import OnBoard3 from './onBoard3';
import OnBoard4 from './onBoard4';
import OnBoard5 from './onBoard5';

const { width } = Dimensions.get('window');

export default function OnBoardScreen() {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [<OnBoard />, <OnBoard2 />, <OnBoard3 />, <OnBoard4 />, <OnBoard5 />];

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        renderItem={({ item }) => <View style={{ width }}>{item}</View>}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Dots Indicator */}
      <View style={styles.pagination}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFF4E3',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#60C26C',
  },
  dotInactive: {
    backgroundColor: '#E5DCEB',
  },
});
