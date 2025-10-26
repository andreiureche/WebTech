class Software {
  constructor(nume) {
    this.nume = nume;
  }

  run() {
    console.log(`${this.nume} rulează...`);
  }
}

class Plugin {
  constructor(nume) {
    this.nume = nume;
  }

  activate() {
    console.log(`Pluginul "${this.nume}" a fost activat.`);
  }
}

class Browser extends Software {
  constructor(nume) {
    super(nume);
    this.plugins = [];
  }

  install(plugin) {
    this.plugins.push(plugin);
    console.log(`Pluginul "${plugin.nume}" a fost instalat în ${this.nume}.`);
  }

  run() {
    super.run();
    if (this.plugins.length === 0) {
      console.log(`${this.nume} nu are pluginuri instalate.`);
    } else {
      console.log(`${this.nume} pornește pluginurile:`);
      this.plugins.forEach((p) => p.activate());
    }
  }
}

const chrome = new Browser("Google Chrome");
const adblock = new Plugin("AdBlock");
const darkmode = new Plugin("Dark Mode");

chrome.install(adblock);
chrome.install(darkmode);

chrome.run();
