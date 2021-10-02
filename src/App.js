import blue from './icons/blue.png';
import green from './icons/green.png';
import orange from './icons/orange.png';
import purple from './icons/porple.png';
import worker1 from './images/worker1.jpg';

import {
  useRef, 
  useState 
} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


function HeroHeader(){
  return(
      <header className="bg-heroBck bg-center bg-cover w-full h-screen grid place-items-center">
        <div>
          <p className="xs:text-xl md:text-2xl">Hello Word!</p>
          <h1 className="xs:text-4xl md:text-6xl text-blue-700">Lorem ipsum <span className="text-blue-900">dolor sit <br/> amet, consectetur adipiscing elit.</span></h1>
          <p className="xs:text-xl md:text-2xl">Pellentesque a neque eget velit facilisis rhoncus.<br/> Ut suscipit, turpis in volutpat fermentum.  </p>
          <Link to="/contact"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full my-4">Contact us!</button></Link>
        </div>
      </header>
  );
}

function Products(){
  return(
    <div className="grid place-items-center min-h-screen py-10">
      
      <h1 className="text-4xl font-extrabold pt-5 mb-10"><span className="bg-blue-200">Our Products</span></h1>

      <div className="grid gap-10 xs:grid-cols-1 md:grid-cols-3  md:max-w-4xl">
        
        <div className="shadow-xl bg-gray-50 grid place-items-center px-10 pb-6 xs:h-auto xs:square">
         <h1 className="text-2xl py-2">Product Variant</h1>
         <img src={purple}/>
        </div> 

        <div className="grid md:col-span-2 self-center text-lg">Pellentesque a neque eget velit facilisis rhoncus. Ut suscipit, turpis in volutpat fermentum, quam augue mollis massa, in aliquet justo nulla at libero. Aenean elit. Maecenas lacus dui, blandit eget mi quis, placerat bibendum lacus. Duis in leo in purus fringilla convallis non ut enim.</div>

        <div className="grid md:col-span-2 self-center text-lg">Suscipit, turpis in volutpat fermentum, quam augue mollis massa, in aliquet justo nulla at libero. Aenean elit elit, commodo quis consectetur ut, sagittis ut tortor. Maecenas placerat bibendum lacus. Duis in leo in purus fringilla convallis non ut enim.</div>
        
        <div className="shadow-xl bg-gray-50 grid place-items-center px-10 pb-6 xs:h-auto xs:square">
         <h1 className="text-2xl py-2">Product Variant</h1>
         <img src={green}/>
        </div> 

        <div className="shadow-xl bg-gray-50 grid place-items-center px-10 pb-6 xs:h-auto xs:square">
         <h1 className="text-2xl py-2">Product Variant</h1>
         <img src={orange}/>
        </div> 

        <div className="grid md:col-span-2 self-center text-lg">Turpis in volutpat fermentum, quam augue mollis massa, in aliquet justo nulla at libero. Aenean elit elit, commodo quis consectetur ut, sagittis ut tortor. Maecenas lacus dui, blandit eget mi quis, placerat bibendum lacus. non ut enim.</div>

      </div>
    </div>
  );
}

function Workers(){
  return(
    <div className="grid place-items-center min-h-screen py-5 bg-gray-100">
      <div className="max-w-4xl grid gap-4 xs:grid-cols-2 md:grid-cols-4">

        <h1 className="xs:col-span-2 md:col-span-4 xs:w-1/2 text-4xl font-extrabold mt-10"><span className="bg-blue-200">Our Powerfull Team</span></h1>
        <p className="xs:self-center md:col-start-4 md:row-start-2 text-xl">Join our young and powerfull team and create great projects with us!</p>        
        
        <div className="bg-worker1 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker5 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker3 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker4 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker2 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker6 bg-center bg-cover h-10 xs:h-auto xs:square"></div>
        <div className="bg-worker7 bg-center bg-cover h-10 xs:h-auto xs:square"></div>

        <p className="xs:self-center  xs:h-auto xs:square text-xl">If you have any questions, write to us in a private message!</p>       
        
      </div>
    </div>
  );
}

function Navigation(){
//work in progress.......
  const menu = useRef(null);
  const showMenu =()=>{
    const mMenu = menu.current;
    mMenu.className="block w-full h-auto menu";
  };

  return(
    <Router>
      <nav className="flex items-center p-2 bg-blue-200 sticky top-0 z-50 font-sans">
        <div className="bg-icon h-10 bg-center bg-cover square"></div>
        <Link to="/"><span className="text-2xl font-extrabold mr-6">Nameexample.com</span></Link>

        <div ref={menu} className="menu hidden md:flex">
          <Link to="/contact"><div className="mr-6"><a className="text-xl w-full h-auto font-bold text-gray-700">Kontakt</a></div></Link>
        </div>

        <button onClick={showMenu} className="mobile-button">
          <svg className="h-3 w-3 block md:hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>   
        </button>
      </nav>

      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

function Contact(){

  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[message,setMessage]=useState("");
  //console.log(message,name, email) ;

  return(
    <div className=" grid place-items-center bg-gray-100 py-10 min-h-screen">

      <h1 className="text-center text-2xl">Jeśli chcesz uzyskć dodatkowe informacje<br/>Skontaktuj się z nami</h1>
      <form className="grid grid-cols-1 place-items-center">

        <div  className="p-5 px-10 bg-white shadow ">
          <h1 className="text-2xl">Skontaktuj się z nami</h1>

          <div className="py-2">
            <label className="">
              <p>Imie:</p>
              <input  type="text" name="name"placeholder="imię" className="border-2 border-gray-500 shadow p-2" onChange  ={e => setName({name: e.target.value})}/><br/>
            </label>
          </div>

          <div className="py-2">
            <label className="">
              <p>email:</p>
              <input type="email"name="email" placeholder="email" className="border-2 border-gray-500 shadow p-2" onChange  ={e => setEmail({email: e.target.value})}/>
            </label>
          </div>

          <div className="py-2">
            <label className="">
              <p>Treść</p>
              <textarea id="textArea" name="content" rows="4" cols="25" placeholder="treść" className="border-2 border-gray-500 shadow " onChange  ={e =>setMessage({message: e.target.value })}/><br/>
            </label>
          </div>
          </div>
      </form>
    </div>
  );

}

function Footer(){
  return(
    <div className="bg-gray-50 grid text-xl  place-items-center min-h-2/5 p-4">
      <div className="max-w-4xl grid grid-gap-2  place-items-center  xs:grid-cols-1 md:grid-cols-3">
        <p>Telefon: 224 345 234</p>
        <p>Email: email@email.com</p>
        <p>Adres: Kowalksa 17, Warszawa</p>
      </div>
    </div>
  );
}

function App(){
  return(
     <div>
      <HeroHeader/>
      <Products/>
      <Workers/>
      <Footer/>
    </div>
  );
}

export default Navigation;