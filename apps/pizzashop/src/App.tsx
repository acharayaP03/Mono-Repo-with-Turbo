
interface PropTypes {
    name: string;
    ingredients: string;
    photoName: string;
    price: number;
    soldOut?: boolean;
    index: number;
}
import {pizzaData} from './assets/data'
import focaccia from './assets/pizzas/focaccia.jpg';
import funghi from './assets/pizzas/funghi.jpg';
import margherita from './assets/pizzas/margherita.jpg';
import prosciutto from './assets/pizzas/prosciutto.jpg';
import salamino from './assets/pizzas/salamino.jpg';
import spinaci from './assets/pizzas/spinaci.jpg';


const images = [ focaccia, funghi, margherita, prosciutto, salamino, spinaci]


const imageUrl = (path: string) => `./assets/${path}`

export default function App(){
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


const Header = () => {
    return ( 
        <header className="header">
            <h1>Amazing Mama's Italian Pizzas</h1>
        </header>
    )
}

const Menu = () => {
    return(
        <main className="menu">
            <h2>Mama's Menu</h2>
            {
                pizzaData.length > 0 ?
                <ul className='pizzas'>
                    { pizzaData.map((pizza, index) => ( <Pizza {...pizza} index={index} key={pizza.name}/>)) }
                </ul>
                : <p>Sorry, we are sold out!</p>
            }
            <ul className='pizzas'>
                { pizzaData.map((pizza, index) => ( <Pizza {...pizza} index={index} key={pizza.name}/>))}
            </ul>
        </main>
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const isClosed = hour < 12 || hour > 23;
    const isOpen = !isClosed;
    console.log(isOpen);
    const closeHour = 22

    return(
        <footer className="footer">
            { 
            isOpen ? 
                <OrderNow closeHour={closeHour} />
                : <p>Sorry we are closed for today and will open from 12 till 10 pm.</p>
            }
            
        </footer>
    )}


const OrderNow = (props: any) => {  
    return(
        <div className="order">
            <p>We are open until { props.closeHour }:00. Come visit us or order online.</p>
            <button className="btn">Order Now</button>
        </div>
    )
}

const Pizza = (props: PropTypes) => {
    console.log(imageUrl(props.photoName));
    
    return (
        <li className="pizza">
            <img src={images[props.index]} alt={props.name} />
            <div>
                <h3>{ props.name }</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </li>
    )
}