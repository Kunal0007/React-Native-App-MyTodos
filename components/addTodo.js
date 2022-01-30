import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function AddTodo({ addtodo }) {
    const [text, setText] = useState('');

    const changehandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New todo ..."
                onChangeText={changehandler}
                value={text}
            />
            <Button onPress={() => {
                addtodo(text);
                setText('');
            }}
                title='Add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})


export default AddTodo
