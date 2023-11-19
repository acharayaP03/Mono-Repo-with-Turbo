
export default function App(){
    return (
        <div className="container">
            <Header />
            <Menu />
            <div>
                <Pizza 
                    name="Focaccia" 
                    ingredients="Bread with italian olive oil and rosemary" 
                    photoName="focaccia" 
                    price="10"
                />
            </div>
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
        </main>
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const isClosed = hour < 12 || hour > 23;
    const isOpen = !isClosed;
    console.log(isOpen);
    

    return(
        <footer className="footer">
            <p>{ new Date().toLocaleTimeString()} We are open</p>
        </footer>
    )}

interface PropTypes {
    name: string;
    ingredients: string;
    photoName: string;
    price: string;

}


const imageUrl = (imageName: string) => {
    return new URL(`../pizzas/${imageName}.jpg`, import.meta.url).href;
}
const Pizza = (props: PropTypes) => {


     console.log(imageUrl(props.photoName));
     
    return (
        <div className="pizza">
            <img src={imageUrl(props.photoName)} alt="Focaccia" />
            <h3>{ props.name }</h3>
            <p>{props.ingredients}</p>
            <p>{props.price}</p>
        </div>
    )
}