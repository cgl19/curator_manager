import { Helmet } from 'react-helmet-async';

import { GroupsView } from 'src/sections/groups/view/';

// ----------------------------------------------------------------------

export default function GroupsPage() {
  return (
    <>
      <Helmet>
        <title> Groups | Curator365 | Manager Ui </title>
      </Helmet>

      <GroupsView />
    </>
  );
}
