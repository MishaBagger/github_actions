const isDayEven = require('./date.js');

// Функция для проверки тестов
function runTests() {
    let passed = 0;
    let failed = 0;

    function test(name, callback) {
        try {
            callback();
            console.log(`✅ ${name} passed`);
            passed++;
        } catch (error) {
            console.error(`❌ ${name} failed: ${error.message}`);
            failed++;
        }
    }

    // Тест 1: Чётный день
    test('should return true for even day', () => {
        const evenDay = new Date('2023-10-02'); // 2-е число (чётное)
        if (!isDayEven(evenDay)) {
            throw new Error('Expected true for even day');
        }
    });

    // Тест 2: Нечётный день
    test('should return false for odd day', () => {
        const oddDay = new Date('2023-10-03'); // 3-е число (нечётное)
        if (isDayEven(oddDay)) {
            throw new Error('Expected false for odd day');
        }
    });

    // Тест 3: Граничный случай (1-е число)
    test('should return false for the first day of the month', () => {
        const firstDay = new Date('2023-10-01'); // 1-е число (нечётное)
        if (isDayEven(firstDay)) {
            throw new Error('Expected false for the first day');
        }
    });

    // Итоги
    console.log(`\nTests passed: ${passed}, failed: ${failed}`);
    if (failed === 0) {
        console.log('🎉 All tests passed!');
    } else {
        console.error('💥 Some tests failed!');
    }
}

// Запуск тестов
runTests();