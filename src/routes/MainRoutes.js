import { Navigate } from 'react-router-dom';

// render - dashboard
import MainLayout from 'layout/MainLayout';
import MuiDashboard from 'pages/dashboard-mui';
import AntDashboard from 'pages/dashboard-ant';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to="dashboard/mui" />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'mui',
          element: <MuiDashboard />
        },
        {
          path: 'ant',
          element: <AntDashboard />
        }
      ]
    }
  ]
};

export default MainRoutes;
