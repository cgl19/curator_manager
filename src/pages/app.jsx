import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Curator365 | Manager Ui </title>
      </Helmet>

      <AppView />
    </>
  );
}  
