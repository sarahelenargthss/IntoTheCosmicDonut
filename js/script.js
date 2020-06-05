$(document).ready(function () {

    toggleGameBoxes();
    mostraMenuMobile();

    KBOsGame();
    newHorizonsGame();
    haumeaGame();
});

function toggleGameBoxes() {
    $('.gameBox').hide();
    $('#startSeqKBO').hide();

    $('#startKBOs').click(function () {
        $('#kbos div.gameBox').toggle(0);

        if ($('#kbos div.gameBox').is(':visible')) {
            startKBOs();
        } else {
            endKBOs();
        }
    });

    $('#startNH').click(function () {
        $('#newHorizons div.gameBox').toggle(0);

        if ($('#newHorizons div.gameBox').is(':visible')) {
            startNH();
        } else {
            endNH();
        }
    });

    $('#startHaumea').click(function () {
        $('#haumea div.gameBox').toggle(0);

        if ($('#haumea div.gameBox').is(':visible')) {
            startHaumea();
        } else {
            endHaumea();
        }
    });
}

function mostraMenuMobile() {
    $('#menuIcon').click(function () {
        var check = $('nav ul').is(':visible');
        $('nav ul').toggle(300);

        // verifiy wheter the nav is visible or not
        if (check) {
            $('nav').css('background-image', 'linear-gradient(#040404 80%, #130111 5%, #00000000)');
        } else {
            $('nav ul').css('display', 'flex');
            $('nav ul').css('flex-direction', 'column');
            $('nav').css('background', '#040404');
        }

        $('nav ul li a').click(function () {
            $('nav ul').hide(300);
            $('nav').css('background-image', 'linear-gradient(#040404 80%, #130111 5%, #00000000)');
        });
    });
}

function home() {
    window.location.href = hrefPg;
    window.scrollTo(0, 0);
}

function back() {
    window.history.back();
}

function startHaumea() {
    $('#startHaumea').text('End Game');

    h_arrayCores[0] = "f3abf3";
    h_arrayCores[1] = "c070c0";
    h_arrayCores[2] = "a09639";
    h_arrayCores[3] = "cfc24a";
    h_arrayCores[4] = "8d0404";
    h_arrayCores[5] = "6b0606";
    h_arrayCores[6] = "94078a";
    h_arrayCores[7] = "c208b5";
    h_arrayCores[8] = "cfc24a";
    h_arrayCores[9] = "a09639";
    h_arrayCores[10] = "3592c7";
    h_arrayCores[11] = "7dacc7";
    h_arrayCores[12] = "df12d1";
    h_arrayCores[13] = "d830a6";
    h_arrayCores[14] = "15f19d";
    h_arrayCores[15] = "15f1cc";
    h_arrayCores[16] = "adabf3";
    h_arrayCores[17] = "d0abf3";
    h_arrayCores[18] = "006856";
    h_arrayCores[19] = "16574c";

    h_arrayIndices[0] = 10;
    h_arrayIndices[1] = 3;
    h_arrayIndices[2] = 7;
    h_arrayIndices[3] = 5;
    h_arrayIndices[4] = 1;
    h_arrayIndices[5] = 6;
    h_arrayIndices[6] = 9;
    h_arrayIndices[7] = 2;
    h_arrayIndices[8] = 8;
    h_arrayIndices[9] = 4;

    h_ind = 0;
    h_selecionada = 0;

    $('main #haumea td').css('background-color', '#' + h_arrayCores[0]);
    $('main #haumea td:nth-child(' + h_arrayIndices[0] + ')').css('background-color', '#' + h_arrayCores[1]);
    $('main #haumea td').css('border', '3px solid #040404');
    $('main #haumea .score').text('Score: 00/10');
}

function haumeaGame() {
    $('main #haumea td').click(function () {
        $('main #haumea td').css('border', '3px solid #040404');
        $(this).css('border', '3px solid #ffffff');
        h_selecionada = $(this).text();
    });

    $('#submitHaumea').click(function () {
        if (h_selecionada == h_arrayIndices[h_ind]) {
            h_ind += 1;
            $('main #haumea .score').text('Score: ' + (h_ind != 10 ? '0' : '') + h_ind + '/10');

            if (h_ind == 10) {
                alert('Você ganhou! Completou a missão!');
                endHaumea();
            } else {
                $('main #haumea td').css('background-color', '#' + h_arrayCores[h_ind * 2]);
                $('main #haumea td:nth-child(' + h_arrayIndices[h_ind] + ')').css('background-color', '#' + h_arrayCores[h_ind * 2 + 1]);
                $('main #haumea td').css('border', '3px solid #040404');
            }
        } else {
            alert('Você perdeu! Sua pontuação final foi 0' + h_ind + '/10');
            endHaumea();
        }
    });
}

