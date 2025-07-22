
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import { UserProvider } from './UserContext';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (<>
  
   <div className="App">
      <UserProvider>
        <ScrollToTop/>
           <Header/>
           <Outlet />
           <Footer/>
       </UserProvider>
 <WhatsAppCTA
        phoneNumber="1234567890" // Replace with your phone number (with country code)
        message="Hello, I'm interested in your services"
        downloadLink="/brochure.pdf"
        position="right"
        downloadText="Get Brochure"
        whatsappText="Message Us"
      />

    </div>
  
  </>);
}

export default App



