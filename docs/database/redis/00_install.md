---
title: Redis安装
author: yyq
date: '2022-07-13'
---




## 安装
1. 安装 gcc tcl
   yum install -y gcc tcl
2. 解压 redis
   tar -zxvf redis-6.2.6.tar.gz
3. 进入 redis 目录中，编译安装
   cd redis-6.2.6
   make && make install
   默认安装在 /usr/local/bin 目录下
## 配置
配置文件在 /opt/redis-6.2.6/redis.conf
* 监听地址，0.0.0.0 表示任意ip都可访问此服务
bind 0.0.0.0
* 守护进程
daemonize yes
* 密码
requirepass 123123
* 端口
port 6379
* 工作目录
dir .
* 数据库数量，redis 默认有16个数据库
databases 1
* 最大使用内存
maxmemory 512mb
* 日志文件,在工作目录生成‘
logfile "redis.log"

## 连接
默认启动
执行 redis-server
前台启动redis，不推荐
指定配置文件启动
通过 redis.conf 配置文件启动
redis-server redis.conf
设置开机自启
1. 新建系统服务文件
   vim /etc/systemd/system/redis.service
2. 添加以下内容
   [Unit]
   Description=redis-server
   After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /usr/local/bin/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
3. 重载配置服务
   systemctl daemon-reload
4. 设置服务开机自启
   systemctl enable redis


连接
● 连接redis，显示输入密码
redis-cli -h 127.0.0.1 -p 6379 -a password
● 连接redis，不显示输入密码
redis-cli -h 127.0.01 -p 6379
auth password
● 测试连通性（redis 会回复 pong）
ping 