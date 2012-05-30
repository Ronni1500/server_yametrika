��������� ������������ ����������� � ������� ������.�������
===========================================================
� ��������� ������� ��������� ����������� �������� �� ������� ������� ��� JavaScript.
��������:
+ ������ �� ���������� ��������
+ ���������
+ �������� ������
+ �������� � �������� (403, 404, 500)
+ RSS
+ ����� ���������� ��������
+ ����� �������� � ����� ������
+ �������� AJAX-��������
+ � ��.

�����������
============
��������� ���������� ������� �� �������� � <a target="_blank" href="http://help.yandex.ru/metrika/?id=1113052">JavaScript-�����������</a>.
<ul>
    <li>�������� �������� - <a target="_blank" href="">hit()</a></li>
    <li>������� ������ - <a target="_blank" href="">extLink()</a></li>
    <li>�������� ����� - <a target="_blank" href="">file()</a></li>
    <li>��������� ������ - <a target="_blank" href="">params()</a></li>
    <li>������� - <a target="_blank" href="">notBounce()</a></li>
</ul>

<h1>�����������</h1>
<p class="ul">������, ������� ����� ���������� � ������� ��� ��������� ��������:</p>
<ul class="p">
    <li>�������������� ���������</li>
    <li>��� � �������</li>
    <li>���������� ��������</li>
    <li>������ Flash � Silverlight</li>
    <li>��������, ��������� ����</li>
    <li>����� ������</li>
</ul>

<p>���������� ���������� ��������� �� User Agent � IP-������.</p>

<h1>��� ������������</h1>

<p>��������� ��������:</p>
<pre>
<code class="php">
&lt;?php
    //...
    include('yametrika.php');

    $counter = new YaMetrika(123456); // ����� �������� �������
    $counter->hit('http://example.ru/archive.zip');
    //...
?&gt;
</code>
</pre>
<br />
<p>�������� �����:</p>
<pre>
<code class="php">
&lt;?php
    //...
    include('yametrika.php');

    $counter = new YaMetrika(123456); // ����� �������� �������
    $counter->file('http://example.ru/archive.zip');
    //...
?&gt;
</code>
</pre>
<br />
<p>����� ��������� ���������� ���������� ��� ������ RSS:</p>
<pre>
<code class="php">
&lt;?php
    //...
    include('yametrika.php');

    $counter = new YaMetrika(123456); // ����� �������� �������
    // �������� ���������� � ������ "��������� �������", ����� RSS -&gt; User Agent
    $counter->params(Array('RSS' => Array('User Agent' => $_SERVER['HTTP_USER_AGENT'])));
    //...
?&gt;
</code>
</pre>

<br />
<p>������ �� �������� �� ������� robots.txt:</p>
<p>��������� � �������� .htaccess ������ "RewriteRule ^robots.txt$ robots.php" � ������ � ����� ���� robots.php � �����������:</p>
<pre>
<code class="php">
&lt;?php
    require('yametrika.php');

    $counter = new YaMetrika(123456); // ����� �������� �������
    // �������� ���������� � ������ "��������� �������", ����� Robots.txt -&gt; User Agent
    $counter->params(Array('Robots.txt' => Array('User Agent' => $_SERVER['HTTP_USER_AGENT'])));

    $txt = file_get_contents('robots.txt');

    header('Cache-Control: no-cache');
    header('Pragma: no-cache');
    header('Last-Modified: '.gmdate("D, d M Y H:i:s").' GMT');
    header('Content-Type: text/plain');
    print $txt;
?&gt;
</code>
</pre>
<p>.</p>
