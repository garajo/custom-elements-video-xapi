import './util/Json.html'
import './VideoQuizXapi.html';
import './Quiz-Collection.html';
// import './True-False.html';
import TinCan from 'tincanjs'
import {
  StringValidator
} from './util/validation'

const outstr = StringValidator('xx')



const lrs = new TinCan.LRS({
  endpoint: "https://cloud.scorm.com/tc/public/",
  username: "<Test User>",
  password: "<Test Password>",
  allowFail: false
});
console.log('lrs', lrs)

