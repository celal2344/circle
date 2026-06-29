import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const nextMilestones = [
  "E-posta OTP",
  "Rol onboarding",
  "Pre-Flow",
  "Etkinlik başvuruları"
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <Text style={styles.eyebrow}>Circle</Text>
        <Text style={styles.title}>İstanbul etkinlik pilotu</Text>
        <Text style={styles.body}>
          Mobil uygulama İşletme, Organizer, Sanatçı ve Saha Çalışanı akışları
          için geliştirilecek.
        </Text>
        <View style={styles.list}>
          {nextMilestones.map((milestone) => (
            <Text key={milestone} style={styles.item}>
              {milestone}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    color: "#525252",
    fontSize: 16,
    lineHeight: 24
  },
  content: {
    gap: 16,
    padding: 24
  },
  eyebrow: {
    color: "#737373",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  item: {
    borderColor: "#d4d4d4",
    borderRadius: 8,
    borderWidth: 1,
    color: "#262626",
    padding: 12
  },
  list: {
    gap: 10,
    marginTop: 8
  },
  screen: {
    backgroundColor: "#f7f7f5",
    flex: 1
  },
  title: {
    color: "#171717",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38
  }
});
