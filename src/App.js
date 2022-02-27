import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Booking from './components/Booking/Booking';
import BookingConfirm from './components/Booking/BookingConfirm';
import Return from './components/Return/Return';
import ReturnConfirm from './components/Return/ReturnConfirm';
import Services from './components/Services/Services';
import Context from './Context/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Services></Services>
        <Booking></Booking>
        <BookingConfirm></BookingConfirm>
        <Return></Return>
        <ReturnConfirm></ReturnConfirm>
      </Context>
    </div>
  );
}

export default App;
