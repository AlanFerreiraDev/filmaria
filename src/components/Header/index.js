import { Link } from 'react-router-dom';

import { Head } from './styles';
 
export default function Header({classnameHome, classnameFav}) {
  return (
    <Head altura={60} cor="brown">
      <Link className={classnameHome} to='/'>Filmaria</Link>
      <Link className={classnameFav} to='/favoritos'>Favoritos</Link>
    </Head>
  )
  }