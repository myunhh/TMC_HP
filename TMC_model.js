const URL = 'https://teachablemachine.withgoogle.com/models/pTkCC0uBt/';

let model, webcam, labelContainer, maxPredictions;
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    //const startButton = document.getElementById('start-button');
    hideLoading();
    showLoading();
    //startButton.disabled = true;
    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        labelContainer = document.getElementById('label-container');
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }
        //startButton.disabled = false;
        predict(); // 2023/09/27 RyanMin
        // alert("Machine Is Ready! Please Press The Predict Button!");
    } catch (error) {
        console.error('Error loading model:', error);
        //startButton.innerHTML = 'Failed';
        alert("Please Press The Start Button Again")
    }
    hideLoading();
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
        $(".btnPredict").show();
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
arrImgs[ri++] = ['character_card/Gryffindor.png', 'character_card/Gryffindor_Harry_Potter.png', 'flag/Gryffindor_Flag.png', 'background/Gryffindor.png', 'character_info/HarryPotter.png'];

arrResult[ri] = '론위즐리';
arrImgs[ri++] = ['character_card/Gryffindor.png', 'character_card/Gryffindor_Ron_Weasley.png', 'flag/Gryffindor_Flag.png', 'background/Gryffindor.png', 'character_info/RonWeasley.png'];

arrResult[ri] = '헤르미온느그레인저';
arrImgs[ri++] = ['character_card/Gryffindor.png', 'character_card/Gryffindor_Hermione_Granger.png', 'flag/Gryffindor_Flag.png', 'background/Gryffindor.png', 'character_info/HermioneGranger.png'];

arrResult[ri] = '네빌롱바텀';
arrImgs[ri++] = ['character_card/Gryffindor.png', 'character_card/Gryffindor_Neville_Longbottom.png', 'flag/Gryffindor_Flag.png', 'background/Gryffindor.png', 'character_info/NevilleLongbattom.png'];

arrResult[ri] = '세드릭디고리';
arrImgs[ri++] = ['character_card/Hufflepuff.png', 'character_card/Hufflepuff_Cedric_Diggory.png', 'flag/Hufflepuff_Flag.png', 'background/Gryffindor.png', 'character_info/CedricDiggory.png'];

arrResult[ri] = '수잔본즈';
arrImgs[ri++] = ['character_card/Hufflepuff.png', 'character_card/Hufflepuff_Susan_Bones.png', 'flag/Hufflepuff_Flag.png', 'background/Hufflepuff.png', 'character_info/SusanBones.png'];

arrResult[ri] = '루나러브굿';
arrImgs[ri++] = ['character_card/Ravenclaw.png', 'character_card/Ravenclaw_Luna_Lovegood.png', 'flag/Ravenclaw_Flag.png', 'background/Ravenclaw.png', 'character_info/LunaLovegood.png'];

arrResult[ri] = '초챙';
arrImgs[ri++] = ['character_card/Ravenclaw.png', 'character_card/Ravenclaw_Cho_Chang.png', 'flag/Ravenclaw_Flag.png', 'background/Ravenclaw.png', 'character_info/ChoChang.png'];

arrResult[ri] = '돌로레스엄브릿지';
arrImgs[ri++] = ['character_card/Ministry_of_Magic.png', 'character_card/Ministry_of_Magic_Dolores_Umbridge.png', 'flag/Ministry_of_Magic_Flag.png', 'background/Ministry_of_Magic.png', 'character_info/DoloresUmbridge.png'];

arrResult[ri] = '코넬리우스퍼지';
arrImgs[ri++] = ['character_card/Ministry_of_Magic.png', 'character_card/Ministry_of_Magic_Cornelius_Fudge.png', 'flag/Ministry_of_Magic_Flag.png', 'background/Ministry_of_Magic.png', 'character_info/CorneliusFudge.png'];

arrResult[ri] = '그레고리고일';
arrImgs[ri++] = ['character_card/Slytherin.png', 'character_card/Slytherin_Gregory_Goyle.png', 'flag/Slytherin_Flag.png', 'background/Slytherin.png', 'character_info/GregoryGoyle.png'];

