import { StyleSheet, Text } from "react-native";

interface Props {
  convertedTemperature: string;
  convertedUnit: string;
}

const Output = ({ convertedTemperature, convertedUnit }: Props) => {
  return (
    <Text
      style={styles.text}
    >{`${convertedTemperature} ${convertedUnit}`}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Output;
