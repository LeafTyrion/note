(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{413:function(e,r,s){"use strict";s.r(r);var n=s(1),i=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),r("ol",[r("li",[e._v("安装 gcc tcl\nyum install -y gcc tcl")]),e._v(" "),r("li",[e._v("解压 redis\ntar -zxvf redis-6.2.6.tar.gz")]),e._v(" "),r("li",[e._v("进入 redis 目录中，编译安装\ncd redis-6.2.6\nmake && make install\n默认安装在 /usr/local/bin 目录下")])]),e._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),r("p",[e._v("配置文件在 /opt/redis-6.2.6/redis.conf")]),e._v(" "),r("ul",[r("li",[e._v("监听地址，0.0.0.0 表示任意ip都可访问此服务\nbind 0.0.0.0")]),e._v(" "),r("li",[e._v("守护进程\ndaemonize yes")]),e._v(" "),r("li",[e._v("密码\nrequirepass 123123")]),e._v(" "),r("li",[e._v("端口\nport 6379")]),e._v(" "),r("li",[e._v("工作目录\ndir .")]),e._v(" "),r("li",[e._v("数据库数量，redis 默认有16个数据库\ndatabases 1")]),e._v(" "),r("li",[e._v("最大使用内存\nmaxmemory 512mb")]),e._v(" "),r("li",[e._v('日志文件,在工作目录生成‘\nlogfile "redis.log"')])]),e._v(" "),r("h2",{attrs:{id:"连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[e._v("#")]),e._v(" 连接")]),e._v(" "),r("p",[e._v("默认启动\n执行 redis-server\n前台启动redis，不推荐\n指定配置文件启动\n通过 redis.conf 配置文件启动\nredis-server redis.conf\n设置开机自启")]),e._v(" "),r("ol",[r("li",[e._v("新建系统服务文件\nvim /etc/systemd/system/redis.service")]),e._v(" "),r("li",[e._v("添加以下内容\n[Unit]\nDescription=redis-server\nAfter=network.target")])]),e._v(" "),r("p",[e._v("[Service]\nType=forking\nExecStart=/usr/local/bin/redis-server /usr/local/bin/redis.conf\nPrivateTmp=true")]),e._v(" "),r("p",[e._v("[Install]\nWantedBy=multi-user.target\n3. 重载配置服务\nsystemctl daemon-reload\n4. 设置服务开机自启\nsystemctl enable redis")]),e._v(" "),r("p",[e._v("连接\n● 连接redis，显示输入密码\nredis-cli -h 127.0.0.1 -p 6379 -a password\n● 连接redis，不显示输入密码\nredis-cli -h 127.0.01 -p 6379\nauth password\n● 测试连通性（redis 会回复 pong）\nping")])])}),[],!1,null,null,null);r.default=i.exports}}]);