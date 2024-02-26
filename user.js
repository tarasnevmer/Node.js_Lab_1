const fs = require('fs');

const addUserLanguage = (title, level) => {
    if (!title || !level) {
        throw new Error('Не вказано назву мови або рівень володіння.');
    }

    const userData = getUserData();
    userData.languages.push({ title, level });

    writeUserData(userData);

    console.log(`Мова "${title}" додана`);

};

const removeUserLanguage = (title) => {
    if (!title) {
        throw new Error('Не вказано назву мови для видалення');
    }

    const userData = getUserData();

    const index = userData.languages.findIndex(language => language.title == title);

    if (index === -1) {
        throw new Error('Мова не знайдена');
    }

    userData.languages.splice(index, 1);

    writeUserData(userData);

    console.log(`Мова "${title}" видалена`);
};

const listUserLanguages = () => {
    const userData = getUserData();

    console.log('Список мов користувача:');
    userData.languages.forEach(language => {
        console.log(`${language.title} (${language.level})`);
    });
};

const readUserLanguage = (title) => {
    if (!title) {
        throw new Error('Не вказано назву мови для перегляду');
    }

    const userData = getUserData();

    const language = userData.languages.find(language => language.title === title);

    if (!language) {
        throw new Error('Мова не знайдена');
    }

    console.log(`Назва: ${language.title}`);
    console.log(`Рівень: ${language.level}`);
};

function getUserData() {
    try {
        const userData = JSON.parse(fs.readFileSync('user.json', 'utf8'));
        return userData;
    } catch (error) {
        return { languages: [] };
    }
}

function writeUserData(userData) {
    fs.writeFileSync('user.json', JSON.stringify(userData, null, 2));
}

module.exports = {
    addUserLanguage,
    removeUserLanguage,
    listUserLanguages,
    readUserLanguage
};
