import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({ 
  integrityOptions: { cwd: __dirname }, 
  suite: 'Image storyshots',
  test: imageSnapshot()
});