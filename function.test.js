const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');


const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');


const dom = new JSDOM(html, { runScripts: 'dangerously' });
const { window } = dom;


global.window = window;
global.document = window.document;


const scriptPath = path.resolve(__dirname, 'hamburgerMenu.js');
require(scriptPath);


describe('Menu functionality', () => {
  test('Menu content should be hidden initially', () => {
    const menuContent = document.getElementById('menuContent');
    expect(menuContent.style.display).toBe('none');
  });

  test('Menu content should be displayed when checkbox is checked', () => {
    const menuCheckbox = document.getElementById('menuCheckbox');
    const menuContent = document.getElementById('menuContent');

    menuCheckbox.checked = true;
    menuCheckbox.dispatchEvent(new window.Event('change'));

    expect(menuContent.style.display).toBe('block');
  });

  test('Menu content should be hidden when checkbox is unchecked', () => {
    const menuCheckbox = document.getElementById('menuCheckbox');
    const menuContent = document.getElementById('menuContent');

    menuCheckbox.checked = false;
    menuCheckbox.dispatchEvent(new window.Event('change'));

    expect(menuContent.style.display).toBe('none');
  });
});
