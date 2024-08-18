import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import Profile from '../pages/Dashboard/Common/Profile'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import AdminRoute from './AdminRoute'
import HostRoute from './HostRoute'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'

export const router = createBrowserRouter([

  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails /></PrivateRoute>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: 'true',
        element: <PrivateRoute><Statistics></Statistics></PrivateRoute>
      },
      {
        path: 'add-room',
        element: <privateRoute><HostRoute><AddRoom></AddRoom></HostRoute></privateRoute>
      },
      {
        path: 'my-listings',
        element: <privateRoute><HostRoute><MyListings></MyListings></HostRoute></privateRoute>
      },
      
      {
        path: 'manage-users',
        element: <privateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></privateRoute>
      },
      {
        path: 'my-bookings',
        element: <privateRoute><MyBookings></MyBookings></privateRoute>
      },
      {
        path: 'manage-bookings',
        element: <privateRoute><HostRoute><ManageBookings></ManageBookings></HostRoute></privateRoute>
      },
      {
        path: 'profile',
        element: <privateRoute><Profile></Profile></privateRoute>
      }
    ]
  }
])
