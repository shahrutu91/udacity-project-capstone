import { JSDOM } from 'jsdom';

const dom = new JSDOM(
      `<html>
        <body>
          <button class="button" aria-expanded="true" id="trip_details_section">Im A Button</button>
        </body>
      </html>`,
      { url: 'http://localhost' },
);

global.window = dom.window;
global.document = dom.window.document;