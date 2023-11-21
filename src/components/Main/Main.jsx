import { useContext, useEffect, useState } from 'react';
import './Main.scss';
import { Context } from '../Context/context';

const Main = () => {
  const context = useContext(Context);
  const [data, setData] = useState();
  const [activeAnswer, setActiveAnswer] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const getData = async () => {
    const response = await fetch('https://random-colors-lovat.vercel.app/');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getActiveAnswer = (event) => {
    if (event.target.type === 'button') {
      setActiveAnswer(event.target.dataset.color);
    }
  };

  const activeColor = data && data[context.test - 1];

  const onButtonClick = () => {
    context.nextTestHandler();
    if (activeAnswer === activeColor.color) context.scoreHandler();
  };

  return (
    <main className="main">
      <h2 className="main__title">Color</h2>
      <div
        className="main-color__container"
        style={{ backgroundColor: `${activeColor?.color}` }}
      ></div>
      <form onSubmit={submitHandler} className="main__form">
        <ul className="main__list">
          <li className="main__item">
            <button
              type="button"
              onClick={getActiveAnswer}
              data-color={activeColor?.answers[0]}
            >
              <span className="main__variant">A</span>
              <p className="main__color">{activeColor?.answers[0]}</p>
            </button>
          </li>
          <li className="main__item">
            <button
              type="button"
              onClick={getActiveAnswer}
              data-color={activeColor?.answers[1]}
            >
              <span className="main__variant">B</span>
              <p className="main__color">{activeColor?.answers[1]}</p>
            </button>
          </li>
          <li className="main__item">
            <button
              type="button"
              onClick={getActiveAnswer}
              data-color={activeColor?.answers[2]}
            >
              <span className="main__variant">C</span>
              <p className="main__color">{activeColor?.answers[2]}</p>
            </button>
          </li>
        </ul>
        <button onClick={onButtonClick} type="submit" className="main__button">
          Continue
        </button>
      </form>
    </main>
  );
};
export default Main;
