import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import quotesData from "./data/quotes.json";
import Header from './Components/Header';
import Footer from './Components/Footer';

const motivationalQuotes = quotesData.quotes.filter(
  (q) => q.category !== "religious"
);
const religiousQuotes = quotesData.quotes.filter(
  (q) => q.category === "religious"
);

export default function App() {
  function handleMotivationalRefresh() {}
  function handleReligiousRefresh() {}
  
  return (
    <View style={styles.container}>
      <Header/>
      <Footer
        onRefreshMotivational={handleMotivationalRefresh}
        onRefreshReligious={handleReligiousRefresh}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
