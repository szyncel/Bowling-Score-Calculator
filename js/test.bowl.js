var game =BowlingGame();

beforeEach(function () {
    game.reset();
});

function rollMany(n, bowls) {
    for (var i = 0; i < n; i++) {
        game.roll(bowls);
    };
};
describe('Bowling game tests', function () {

    it('Test all rolls 0', () => {
        rollMany(20, 0);
        expect(game.score(10)).to.equal(0);
    });

    it('Test all rolls 1', () => {
        rollMany(20, 1);
        expect(game.score(10)).to.equal(20);
    });

    it('Test perfect game', () => {
        rollMany(12, 10);
        expect(game.score(10)).to.equal(300);
    });

    it('Test spare bonus', () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(17, 0);
        expect(game.score(10)).to.equal(16);
    });

    it('Test strike bonus', () => {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score(10)).to.equal(24);
    });

    it('All game roll 9', () => {
        for (var i = 0; i < 10; i++) {
            game.roll(9);
            game.roll(0);
        }
        expect(game.score(10)).to.equal(90);
    });

    it('All game roll 9 and spare', () => {
        for (var i = 0; i < 10; i++) {
            game.roll(9);
            game.roll(1);
        };
        game.roll(9);
        expect(game.score(10)).to.equal(190);
    });

});