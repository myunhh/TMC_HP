@echo off
setlocal enabledelayedexpansion

REM ���� �̸��� ������ ���� ����
set "�׸��ɵ���.png=Gryffindor.png"
set "�׸��ɵ���_�׺��չ���.png=Gryffindor_Neville_Longbottom.png"
set "�׸��ɵ���_������.png=Gryffindor_Ron_Weasley.png"
set "�׸��ɵ���_�ظ�����.png=Gryffindor_Harry_Potter.png"
set "�׸��ɵ���_�츣�̿´��׷�����.png=Gryffindor_Hermione_Granger.png"
set "����Ŭ��.png=Ravenclaw.png"
set "����Ŭ��_�糪�����.png=Ravenclaw_Luna_Lovegood.png"
set "����Ŭ��_��ì.png=Ravenclaw_Cho_Chang.png"
set "������.png=Ministry_of_Magic.png"
set "������_���η������긴��.png=Ministry_of_Magic_Dolores_Umbridge.png"
set "������_�ڳڸ��콺����.png=Ministry_of_Magic_Cornelius_Fudge.png"
set "��������.png=Slytherin.png"
set "��������_�׷�������.png=Slytherin_Gregory_Goyle.png"
set "��������_�巹���ڸ�����.png=Slytherin_Draco_Malfoy.png"
set "��������_��Ʈũ���̺�.png=Slytherin_Vincent_Crabbe.png"
set "�������Դ��ڵ�.png=Death_Eaters.png"
set "�������Դ��ڵ�_��ÿ콺������.png=Death_Eaters_Lucius_Malfoy.png"
set "�������Դ��ڵ�_����Ʈ��������Ʈ��.png=Death_Eaters_Bellatrix_Lestrange.png"
set "�������Դ��ڵ�_�����Ʈ.png=Death_Eaters_Voldemort.png"
set "ȣ�׿�Ʈ.png=Hogwarts.png"
set "ȣ�׿�Ʈ_�纣�콺�ر׸���.png=Hogwarts_Rubeus_Hagrid.png"
set "ȣ�׿�Ʈ_�̳׸��ٸư���.png=Hogwarts_Minerva_McGonagall.png"
set "ȣ�׿�Ʈ_�����罺��������.png=Hogwarts_Severus_Snape.png"
set "ȣ�׿�Ʈ_�ú���Ʈ����Ʈ���δ�.png=Hogwarts_Sibyl_Patricia_Trelawney.png"
set "ȣ�׿�Ʈ_�˹���������.png=Hogwarts_Albus_Dumbledore.png"
set "ȣ�׿�Ʈ_�������̷���Ʈ.png=Hogwarts_Gellert_Grindelwald.png"
set "ȣ�׿�Ʈ_ȣ����������ȥ.png=Hogwarts_Horace_Slughorn.png"
set "����Ǫ��.png=Hufflepuff.png"
set "����Ǫ��_���帯���.png=Hufflepuff_Cedric_Diggory.png"
set "����Ǫ��_���ܺ���.png=Hufflepuff_Susan_Bones.png"

REM ������ ���� �̸����� ����
for %%f in (*.png) do (
    set "translated_name=!%%f!"
    ren "%%f" "!translated_name!"
)

echo ���� �̸��� �����Ͽ����ϴ�.
pause