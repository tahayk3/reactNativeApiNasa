import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {PostImage as PostImageType, RootStackParams} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type PostImageNavigationsProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const PostImage = (props: PostImageType) => {
  const {navigate} = useNavigation<PostImageNavigationsProps>();
  const handleViewPress = () => {
    navigate('Detail', {
      title: props.title,
      date: props.date,
      url: props.url,
      explanation: props.explanation,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress} style={styles.button}>
          <Text style={styles.buttonText}>Ver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostImage;
