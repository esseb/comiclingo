Originally created with [Create React App](https://github.com/facebookincubator/create-react-app).

## Ideas

- Front page lists already created comics + "add comic" button
- Clicking "add comic" creates a new comic and launches edit mode
  - Add comic title
  - Add description
  - Select language
    - Useful for "lang" attribute
  - Select emoji flag?
    - Country !== language, but makes for prettier UI
    - Decouple from language selection at least so you can select `lang="fr"` and the Canadian flag for a French-Canadian comic
- Clicking an existing comic opens reading mode by default, with a way to toggle edit mode
  - This opens the current bubble in edit mode
- Start with page 1, panel 1, bubble 1
- Edit mode is bubble based
  - Creating a new panel automatically creates a new bubble
  - Creating a new page automatically creates a new panel and bubble
- Type in text in original language
  - Note: Make sure to use "lang" attribute to aid OS/browser spellchecker
- Optionally type in translated text
  - Click a button to import Google Translate
- Shortcut friendly interface
  - Shortcuts for navigating between pages, panels, bubbles
  - Shortcuts for adding a new page, panel, and bubble
  - Shortcuts for moving bubbles "up" or "down"
- Some form of account creation + log in
  - Passport.js?
  - Facebook, Google+, Twitter?
  - Email?
- REST API
  - Which database?
- Google App Engine
  - Node.js? 