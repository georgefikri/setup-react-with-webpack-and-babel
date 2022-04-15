import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./styles/style.scss";
import { persistStore } from "redux-persist";
import { RootContainer } from "./containers/RootContainer";

const App = () => {
  let persistor = persistStore(store);

  return (
    <div>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </div>
  );
};

export default App;
