import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {View, StyleSheet, Dimensions} from 'react-native';

const StarryBackground: React.FC = () => {
  const {width, height} = Dimensions.get('window');

  // Puedes ajustar el número y el tamaño de las estrellas
  const stars = Array.from({length: 100}).map((_, idx) => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 2 + 1;
    return {x, y, r};
  });

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Svg width={width} height={height}>
        {stars.map((star, idx) => (
          <Circle
            key={idx.toString()} // Convierte el índice a cadena para la clave
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="#fff"
            opacity={0.7}
          />
        ))}
      </Svg>
    </View>
  );
};

export default StarryBackground;
