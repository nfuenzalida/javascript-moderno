import './styles.css';
import {buscarHeroe as buscarHeroeCallbacks} from './js/callbacks';
import {buscarHeroe} from './js/promesas';

const heroeId1 = 'capi';
const heroeId2 = 'iron';


buscarHeroe(heroeId1)
.then(heroe => {
    console.log(heroe);
}).catch(err => {
    alert(err);
});

Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
.then(heroes => {
    console.log('promises.all',heroes);
}).catch(err =>{
    alert(err);
}).finally( () => {
    console.log('se termino el promises all');
});