function endHaumea() {
    $('#startHaumea').text('Play');
    $('#haumea div.gameBox').hide();
}

function startNH() {
    $('#startNH').text('End Game');

    n_arrayPerguntas[0] = 'Dado o número 19, some 36 a ele:';
    n_arrayPerguntas[1] = 'Subtraia 66:';
    n_arrayPerguntas[2] = 'Some 12:';
    n_arrayPerguntas[3] = 'Multiplique por 45:';
    n_arrayPerguntas[4] = 'Some 92:';
    n_arrayPerguntas[5] = 'Qual foi o número dado inicialmente?';

    n_arrayRespostas[0] = 55;
    n_arrayRespostas[1] = -11;
    n_arrayRespostas[2] = 1;
    n_arrayRespostas[3] = 45;
    n_arrayRespostas[4] = 137;
    n_arrayRespostas[5] = 19;

    n_ind = 0;

    $('#questionNH').text(n_arrayPerguntas[0]);
    $('main #newHorizons .score').text('Score: 0/6');
    $('#resultNH').val('');
}

function endNH() {
    $('#startNH').text('Play');
    $('#newHorizons div.gameBox').hide();
}

function newHorizonsGame() {
    $('#submitNH').click(function () {
        if ($('#resultNH').val() == n_arrayRespostas[n_ind]) {
            n_ind += 1;
            $('main #newHorizons .score').text('Score: ' + n_ind + '/6');

            if (n_ind == 6) {
                alert('Você ganhou! Provou estar capacitado para o cargo!');
                endNH();
            } else {
                $('#questionNH').text(n_arrayPerguntas[n_ind]);
                $('#resultNH').val('');
            }
        } else {
            alert('Você perdeu! Sua pontuação final foi ' + n_ind + '/6');
            endNH();
        }
    });
}

function startKBOs() {
    $('#startKBOs').text('End Game');

    k_arraySequenciaOriginal[0] = 5;
    k_arraySequenciaOriginal[1] = 4;
    k_arraySequenciaOriginal[2] = 1;
    k_arraySequenciaOriginal[3] = 2;
    k_arraySequenciaOriginal[4] = 7;
    k_arraySequenciaOriginal[5] = 6;
    k_arraySequenciaOriginal[6] = 9;
    k_arraySequenciaOriginal[7] = 1;
    k_arraySequenciaOriginal[8] = 8;
    k_arraySequenciaOriginal[9] = 3;

    k_ind = 0;
    k_posSeq = 0;

    $('main #kbos .score').text('Score: 00/10');
    $('main #kbos td').css('border', '3px solid #040404');
    $('main #kbos #kbo_' + k_arraySequenciaOriginal[0]).css('border', '3px solid #94078a99');
}

function endKBOs() {
    $('#startKBOs').text('Play');
    $('#kbos div.gameBox').hide();
}

function KBOsGame() {
    $('main #kbos td').click(function () {
        k_arraySequenciaResposta[k_posSeq] = $(this).text();
        k_posSeq += 1;
    });

    $('#submitKBOs').click(function () {
        if (k_posSeq != k_ind + 1) {
            alert('Você perdeu! Sua pontuação final foi 0' + k_ind + '/10');
            endKBOs();
        } else {
            var perdeu = false;
            for (var i = 0; i <= k_ind; i += 1) {
                if (k_arraySequenciaOriginal[i] != k_arraySequenciaResposta[i]) {
                    perdeu = true;
                    break;
                }
            }
            if (perdeu) {
                alert('Você perdeu! Sua pontuação final foi 0' + k_ind + '/10');
                endKBOs();
            } else {
                k_posSeq = 0;
                k_ind += 1;
                $('main #kbos .score').text('Score: ' + (k_ind != 10 ? '0' : '') + k_ind + '/10');


                if (k_ind == 10) {
                    alert('Você ganhou! Já poderá fazer o catálogo dos KBOs!');
                    endKBOs();
                } else {
                    $('main #kbos td').css('border', '3px solid #040404');
                    $('main #kbos #kbo_' + k_arraySequenciaOriginal[k_ind]).css('border', '3px solid #94078a99');
                }
            }
        }
    });
}

// pega o site inicial da página
var hrefPg = window.location.href;

//KBOs
var k_arraySequenciaOriginal = [];
var k_arraySequenciaResposta = [];
var k_ind = 0;
var k_posSeq = 0;

//New Horizons
var n_arrayPerguntas = [];
var n_arrayRespostas = [];
var n_ind = 0;

//Haumea
var h_arrayCores = [];
var h_arrayIndices = [];
var h_ind = 0;
var h_selecionada = 0;