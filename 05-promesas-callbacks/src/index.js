import './styles.css';
import {buscarHeroe as buscarHeroeCallbacks} from './js/callbacks';
import {buscarHeroe} from './js/promesas';

const heroeId = 'capi';


buscarHeroe(heroeId).then(heroe => {
    console.log(heroe);
});