import { useContext } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Result from './components/Result/Result';
import './index.scss';
import { Context } from './components/Context/context';

const App = () => {
  const context = useContext(Context);

  return (
    <>
      {context.timer === 0 || context.test > 10 ? (
        <Result score={context.score} />
      ) : (
        <>
          <Header timer={context.timer} test={context.test} />
          <Main />
        </>
      )}
    </>
  );
};

export default App;
