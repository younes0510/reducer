import { useReducer } from "react";

import { reducer } from "./store/Reducer"; // Or `import Reducer from "./store/Reducer";` for a default export
import { Context } from "./store/Context";
import UserType from "./components/UserType";
import Theme from "./components/Theme";
import Prodectlist from "./components/Prodectlist";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  return (
    <div className="bg-white dark:bg-black">
      <Context.Provider value={{ state, dispatch }}>
        <UserType />
        <Theme />
        <Prodectlist />
      </Context.Provider>
    </div>
  );
};

export default App;
