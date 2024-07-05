/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { Toaster } from 'react-hot-toast';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      
      <Toaster />
      <Router />
    </ThemeProvider>
  );
}
