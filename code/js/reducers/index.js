import {combineReducers} from 'redux';
import bidReducers from './bid';
import askReducers from './ask';
import spreadReducers from './spread';


const allReducers = combineReducers({
    bid: bidReducers,
    ask: askReducers,
    spread: spreadReducers
});

export default allReducers;