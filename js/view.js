var view = () => {
    var that = {};
    var scoreCounter = 1;
    var numsCount = 1;
    var table = document.getElementById("myTable").rows[1];
    var scoreTable = document.getElementById("myTable").rows[2];
    var game = BowlingGame();

 

gameReset=() => {
    game.reset();
    $('.nums').show();
    $('#roll').show();
    scoreCounter = 1;
    numsCount = 1;
    for (var i = 0; i < table.cells.length; i++) {
        $(table.cells[i]).text('');
    };
    for (var i = 1; i <= scoreTable.cells.length; i++) {
        $(scoreTable.cells[i - 1]).text('');
    };
}

endGame=() => {
    $('.nums').hide();
    $('#roll').hide();
}


    updateView = (res) => {
        for (var i = 0; i < table.cells.length; i++) {
            $(table.cells[i]).text(res[i]);
        };
    };

    updateButtons = (bowls) => {
        if (numsCount % 2 == 0) {
            $('.nums').show();
            numsCount++;
        } else {
            if (bowls !== 10) {
                var remain = 11;
                remain -= bowls;
                for (var i = 11; i >= remain; i--) {
                    $($('.nums')[i]).hide();
                };
                numsCount++;
            };
        };
    };

    $('.reset').on('click',() => {
        gameReset();
    })

    // $('#roll').on('click', () => {
    //     var bowls = game.roll(10);
    //     var res = game.getTable();
    //     updateView(res);
    //     if (scoreCounter >= 10) {
    //         for (var i = 1; i <= scoreCounter; i++) {
    //             $(scoreTable.cells[i - 1]).text(game.score(i));
    //         };
    //         scoreCounter++;
    //     }else if (res.length % 2 == 0 || bowls == 10) {
    //         for (var i = 1; i <= scoreCounter; i++) {
    //             $(scoreTable.cells[i - 1]).text(game.score(i));
    //         };
    //         scoreCounter++;
    //     }
    //     if(scoreCounter>12){
    //         endGame();
    //     }
    // });

    $('.nums').on('click', (e) => {
        var bowls = game.roll(Number(e.target.innerText));
        var res = game.getTable();
        updateView(res);
        if (scoreCounter >= 10) {
            for (var i = 1; i <= scoreCounter; i++) {
                $(scoreTable.cells[i - 1]).text(game.score(i));
            };          
            scoreCounter++;
        }else if (res.length % 2 == 0 || bowls == 10) {
            for (var i = 1; i <= scoreCounter; i++) {
                $(scoreTable.cells[i - 1]).text(game.score(i));
            };        
            scoreCounter++;
        }
        if(scoreCounter>12){
            endGame();
        }
        updateButtons(bowls);
    });
    return that;
};
view();