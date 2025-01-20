import { useTranslation } from 'react-i18next';

import {NameHeader} from "./components/NameHeader.jsx";

function App() {
  const {t} = useTranslation();

  return (
    <>
      <div>{t('main.test')}</div>
      <NameHeader />
    </>
  )
}

export default App
