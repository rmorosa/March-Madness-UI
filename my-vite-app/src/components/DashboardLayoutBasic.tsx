import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import logo from "../assets/basketball_icon.png"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION: Navigation = [
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'leaderboard',
    title: 'Leader Board',
    icon: <LeaderboardIcon />,
  },
  {
    segment: 'submitentry',
    title: 'Submit Entry',
    icon: <EditSquareIcon />,
  }
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

export default function DashboardLayoutBasic() {

  const router = useDemoRouter('/dashboard');

  return (
      <AppProvider
        branding={{
        logo: <img src={logo} alt="MM_logo" />,
        title: 'March Madness',
        homeUrl: '/toolpad/core/introduction',
      }}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
  );
}
