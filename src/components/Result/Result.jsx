import './Result.scss';
import Header from '../Header/Header';
import { useContext } from 'react';
import { Context } from '../Context/context';

const Result = () => {
  const context = useContext(Context);
  return (
    <>
      <Header timer={0} test={11} />
      <main className="result-main">
        <h2 className="result-main__element">
          your score is : {context.score}
        </h2>
        <p className="result-main__element">Time : 100 second</p>
        <button className="button">Try again</button>
      </main>
    </>
  );
};
export default Result;
