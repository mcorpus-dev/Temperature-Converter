import { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import Output from "./src/components/Output";
import Input from "./src/components/Input";
import Button from "./src/components/Button";

import {
  getConvertedTemperature,
  getConvertedUnit,
  isCold,
} from "./src/utils/temperature";

export default function App() {
  const [temperature, setTemperature] = useState("0");
  const [unit, setUnit] = useState("°C");

  const convertedTemperature = getConvertedTemperature(temperature, unit);
  const convertedUnit = getConvertedUnit(unit);
  const background = isCold(temperature, unit)
    ? require("./assets/images/cold.png")
    : require("./assets/images/hot.png");

  const handleChangeUnit = () => setUnit(convertedUnit);

  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <Output
          convertedTemperature={convertedTemperature}
          convertedUnit={convertedUnit}
        />

        <Input
          temperature={temperature}
          unit={unit}
          onChangeText={setTemperature}
        />

        <Button text={`Convert to ${unit}`} onPress={handleChangeUnit} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    height: "60%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
