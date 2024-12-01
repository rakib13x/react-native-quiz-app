import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import LottieView from "lottie-react-native";
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import QuestionCard from "../components/QuestionCard";
import questions from "../question";

const question = questions[0];

export default function QuizScreen() {
  function onNext(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>15 sec</Text>
          </View>
        ) : (
          <>
            <LottieView
              style={StyleSheet.absoluteFill}
              autoPlay
              loop={false}
              source={require("../../assets/party.json")}
            />
            <Card title="Well done">
              <Text>Correct answers</Text>
              <Text>Best score: </Text>
            </Card>
          </>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          onPress={onNext}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});
