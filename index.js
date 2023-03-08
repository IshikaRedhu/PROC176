let words = [
    {
        "inputs": 11,
        "category": "YouTuber",
        "word": "TecnoGamerz"
    },
    {
        "inputs": 10,
        "category": "Asian Country",
        "word": "SouthKorea"
    },
    {
        "inputs": 6,
        "category": "Rapper",
        "word": "Eminem"
    },
    {
        "inputs":14,
        "category": "Pop Band",
        "word": "ImagineDragons"
    },
    {
        "inputs": 9,
        "category": "An element",
        "word": "Strontium"
    },

]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }
    $("#hint").html(randomWord.category)

    var gameOver=false
    $(".clickable").click(function () {
        var correctGuess = false;      
        let id = $(this).attr("id");
        var life = parseInt($("#life").text())

        //Loop through all the letters 
        for (var i = 0; i < randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("Next is even harder")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
            
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("Bro, I knew that u will fail..")
        }
    })
}
