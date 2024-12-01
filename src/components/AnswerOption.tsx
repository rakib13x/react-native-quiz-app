import { Pressable, StyleSheet, Text } from "react-native";

type AnswerOption = {
  option: string;
  isSelected?: boolean;
};

export default function AnswerOption({ option, isSelected }: AnswerOption) {
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
