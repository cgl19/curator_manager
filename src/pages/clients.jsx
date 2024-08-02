import { Helmet } from 'react-helmet-async';

import { ClientsView } from 'src/sections/clients/view/';

// ----------------------------------------------------------------------

export default function ClientsPage() {
  return (
    <>
      <Helmet>
        <title> Cients | Curator365 | Manager Ui </title>
      </Helmet>

      <ClientsView />
    </>
  );
}
  