import ReactOnRails from 'react-on-rails';

import GuildChatApp from '../bundles/startup/GuildChatApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  GuildChatApp,
});
