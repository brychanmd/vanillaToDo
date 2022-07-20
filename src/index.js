// Test import of a JavaScript module
import { testButton } from '@/js/example';
import inbox from '@/js/inbox';

// Test import of styles
import '@/styles/index.scss';

const logging = () => {
  console.log('logging!');
};

const test1 = testButton('Test 1', ['tester'], logging);

const heading = document.createElement('h1');
heading.textContent = 'Testing the page title';

const app = document.querySelector('#root');
app.append(heading, test1);

const test = new inbox('myname');
test.addTask('atask1');
test.addTask('ztask2');
test.addTask('ptask3');

test.filterTasks();

console.log(test);
