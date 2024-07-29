# Togee Showcase

### Getting Started

Clone the repo locally, and then create an .env.local file in the root of the app directory.  That file should have the following keys in it:

```
REACT_APP_TOLGEE_API_URL=https://app.tolgee.io
REACT_APP_TOLGEE_API_KEY=<API KEY>
```
You can obtain provide your own API key or if working in an organization, obtain it from within that organization as appropriate.

After setting up the .env, install the dependencies:

```
npm i
```

### Running the App

After having installed dependencies and set up the local environment, you can run the app by executing this:

```
npm start
```

The app will spin up on port 3000. It will also spin up a node server on port 8443 (unused at present).

## Adding the Browser Plugin for Local Inspection of Nodes

You can install the chrome browser plugin by downloading it from the Chrome web store: https://chromewebstore.google.com/search/Tolgee%20Tools?hl=en-US&utm_source=ext_sidebar

By installing this plugin, you will gain access to in-context editing of Tolgee translations.

### Plugin Setup

Once the plugin is installed, activate it by clicking on the plugins icon next to the Chroms search bar:

![](./md_images/plugin1.png?raw=true "")

Select the `Tolgee Tools` item and you will see a dialog allowing you to enter your project details:

![](./md_images/plugin2.png?raw=true "")

As an example, you can enter `https://app.tolgee.io` for the API URL if you are using a histed Tolgee instance. Obtain the key as is appropriate for your organization.

Once the plugin is installed, when viewing this app you can hold down the `option` or `alt` key and a window allowing in-context translations will appear:

![](./md_images/incontext.png?raw=true "")

You can change any of the translations for a given key, and also for any node wrapped by Tolegee's `T` component you can simply enter an english language string and hit save; Tolgee will automatcally create the key and all of the associated translations across every supported language.

## Figma Plugin

You can get started with the Figma plugin by following the directions here: https://www.figma.com/community/plugin/1212381421658754793/tolgee-localization

The figma files for the sample app can be obtained here: https://www.figma.com/community/file/1098131983383434513/horizon-ui-trendiest-open-source-admin-template-dashboard