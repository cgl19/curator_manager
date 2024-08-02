import { Helmet } from 'react-helmet-async';

import { OrganizationsView } from 'src/sections/organizations/view/';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Organization | Curator365 | Manager Ui </title>
      </Helmet>

      <OrganizationsView />
    </>
  );
} 
