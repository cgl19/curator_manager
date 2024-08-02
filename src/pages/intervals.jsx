import { Helmet } from 'react-helmet-async';

import { IntervalsView } from 'src/sections/intervals/view/';

// ----------------------------------------------------------------------

export default function IntervalsPage() {
  return (
    <>
      <Helmet>
        <title> Intervals | Curator365 | Manager Ui </title>
      </Helmet>

      <IntervalsView />
    </>
  );
}
