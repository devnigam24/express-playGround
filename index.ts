import * as express  from 'express';
import Config from './Config';
import Urls from './app/constants/Urls'
import RouteCallbacks from './app/constants/RouteCallbacks';

const application: express.Application = express();

application.use(express.static('public'));

application.get(Urls.ALL, RouteCallbacks.HomeUrlCallBack);

application.listen(Config.port, RouteCallbacks.ListenCallback);
