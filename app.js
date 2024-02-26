const yargs = require('yargs');
const user = require('./user');

yargs.command({
    command: 'add',
    describe: 'Додати мову користувача',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Рівень володіння мовою',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.addUserLanguage(argv.title, argv.level);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Видалити мову користувача',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.removeUserLanguage(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Вивести список мов користувача',
    handler() {
        user.listUserLanguages();
    }
});

yargs.command({
    command: 'read',
    describe: 'Переглянути деталі мови користувача',
    builder: {
        title: {
            describe: 'Назва мови',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.readUserLanguage(argv.title);
    }
});

yargs.parse();