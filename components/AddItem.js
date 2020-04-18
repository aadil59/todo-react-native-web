import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const [isEnable, setEnable] = useState(false);
  const onChange = textValue => {
    setText(textValue);
    textValue.length > 0 ? setEnable(true) : setEnable(false);
  }

  return (
    <View style={styles.grid}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <Button onPress={() => { addItem(text); setText(''); setEnable(false)}}
          disabled={!isEnable}
          title="Add Item"
          color= '#444'
          fontSize='30'
        >
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#cdcdcd'
  },
  grid: {
    padding: 10,
    paddingBottom: 0
  },
  btn: {
    backgroundColor: '#333',
    padding: 9,
    margin: 5,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default AddItem;
