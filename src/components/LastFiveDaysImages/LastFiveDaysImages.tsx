import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {PostImage as PostImageType} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages = ({
  postImageProps,
}: {
  postImageProps: PostImageType[];
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos 5 dias</Text>
      <ScrollView style={styles.contect}>
        {postImageProps?.map(item => (
          <PostImage key={`post-image-${item.title}`} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 18,
  },
  contect: {
    paddingHorizontal: 10,
  },
});

export default LastFiveDaysImages;
