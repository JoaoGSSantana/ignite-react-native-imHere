import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 4,
  },
  name: {
    flex: 1,
    color: "#FDFCFE",
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 32,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});
