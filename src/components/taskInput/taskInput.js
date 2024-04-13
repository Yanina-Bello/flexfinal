import { StyleSheet, TextInput, Button, View } from 'react-native'
import React from 'react'

const TaskInput = (textItem, addItem, handleChangeText) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                value={textItem}
                placeholder={"Clean the house..."}
            />
            <Button title="ADD" color="#5555ff" onPress={{ addItem }} />

        </View>
    )
}

export default TaskInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: 250,
        fontSize: 16
    },
})