import "./App.css";
import BodyContent from "./component/BodyContent";
import Navigation from "./component/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
	return (
		<Provider store={store}>
			<Navigation />

			<BodyContent />
		</Provider>
	);
}

export default App;
