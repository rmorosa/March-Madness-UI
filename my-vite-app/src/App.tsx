// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Orders from './pages/Orders';
import Dashboard from './pages/Dashboard';
import { createTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const NAVIGATION = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'orders', title: 'Orders', icon: <ShoppingCartIcon /> },
];

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
});

// function LayoutWrapper() {
//   return (
//     <DashboardLayout>
//       <Outlet />
//     </DashboardLayout>
//   );
// }

function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} theme={theme}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default App;
