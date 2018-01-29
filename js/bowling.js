function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var BowlingGame = () => {
    var that = {};
    var rolls = [];
    var scoreTable = [];
    // var turn = 0;
    // var remainBowls = 10;
    var rollCounter = 0;
    var frameCounter = 1;

    that.reset = () => {
        rolls = [];
        scoreTable = [];
        // turn = 0;
        // remainBowls = 10;
        rollCounter = 0;
        frameCounter = 1;
    };

    that.roll = (bowls) => {

        function isIllegalRoll() {
            if (frameCounter % 2 === 0 && (scoreTable[scoreTable.length - 1] + bowls > 10)) {
                return true;
            } else {
                return false;
            }
        };

        if (isIllegalRoll()) {
            alert('Jak Ty chcesz niby zbić więcej jak 10!?');
            return false;
        } else {
            // console.log('Trafiłeś', bowls);
            rolls.push(bowls);
            registerRolls(bowls);
            return bowls;
        }
    };


    that.getTable = () => {
        return scoreTable;
    }

    registerRolls = (bowls) => {

        function tenthFrame() {
            return frameCounter > 18;
        };

        function isFrameEnd() {
            return frameCounter % 2 === 0;
        }

        function isStrike() {
            return bowls == 10;
        }

        function isSpare() {
            return bowls + scoreTable[scoreTable.length - 1] === 10;
        }
        if (tenthFrame()) {
            scoreTable.push(bowls);
        } else if (isStrike()) {
            scoreTable.push(bowls);
            scoreTable.push('X');
            frameCounter += 2;
        } else if (isFrameEnd()) {
            if (isSpare()) {
                scoreTable.push('/');
            } else {
                scoreTable.push(bowls);
            }
            frameCounter++;

        } else {
            scoreTable.push(bowls);
            frameCounter++;
        };
        rollCounter++;
    };
    that.score = (test) => {
        var score = 0;
        var frameCounter = 0;

        function isStrike() {
            return rolls[frameCounter] == 10;
        }

        function strikeBonus() {
            return rolls[frameCounter + 1] + rolls[frameCounter + 2] || 0;
        };

        function isSpare() {
            return rolls[frameCounter] + rolls[frameCounter + 1] == 10;
        };

        function spareBonus() {
            return rolls[frameCounter + 2] || 0;
        };

        function openFrame() {
            return rolls[frameCounter] + rolls[frameCounter + 1] || 0;
        };
        for (var i = 0; i < test; i++) {
            if (isStrike()) {
                score += 10 + strikeBonus();
                frameCounter++;
            } else if (isSpare()) {
                score += 10 + spareBonus();
                frameCounter += 2;
            } else {
                score += openFrame();
                frameCounter += 2;
            }
        };
        return score;
    }
    return that;
};
