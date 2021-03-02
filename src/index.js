import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({price, handleClick}) => <button onClick={handleClick}>
  Add</button>;
const Button1 = ({price, handleClick}) => <button onClick={handleClick}>
  Delete </button>

const Phorder = ({text, price, number}) => {
  
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
      {/* <td>{price}Euro</td> */}
      <td>{number * price}Euro</td>
    </tr>
    

  );
};

const Summary = ({positions, rolls, pho, curry}) => {
  const total = rolls * positions[0].price + pho * positions[1].price + curry * positions[2].price
  const totalQuanti = rolls + pho + curry
return (
    <div>
      <p>Your phorder:</p>
      <table>
        <thead>
          <tr>
            <th>Dish</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

        </thead>
          <tbody>
            <Phorder text='Spring Rolls' number={rolls} price={positions[0].price} />
            <Phorder text='Pho' number={pho} price={positions[1].price} />
            <Phorder text='Curry' number={curry} price={positions[2].price} />
            <tr>
              <td>Total</td>
              <td>{totalQuanti}</td>
              <td>
              {total}Euro
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

const Header = ({menu}) => {
  return (
    <div>
      <h1>{menu}</h1>
    </div>
  );
};

const Position = ({positions}) => {
  return (
    <li>
     {positions.dish}
    </li>
      
  ); 
};

const List = ({positions, rolls, pho, curry, setRolls, setPho, setCurry, total}) => {
  // const [rolls, setRolls] = useState(0)
  // const [pho, setPho] = useState(0)
  // const [curry, setCurry] = useState(0)
  return (
    <ul>
        <Position positions={positions[0]}/><Button handleClick={() => setRolls(rolls + 1)}/>
        <Position positions={positions[1]}/><Button handleClick={() => setPho(pho + 1)}/>
        <Position positions={positions[2]}/><Button handleClick={() => setCurry(curry + 1)}/>
    </ul>
    
  );
}
  

const App = () => {
  const [rolls, setRolls] = useState(0)
  const [pho, setPho] = useState(0)
  const [curry, setCurry] = useState(0)
const menu = {
    name: 'Place your phorder',
    positions: [
      {
      dish: 'Spring rolls',
      price: 2.5  
      },
      {
      dish: 'Pho',
      price: 6.5
      },
      {
      dish: 'Curry',
      price: 8.5
      }
    ]
  };
  return ( [
    <div>
      <Header menu={menu.name}/>
      </div>,
    <div>
      <List positions={menu.positions} rolls={rolls} pho={pho} curry={curry} setRolls={setRolls} setPho={setPho} setCurry={setCurry}/>
      
    </div>,
    <div>
      <Summary positions={menu.positions} rolls={rolls} pho={pho} curry={curry}/>
    </div>]
  );
};
ReactDOM.render(<App />, document.getElementById('root')); 