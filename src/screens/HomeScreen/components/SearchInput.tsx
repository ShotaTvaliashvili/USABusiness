import React from "react";
import {
    Keyboard,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


interface ISearchInputProps  {
    value: string,
    setValue: (text: string) => void;
};


const SearchInput: React.FC<ISearchInputProps> = ({ value, setValue }) => {

  const handleSubmit = () => {
    Keyboard.dismiss();
    setValue(value.trim());
  };

  const clearInput = () => {
    setValue('');
  };

  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#999" style={styles.icon} />
            <TextInput
                placeholder={'Search article...'}
                value={value}
                onChangeText={setValue}
                onSubmitEditing={handleSubmit}
                returnKeyType="search"
                style={styles.input}
            />
            {value.length > 0 && (
                <TouchableOpacity onPress={clearInput}>
                    <Ionicons name="close-circle" size={20} color="#999" />
                </TouchableOpacity>
            )}
        </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
    wrapper: {
      paddingHorizontal: 16,
      paddingTop: 12,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#e0e0e0",
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: "#ccc",
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 2,
    },
    icon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: "#222",
    },
  });
  