const URL = 'https://teachablemachine.withgoogle.com/models/pTkCC0uBt/';

let model, webcam, labelContainer, maxPredictions;
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    const startButton = document.getElementById('start-button');

    startButton.disabled = true;
    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        labelContainer = document.getElementById('label-container');
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }
        startButton.disabled = false;
        alert("Machine Is Ready! Please Press The Predict Button!");
    } catch (error) {
        console.error('Error loading model:', error);
        startButton.innerHTML = 'Failed';
        alert("Please Press The Start Button Again")
    }
}
async function predict() {
    var image = document.getElementById('face-image');
    const prediction = await model.predict(image, false);

    let highestProbability = 0;
    let highestCharacter = '';

    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = prediction[i].probability;

        const classPrediction = className + ': ' + probability.toFixed(2) * 100 + '%';
        labelContainer.childNodes[i].innerHTML = classPrediction;

        if (probability > highestProbability) {
            highestProbability = probability;
            highestCharacter = className;
        }
    }

    const highestPredictionText = highestCharacter + ' ' + highestProbability.toFixed(2) * 100 + '%';
    labelContainer.innerHTML = highestCharacter;

    document.getElementById('pname').innerHTML = highestCharacter;
    document.getElementById('prate').innerHTML = highestProbability.toFixed(2) * 100 + '%';

    PictureShow();
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

var arrResult = new Array();
var arrImgs = new Array();
var ri = 0;

arrResult[ri] = '해리포터';
arrImgs[ri++] = ['Gryffindor.png', 'Gryffindor_Harry_Potter.png'];

arrResult[ri] = '론위즐리';
arrImgs[ri++] = ['Gryffindor.png', 'Gryffindor_Ron_Weasley.png'];

arrResult[ri] = '헤르미온느그레인저';
arrImgs[ri++] = ['Gryffindor.png', 'Gryffindor_Hermione_Granger.png'];

arrResult[ri] = '네빌롱바텀';
arrImgs[ri++] = ['Gryffindor.png', 'Gryffindor_Neville_Longbottom.png'];

arrResult[ri] = '세드릭디고리';
arrImgs[ri++] = ['Hufflepuff.png', 'Hufflepuff_Cedric_Diggory.png'];

arrResult[ri] = '수잔본즈';
arrImgs[ri++] = ['Hufflepuff.png', 'Hufflepuff_Susan_Bones.png'];

arrResult[ri] = '루나러브굿';
arrImgs[ri++] = ['Ravenclaw.png', 'Ravenclaw_Luna_Lovegood.png'];

arrResult[ri] = '초챙';
arrImgs[ri++] = ['Ravenclaw.png', 'Ravenclaw_Cho_Chang.png'];

arrResult[ri] = '돌로레스엄브릿지';
arrImgs[ri++] = ['Ministry_of_Magic.png', 'Ministry_of_Magic_Dolores_Umbridge.png'];

arrResult[ri] = '코넬리우스퍼지';
arrImgs[ri++] = ['Ministry_of_Magic.png', 'Ministry_of_Magic_Cornelius_Fudge.png'];

arrResult[ri] = '그레고리고일';
arrImgs[ri++] = ['Slytherin.png', 'Slytherin_Gregory_Goyle.png'];

arrResult[ri] = '드레이코말포이';
arrImgs[ri++] = ['Slytherin.png', 'Slytherin_Draco_Malfoy.png'];

arrResult[ri] = '빈센트크레이브';
arrImgs[ri++] = ['Slytherin.png', 'Slytherin_Vincent_Crabbe.png'];

arrResult[ri] = '루시우스말포이';
arrImgs[ri++] = ['Death_Eaters.png', 'Death_Eaters_Lucius_Malfoy.png'];

arrResult[ri] = '벨라트릭스레스트랭';
arrImgs[ri++] = ['Death_Eaters.png', 'Death_Eaters_Bellatrix_Lestrange.png'];

arrResult[ri] = '볼드모트';
arrImgs[ri++] = ['Death_Eaters.png', 'Death_Eaters_Voldemort.png'];

arrResult[ri] = '루베우스해그리드';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Rubeus_Hagrid.png'];

arrResult[ri] = '미네르바맥고나걸';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Minerva_McGonagall.png'];

arrResult[ri] = '세베루스스네이프';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Severus_Snape.png'];

arrResult[ri] = '시빌패트리샤트릴로니';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Sibyl_Patricia_Trelawney.png'];

arrResult[ri] = '알버스덤블도어';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Albus_Dumbledore.png'];

arrResult[ri] = '질데로이록허트';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Gellert_Grindelwald.png'];

arrResult[ri] = '호러스슬러그혼';
arrImgs[ri++] = ['Hogwarts.png', 'Hogwarts_Horace_Slughorn.png'];

function PictureShow() {
    console.log(arrResult[0]);
    console.log(document.getElementById('pname').innerHTML);

    var FirImageElement = document.getElementById('FirImage');
    var SecImageElement = document.getElementById('SecImage');

    var r = document.getElementById('pname').innerHTML.replace(' ', '');

    for (var i = 0; i < arrResult.length; i++) {
        if (arrResult[i] == r) {
            FirImageElement.src = 'images/' + arrImgs[i][0];
            SecImageElement.src = 'images/' + arrImgs[i][1];
            break;
        }
    }

    location.href = 'result.html?pBg=' + FirImageElement.src + '&pfw=' + SecImageElement.src;
}
