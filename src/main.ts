import './Video-Xapi.html';
import TinCan from 'tincanjs'
import {
  StringValidator
} from './util/validation'

const outstr = StringValidator('')

const lrs = new TinCan.LRS({
  endpoint: "https://cloud.scorm.com/tc/public/",
  username: "<Test User>",
  password: "<Test Password>",
  allowFail: false
});
console.log('lrs', lrs)

document.body.innerHTML = `<video-xapi name="${outstr}">`;