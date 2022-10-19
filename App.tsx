import 'react-native-gesture-handler';
import { Routes } from "./src/routes";
import { LogBox } from "react-native";

export default function App() {
  return (
    <Routes/>
  );
};

LogBox.ignoreLogs(["EventEmitter.removeListener"]);