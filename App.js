// eslint no-undef 0
import axios from 'axios';

import StorybookUI from './storybook';

import RealApp from './RealApp';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post.Accept = 'application/json';
axios.defaults.withCredentials = true;

module.exports = __DEV__ ? StorybookUI : RealApp;
