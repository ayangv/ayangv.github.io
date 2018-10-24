<?php
$z[0]=Array("global","",65,91);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",137,164);
$z[1][4]['name']="cfg_keywords";
$z[2]=Array("global","",204,234);
$z[2][4]['name']="cfg_description";
$z[3]=Array("include","",240,275);
$z[3][4]['filename']="head.htm";
$z[4]=Array("arclist","\r\n    <figure><img src=\"[field:picname/]\"  alt=\"[field:title/]\">\r\n      <figcaption><strong>[field:title/]</strong>[field:infos function=\"cn_substr(@me,240)\"/]...</figcaption>\r\n    </figure>",341,577);
$z[4][4]['flag']="f";
$z[4][4]['row']="3";
$z[5]=Array("arclist","\r\n      <li>\r\n        <div class=\"arrow_box\">\r\n          <div class=\"ti\"></div>\r\n          <!--Èý½ÇÐÎ-->\r\n          <div class=\"ci\"></div>\r\n          <!--Ô²ÐÎ-->\r\n          <h2 class=\"title\"><a href=\"[field:arcurl/]\" target=\"_blank\">[field:title/]</a></h2>\r\n          <ul class=\"textinfo\">\r\n            <a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\"></a>\r\n            <p>[field:infos function=\"cn_substr(@me,240)\"/]...</p>\r\n          </ul>\r\n          <ul class=\"details\">\r\n            <li class=\"likes\"><a href=\"#\">[field:scores/]</a></li>\r\n            <li class=\"comments\"><a href=\"#\">[field:click/]</a></li>\r\n            <li class=\"icon-time\"><a href=\"#\">[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</a></li>\r\n          </ul>\r\n        </div>\r\n        <!--arrow_box end--> \r\n      </li>\r\n    ",1442,2274);
$z[6]=Array("include","",2324,2360);
$z[6][4]['filename']="right.htm";
$z[7]=Array("include","",2424,2461);
$z[7][4]['filename']="footer.htm";

?>