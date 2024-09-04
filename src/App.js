import { Provider } from "react-redux";
import Body from "./Components/Body";
import { Head } from "./Components/Head";
import Store from "./utils/Store";
function App() {
  return (
    <Provider store={Store}>
      <div className="">
        {/* <h1 className="text-red-50 ">Piyush Varshney</h1> */}
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
