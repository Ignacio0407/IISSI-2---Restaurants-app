import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import TextSemiBold from './TextSemibold';
import * as GlobalStyles from '../styles/GlobalStyles';

const ImageCard = ({
  imageUri,
  title,
  onPress,
  children,
  cardStyle,
  imageContainerStyle,
  imageStyle,
  bodyStyle,
  titleStyle
}) => {
  const CardBody = () => (
    <View style={[styles.card, cardStyle]}>
      <View style={imageContainerStyle}>
        <Image style={[styles.image, imageStyle]} source={imageUri} />
      </View>
      <View style={[styles.cardBody, bodyStyle]}>
        <TextSemiBold style={[styles.cardTitle, titleStyle]}>{title}</TextSemiBold>
        {children}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? GlobalStyles.brandPrimaryTap
              : GlobalStyles.brandBackground
          },
          styles.wrapper
        ]}
      >
        <CardBody />
      </Pressable>
    );
  }

  return <CardBody />;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: '1%',
    height: 127,
    padding: 2,
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15
  },
  image: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: 123,
    width: 123
  },
  cardBody: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 4,
    position: 'relative',
    height: 123
  },
  cardTitle: {
    fontSize: 15
  },
  wrapper: {
    // Add any additional wrapper styles here
  }
});

export default ImageCard;