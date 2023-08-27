@echo off
setlocal enabledelayedexpansion

REM 파일 이름을 번역할 매핑 정보
set "그리핀도르.png=Gryffindor.png"
set "그리핀도르_네빌롱바텀.png=Gryffindor_Neville_Longbottom.png"
set "그리핀도르_론위즐리.png=Gryffindor_Ron_Weasley.png"
set "그리핀도르_해리포터.png=Gryffindor_Harry_Potter.png"
set "그리핀도르_헤르미온느그레인저.png=Gryffindor_Hermione_Granger.png"
set "래번클로.png=Ravenclaw.png"
set "래번클로_루나러브굿.png=Ravenclaw_Luna_Lovegood.png"
set "래번클로_초챙.png=Ravenclaw_Cho_Chang.png"
set "마법부.png=Ministry_of_Magic.png"
set "마법부_돌로레스엄브릿지.png=Ministry_of_Magic_Dolores_Umbridge.png"
set "마법부_코넬리우스퍼지.png=Ministry_of_Magic_Cornelius_Fudge.png"
set "슬리데린.png=Slytherin.png"
set "슬리데린_그레고리고일.png=Slytherin_Gregory_Goyle.png"
set "슬리데린_드레이코말포이.png=Slytherin_Draco_Malfoy.png"
set "슬리데린_빈센트크레이브.png=Slytherin_Vincent_Crabbe.png"
set "죽음을먹는자들.png=Death_Eaters.png"
set "죽음을먹는자들_루시우스말포이.png=Death_Eaters_Lucius_Malfoy.png"
set "죽음을먹는자들_벨라트릭스레스트랭.png=Death_Eaters_Bellatrix_Lestrange.png"
set "죽음을먹는자들_볼드모트.png=Death_Eaters_Voldemort.png"
set "호그와트.png=Hogwarts.png"
set "호그와트_루베우스해그리드.png=Hogwarts_Rubeus_Hagrid.png"
set "호그와트_미네르바맥고나걸.png=Hogwarts_Minerva_McGonagall.png"
set "호그와트_세베루스스네이프.png=Hogwarts_Severus_Snape.png"
set "호그와트_시빌패트리샤트릴로니.png=Hogwarts_Sibyl_Patricia_Trelawney.png"
set "호그와트_알버스덤블도어.png=Hogwarts_Albus_Dumbledore.png"
set "호그와트_질데로이록허트.png=Hogwarts_Gellert_Grindelwald.png"
set "호그와트_호러스슬러그혼.png=Hogwarts_Horace_Slughorn.png"
set "후플푸프.png=Hufflepuff.png"
set "후플푸프_세드릭디고리.png=Hufflepuff_Cedric_Diggory.png"
set "후플푸프_수잔본즈.png=Hufflepuff_Susan_Bones.png"

REM 번역된 파일 이름으로 변경
for %%f in (*.png) do (
    set "translated_name=!%%f!"
    ren "%%f" "!translated_name!"
)

echo 파일 이름을 번역하였습니다.
pause