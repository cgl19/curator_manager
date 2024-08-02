import { Helmet } from 'react-helmet-async';

import { ScholarsView } from 'src/sections/scholars/view';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> Scholars | Curator365 | Manager Ui </title>
      </Helmet>

      <ScholarsView />
    </>
  );
}
  