
import './App.css';
import Counter from './component/counter'
import Header from './component/Header'
import Card from './component/Card'
import Modal from './component/Modal'
function App() {
  return (
    <div className="App">
<Header />
<Counter />
      <div className="container">
      <Card
          price={123}
          oldPrice={1234}
          despreition={'dowjneo o jjbweoj oj oj oe goweog ew gewk gwh '}
          title={'Loaction'}
          img={'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg'}
        />
        <Card
          price={112312323}
          oldPrice={1234}
          despreition={'dfjwfkjnw  jjjjjjjjjg ew gewk gwh '}
          title={'Bekoblot'}
          img={'https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg'}
        />

<Modal
          title="Modal Title"
          img="https://i.pinimg.com/736x/ec/11/63/ec116392ec10ca3e844112700aa6c563.jpg"
        />
      </div>
    </div>
  );



}

export default App;
