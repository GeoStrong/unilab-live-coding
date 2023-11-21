import { createContext, useState } from 'react';

export const Context = createContext({
  timer: 200,
  test: 1,
  score: 0,
  nextTestHandler: () => {},
});

const ContextProvider = ({ children }) => {
  const [timer, setTimer] = useState(200);
  const [test, setTest] = useState(1);
  const [score, setScore] = useState(0);

  const nextTestHandler = () => {
    setTest((prevTest) => prevTest + 1);
  };

  const scoreHandler = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <Context.Provider
      value={{ timer, test, score, nextTestHandler, scoreHandler }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
