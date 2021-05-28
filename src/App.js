
import './App.css';
import data from './Data';
import Question from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map(data => {
            return <Question key={data.id} {...data} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
