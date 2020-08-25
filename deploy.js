import fsExtra from 'fs-extra';
import { join } from 'path';

const { copySync } = fsExtra;
const routes = ['profile-page'];

routes.forEach((route) => {
    copySync(join('build', 'index.html'), join('build', route, 'index.html'));
});
