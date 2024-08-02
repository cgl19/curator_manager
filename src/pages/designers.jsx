import { Helmet } from 'react-helmet-async';

import { DesignersView } from 'src/sections/designers/view/';

// ----------------------------------------------------------------------

export default function DesignersPage() {
  return (
    <>
      <Helmet>
        <title> Designers | Curator365 | Manager Ui </title>
      </Helmet>

      <DesignersView />
    </>
  );
} 
