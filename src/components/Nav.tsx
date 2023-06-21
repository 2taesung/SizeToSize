import { countAtom } from '@src/lib/atoms';

import { useAtomValue } from 'jotai';

export default function Nav() {
  const count = useAtomValue(countAtom);

  return <div>Nav test4{count}</div>;
}
