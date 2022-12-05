// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// console.assert(expression, object)
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
// 断言失败，给控制台写一个错误
console.assert(x < y, { x, y, reason });
// 断言成功
console.assert(x > y, { x, y, reason });

// console.count([label]) 与 console.countReset([label])
console.count();
console.count('coffee');
console.count();
console.count();
console.count('coffee');
console.countReset();
console.countReset('coffee');
// 清除计数后，重新从1开始计数
console.count();
console.count('coffee');

// console.debug(object [, object, ...])
console.debug('debug');

// console.dir(object)
console.dir(document.head);

// console.dirxml(node)
console.dirxml(document);

// console.error(object [, object, ...])
console.error("I'm sorry, Dave. I'm afraid I can't do that.");

// console.group(label)
const label = 'Adolescent Irradiated Espionage Tortoises';
console.group(label);
console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);
// 嵌套组
const timeline1 = 'New York 2012';
const timeline2 = 'Camp Lehigh 1970';
const timeline3 = 'collapsed group';
console.group(timeline1);
console.info('Mind');
console.info('Time');
console.group(timeline2);
console.groupCollapsed(timeline3);
console.info(1);
console.info(2);
console.groupEnd(timeline3);
console.info('Space');
console.info('Extra Pym Particles');
console.groupEnd(timeline2);
console.groupEnd(timeline1);

// console.info(object [, object, ...])
console.info('info');

// console.log(object [, object, ...])
console.log('log');

// console.table(array [, columns])
var people = [
  {
    first: 'René',
    last: 'Magritte',
  },
  {
    first: 'Chaim',
    last: 'Soutine',
    birthday: '18930113',
  },
  {
    first: 'Henri',
    last: 'Matisse',
  },
];
// 全部列
console.table(people);
// 限制列
console.table(people, ['last', 'birthday']);

// console.time([label]) 与 console.timeEnd([label])
console.time();
for (var i = 0; i < 100000; i++) {
  let square = i ** 2;
}
console.timeEnd();

// console.trace()
const first = () => {
  second();
};
const second = () => {
  third();
};
const third = () => {
  fourth();
};
const fourth = () => {
  console.trace();
};
first();

// console.warn(object [, object, ...])
console.warn('warn');
