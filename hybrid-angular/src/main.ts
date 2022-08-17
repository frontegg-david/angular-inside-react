import { AppModule } from './app/app.module';
import { enableDynamicPublicPath } from './helpers';
import AppContext from './AppContext';

enableDynamicPublicPath()

AppContext.init(AppModule)

