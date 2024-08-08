import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {PostImage as PostImageType} from '../../types';

const PostImage = (props: PostImageType) => {
  return (
    <View style={stytes.container}>
      <Text style={stytes.title}>{props.title}</Text>
      <Text style={stytes.date}>{props.date}</Text>
      <View style={stytes.buttonContainer}>
        <Button title="Ver"></Button>
      </View>
    </View>
  );
};

const stytes = StyleSheet.create({
  container: {
    backgroundColor: '#235',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default PostImage;
