import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LiveCard from './components/LiveCard';
import Events from './pages/Events';
import EventContact from './components/EventContact';
import Event from './pages/Event';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Ticket from './components/Ticket';
import GoogleAuth from './pages/GoogleAuth';
import EventDetails from './pages/EventDetails';
import Checkout from './pages/Checkout';
import MultiStepForm from './createEvent/MultiStepForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth/google/callback' element={<GoogleAuth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/ticket' element={<Ticket />} />

        {/* Protected routes */}
        <Route
          path='/event'
          element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route
          path='/create'
          element={
            <ProtectedRoute>
              <MultiStepForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/event-details/:id'
          element={
            <ProtectedRoute>
              <EventDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='/checkout'
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/events'
          element={
            <ProtectedRoute>
              <Event />
            </ProtectedRoute>
          }
        />
        <Route
          path='/contact'
          element={
            <ProtectedRoute>
              <EventContact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
