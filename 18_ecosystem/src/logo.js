import american from '../assets/american-express.png';
import visa from '../assets/visa.png';
import diners from '../assets/diners-club.png';
import discover from '../assets/discover.png';
import jcb from '../assets/jcb.png';
import maestro from '../assets/maestro.png';
import master from '../assets/master-card.png';
import mir from '../assets/mir.png';
import unionpay from '../assets/unionpay.png';
import def from '../assets/logo.png';

export default function defineLogo(value) {
  let logo;

  switch (value) {
    case 'american-express':
      logo = american;
      break;
    case 'visa':
      logo = visa;
      break;
    case 'diners-club':
      logo = diners;
      break;
    case 'discover':
      logo = discover;
      break;
    case 'jcb':
      logo = jcb;
      break;
    case 'maestro':
      logo = maestro;
      break;
    case 'master-card':
      logo = master;
      break;
    case 'mira':
      logo = mir;
      break;
    case 'unionpay':
      logo = unionpay;
      break;
    default:
      logo = def;
      break;
  }

  return logo;
}
