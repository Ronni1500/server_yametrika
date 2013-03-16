var YaMetrika = require('yametrika');
    
counter = new YaMetrika(123456); // ����� �������� �������
counter.hit(); // �������� URL � referer ������� �� ���������

// �������� ����
counter.hit('http://example.ru', 'Main page', 'http://ya.ru');
counter.hit('/index.html', 'Main page', '/back.html');

// �������� ���� ������ � ����������������� �����������
counter.hit('http://example.ru', 'Main page', 'http://ya.ru', myParams);

// �������� ���� ������ � ����������� ������� � � �������� �� ����������
counter.hit('http://example.ru', 'Main page', 'http://ya.ru', myParams, 'noindex');

// ���������� ����
counter.reachGoal('back');

// ������� ������ - ����� "������� ������"
counter.extLink('http://yandex.ru');

// �������� ����� - ����� "�������� ������"
counter.file('http://example.ru/file.zip');
counter.file('/file.zip');

// �������� ���������������� ���������� - ����� "��������� �������"
counter.params({level1: {level2: 1});

// �� �����
counter.notBounce();