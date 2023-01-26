// import commander from 'commander';
import { name, version } from './package.json';

// const program = new commander.Command();

// program.name(name);
// program.version(version);

// program.parse();

const c1 = Math.PI / 180;

process.stderr.write(`This is ${name} version ${version}.\n`);

process.stdout.write('<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">\n');

process.stdout.write('<polyline points="');
for (let x = 0; x <= 360; x += 5) {
  const y = 100 - Math.sin(x * c1) * 100;
  process.stdout.write(`${x},${y} `);
} // end for //
process.stdout.write('"  fill="none" stroke="black" />\n');