arrResult[ri] = '드레이코말포이';
arrImgs[ri++] = ['character_card/Slytherin.png', 'character_card/Slytherin_Draco_Malfoy.png', 'flag/Slytherin_Flag.png', 'background/Slytherin.png', 'character_info/DracoMalfoy.png'];

arrResult[ri] = '빈센트크레이브';
arrImgs[ri++] = ['character_card/Slytherin.png', 'character_card/Slytherin_Vincent_Crabbe.png', 'flag/Slytherin_Flag.png', 'background/Slytherin.png', 'character_info/VincentCrabbe.png'];

arrResult[ri] = '루시우스말포이';
arrImgs[ri++] = ['character_card/Death_Eaters.png', 'character_card/Death_Eaters_Lucius_Malfoy.png', 'flag/Death_Eaters_Flag.png', 'background/Death_Eaters.png', 'character_info/LuciusMalfoy.png'];

arrResult[ri] = '벨라트릭스레스트랭';
arrImgs[ri++] = ['character_card/Death_Eaters.png', 'character_card/Death_Eaters_Bellatrix_Lestrange.png', 'flag/Death_Eaters_Flag.png', 'background/Death_Eaters.png', 'character_info/BellatrixLestrang.png'];

arrResult[ri] = '볼드모트';
arrImgs[ri++] = ['character_card/Death_Eaters.png', 'character_card/Death_Eaters_Voldemort.png', 'flag/Death_Eaters_Flag.png', 'background/Death_Eaters.png', 'character_info/Voldemort.png'];

arrResult[ri] = '루베우스해그리드';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Rubeus_Hagrid.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/RubeusHagrid.png'];

arrResult[ri] = '미네르바맥고나걸';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Minerva_McGonagall.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/MinervaMcGonagall.png'];

arrResult[ri] = '세베루스스네이프';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Severus_Snape.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/SeverusSnape.png'];

arrResult[ri] = '시빌패트리샤트릴로니';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Sibyl_Patricia_Trelawney.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/SybillPatriciaTrelawney.png'];

arrResult[ri] = '알버스덤블도어';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Albus_Dumbledore.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/AlbusDumbledore.png'];

arrResult[ri] = '질데로이록허트';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Gellert_Grindelwald.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/GilderoyLockhart.png'];

arrResult[ri] = '호러스슬러그혼';
arrImgs[ri++] = ['character_card/Hogwarts.png', 'character_card/Hogwarts_Horace_Slughorn.png', 'flag/Hogwarts_Flag.png', 'background/Hogwarts.png', 'character_info/HoraceSlughorn.png'];

function PictureShow() {
    console.log(arrResult[0]);
    console.log(document.getElementById('pname').innerHTML);

    var FirImageElement = document.getElementById('FirImage');
    var SecImageElement = document.getElementById('SecImage');
    var backgroundImg = document.getElementById('BacImage');
    var flagImg = document.getElementById('FlagImg');
    var InfoImg = document.getElementById('InfoImg');

    var r = document.getElementById('pname').innerHTML.replace(' ', '');

    for (var i = 0; i < arrResult.length; i++) {
        if (arrResult[i] == r) {
            FirImageElement.src = 'images/' + arrImgs[i][0];
            SecImageElement.src = 'images/' + arrImgs[i][1];
            flagImg.src = 'images/' + arrImgs[i][2];
            backgroundImg.src = 'images/' + arrImgs[i][3];
            InfoImg.src = 'images/' + arrImgs[i][4];
            
            break;
        }
    }

    location.href = 'result.html?pBg=' + FirImageElement.src + '&pfw=' + SecImageElement.src + '&pFg=' + flagImg.src + '&pBac=' + backgroundImg.src + '&pIf=' + InfoImg.src;
}


function showLoading() {
  $("body").append("<div class='cover-all-in-progress'></div>");
  $("body").append("<div class='loading'></div>");
}

function hideLoading() {
  $(".cover-all-in-progress").remove();
  $(".loading").remove();   
}