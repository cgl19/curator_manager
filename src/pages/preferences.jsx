import { Helmet } from 'react-helmet-async';

import { PreferencesView } from 'src/sections/preferences/view/';

// ----------------------------------------------------------------------

export default function PreferencesPage() {
  return (
    <>
      <Helmet>
        <title> Preferences | Curator365 | Manager Ui </title>
      </Helmet>

      <PreferencesView />
    </>
  );
}
