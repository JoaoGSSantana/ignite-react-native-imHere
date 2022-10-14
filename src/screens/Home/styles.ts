import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    color: "#FDFCFE",
    borderRadius: 4,
    padding: 16,
    fontSize: 16,
    marginRight: 8,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 32,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: 24,
    marginBottom: 24,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textEmptyList: {
    color: "#FDFCFE",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
});
