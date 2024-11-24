import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "60%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Button;
