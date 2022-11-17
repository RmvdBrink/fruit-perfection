import React from 'react';
import './App.css';
import citroenen from './assets/citroenen.jpeg';
import ijsblokjes from './assets/ijsblokjes.jpg'
import limoen from './assets/limoenen.png'
import { ReactComponent as ShoppingCart } from "./assets/winkelmandje.svg";
import Product from "./components/Product";

function App() {


    function logClick() {
    //     console.log("you clicked");


    }

    // let citroen;
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
        <header>
            <h1>Fruit perfection</h1>
            <button type="button" onClick={() => console.log("sukkel")}>
                shop nu
            </button>
        </header>

    <main>
        <Product
        image={citroenen}
        titel="Citroen"
        description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
        />

        <Product
            image={limoen}
            titel="Limoen"
            description="Limoen is familie van de citroen en de sinaasappel en behoort tot de
            citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en
            groen."
        />

        <Product
            image={ijsblokjes}
            titel="ijsblokjes"
            description= "Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein
                blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
            />
    </main>
        </>
  );
}

export default App;
