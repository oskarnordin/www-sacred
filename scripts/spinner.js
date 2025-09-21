const readline = require('node:readline');

function createSpinner(text = 'Loading…', { spinner = 'dots' } = {}) {
  let i = 0;
  let timer = null;
  let frames = ['-', '\\', '|', '/'];
  let interval = 100;
  const isTTY = process.stdout.isTTY;

  async function load() {
    try {
      const { default: cliSpinners } = await import('cli-spinners');
      const cfg = cliSpinners[spinner] || cliSpinners.dots;
      frames = cfg.frames;
      interval = cfg.interval;
    } catch {
      // fallback already set
    }
  }

  function draw() {
    const frame = frames[(i = (i + 1) % frames.length)];
    const line = `${frame} ${text}`;
    process.stdout.write('\x1b[?25l'); // hide cursor
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(line);
  }

  async function start() {
    await load();
    if (!isTTY) {
      console.log(text);
      return;
    }
    draw();
    timer = setInterval(draw, interval);
  }

  function stop() {
    if (!isTTY) return;
    clearInterval(timer);
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('\x1b[?25h'); // show cursor
  }

  function succeed(msg = text) {
    stop();
    console.log(`✔ ${msg}`);
  }

  function fail(msg = text) {
    stop();
    console.log(`✖ ${msg}`);
  }

  return {
    start,
    stop,
    succeed,
    fail,
    setText(next) {
      text = next;
    },
    setSpinner(next) {
      spinner = next;
    },
  };
}

module.exports = { createSpinner };

// Demo when run directly: node scripts/spinner.js
if (require.main === module) {
  (async () => {
    const { createSpinner } = module.exports;
    const s = createSpinner('Fetching data…', { spinner: 'dots' });
    await s.start();
    setTimeout(() => s.setText('Processing…'), 1000);
    setTimeout(() => s.succeed('Done'), 2500);
  })();
}