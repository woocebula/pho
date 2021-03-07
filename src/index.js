import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import dude from './dude.jpg';
import damn from './damn.jpg';


const Button = ({price, handleClick}) => <button onClick={handleClick}>
  Add</button>;
const Button1 = ({price, handleClick}) => <button onClick={handleClick}>
  Delete </button>;



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
     {positions.dish} {positions.price}
    </li>
      
  ); 
};

const List = ({positions, rolls, pho, curry, setRolls, setPho, setCurry, totalQuanti}) => {
  return (
    <ul>
        <Position positions={positions[0]}/><Button handleClick={() => setRolls(rolls + 1)}/>
        {rolls > 0 
          ? <Button1 handleClick={() => setRolls(rolls - 1)}/>
          : <span></span>

        }

        <Position positions={positions[1]}/><Button handleClick={() => setPho(pho + 1)}/>
        {pho > 0 && <Button1 handleClick={() => setPho(pho - 1)}/>}

        <Position positions={positions[2]}/><Button handleClick={() => setCurry(curry + 1)}/>
        {curry > 0 && <Button1 handleClick={() => setCurry(curry - 1)}/>}

    </ul>
  );
};

const Phorder = ({text, price, number}) => {
  
  return (
    <tr>
      <td>{text}</td>
      <td>{number}</td>
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
              <td>{total}Euro
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

const Meme = ({totalQuanti, Summary}) => {
  
  if (totalQuanti <= 3) {
  return(
    <div>
      <h1>Not Hungry?</h1>
      <img src={dude} alt ='dude' />
    </div>
    
    
  );
  } else {
  return (
    <div>
      <h1>DAMN</h1>
      <img 
      src = {damn}
      alt = 'damn' />
    </div>
  )
  }  
   

};
  

const App = () => {
  const [rolls, setRolls] = useState(0)
  const [pho, setPho] = useState(0)
  const [curry, setCurry] = useState(0)
  const totalQuanti = rolls + pho + curry
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
      <List positions={menu.positions} rolls={rolls} pho={pho} curry={curry} setRolls={setRolls} setPho={setPho} setCurry={setCurry} totalQuanti={totalQuanti}/>
      
    </div>,
    <div>
      <Summary positions={menu.positions} rolls={rolls} pho={pho} curry={curry}/>
    </div>,
    <div>
      <Meme totalQuanti={totalQuanti}/>
    </div> 
  ]
  );
};
ReactDOM.render(<App />, document.getElementById('root')); 