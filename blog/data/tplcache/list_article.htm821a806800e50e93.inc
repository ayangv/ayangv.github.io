<?php
$z[0]=Array("field","",87,106);
$z[0][4]['name']="title";
$z[1]=Array("global","",107,133);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",184,213);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",257,316);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",325,360);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",552,581);
$z[5][4]['name']="position";
$z[6]=Array("list","\r\n            <p class=\"ptit\">\r\n              <b>\r\n                <a href=\"[field:arcurl/]\" target=\"_blank\" title=\"[field:title/]\">\r\n                  [field:title/]\r\n                </a>\r\n              </b>\r\n            </p>\r\n            <p class=\"ptime\">\r\n              发布时间：[field:pubdate function=\"MyDate('Y-m-d',@me)\"/] 作者：[field:writer/]\r\n              分类：[field:typename/]\r\n            </p>\r\n            <a href=\"[field:arcurl/]\" target=\"_blank\" title=\" li列表在网页中常见应用例举（二）\">\r\n              <img src=\"[field:picname/]\" class=\"imgdow\" alt=\" [field:title/]\">\r\n            </a>\r\n            <p class=\"pcon\">\r\n              [field:infos function=\"cn_substr(@me,180)\"/]...\r\n              <a href=\"[field:arcurl/]\" target=\"_blank\" title=\" li列表在网页中常见应用例举（二）\">\r\n                详细信息\r\n              </a>\r\n            </P>\r\n            <div class=\"line\">\r\n            </div>\r\n            ",628,1595);
$z[6][4]['pagesize']="20";
$z[7]=Array("pagelist","",1656,1725);
$z[7][4]['listitem']="info,index,end,pre,next,pageno";
$z[7][4]['listsize']="";
$z[8]=Array("include","",1798,1834);
$z[8][4]['filename']="right.htm";
$z[9]=Array("include","",1915,1952);
$z[9][4]['filename']="footer.htm";

?>