import { Helmet } from 'react-helmet-async';

import { SettingsView } from 'src/sections/settings/view';

// ----------------------------------------------------------------------

export default function SettingsPage() {
  return (
    <>
      <Helmet>
        <title> Settings | Curator 365 | Manager Ui</title>
      </Helmet>

      <SettingsView />
    </>
  );
}
  