import { StyleSheet, View, TextInput, Text } from "react-native";

interface Props {
  temperature: string;
  unit: string;
  onChangeText: (text: string) => void;
}

const Input = ({ temperature, unit, onChangeText }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={temperature}
        onChangeText={onChangeText}
        placeholder="Enter temperature"
        keyboardType="numeric"
        maxLength={4}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "white",
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  unit: {
    position: "absolute",
    right: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Input;
