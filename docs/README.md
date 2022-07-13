---
title: Redis安装
author: yyq
date: '2022-07-13'
---



# 安装配置

## 安装testasssa

1. 安装 gcc tcl
   `yum install -y gcc tcl`
2. 解压 redis
   `tar -zxvf redis-6.2.6.tar.gz`
3. 进入 redis 目录中，编译安装
   `cd redis-6.2.6`
   `make && make install`
   默认安装在 /usr/local/bin 目录下

## 配置

配置文件在 /opt/redis-6.2.6/redis.conf

```plain
# 监听地址，0.0.0.0 表示任意ip都可访问此服务
bind 0.0.0.0
# 守护进程
daemonize yes
# 密码
requirepass 123123
# 端口
port 6379
# 工作目录
dir .
# 数据库数量，redis 默认有16个数据库
databases 1
# 最大使用内存
maxmemory 512mb
# 日志文件,在工作目录生成‘
logfile "redis.log"
```

# 启动 redis

## 默认启动

执行 `redis-server`
前台启动redis，不推荐

## 指定配置文件启动

通过 redis.conf 配置文件启动
`redis-server redis.conf`

## 设置开机自启

1. 新建系统服务文件
   `vim /etc/systemd/system/redis.service`
2. 添加以下内容

```plain
[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/bin/redis-server /usr/local/bin/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

1. 重载配置服务
   `systemctl daemon-reload`
2. 设置服务开机自启
   `systemctl enable redis`

# 命令行操作

## 连接

- 连接redis，显示输入密码
  `redis-cli -h 127.0.0.1 -p 6379 -a password`
- 连接redis，不显示输入密码
  `redis-cli -h 127.0.01 -p 6379`
  `auth password`
- 测试连通性（redis 会回复 pong）
  `ping`

# 相关知识点

## 数据类型

### String

String 是 Redis 中最基本的数据类型，最大可存储 512M 的字符串。

String 的底层数据结构为简单动态字符串（Simple Dynamic String，缩写为SDS），类似于 java 的 ArrayList，分配冗余的空间来减少内存的频繁分配

当字符串大小小于1M时，扩容会加倍现有的空间；当大于1M时，每次扩容只会增减1M的大小

常用命令：

### List

底层结构其实是双向链表，插入、删除元素较容易，但是随机访问较慢

### Set

底层是Hash

### Hash

底层数据结构是数组+链表

### Zset

### BitMaps

### HyperLogLog

### Geospatial

# 事务操作

## 开启事务

### Multi

组队命令

### Exec

执行组队中的命令



## 事务冲突

### 悲观锁

### 乐观锁

CAS叶亚桥



# 持久化

redis 有两种持久化数据的方式，分别是 RDB 和 AOF

## RDB

Redis Database，在指定的时间间隔内将内存中的数据集快照写入磁盘

写时复制技术

## AOF

Append Only File

记录redis中所有写入的指令



# 主从复制

主写入，从读取



# 缓存读写策略

## 旁路缓存

写：先更新数据库，然后删除对应的缓存

读：先读缓存，若读取不到则去读数据库，然后将内容更新到缓存



注意：

- 先删除缓存再更新数据库会导致数据库不一致的问题，因为数据库的写入速度远远小于缓存的读取速度，先写后删能极大减少数据库不一致的概率
- 强一致的常见需要在更新数据库的同时去更新缓存，需要借助分布式锁

## 读写穿透

写：先查cache，cache中不存在，直接更新db；若存在，则更新cache和DB

读：先读cache，若不存在，则读DB，然后将数据更新到DB

## 异步缓存写入

在读写穿透的基础上，cache 操作更新DB时采用异步的方式

有极大可能造成读写不一致问题

# 常见问题

## 缓存穿透

由于服务器中的压力变大、redis 中的缓存数据更新不及时，无法在redis 中获取相应的数据，导致请求被直接发送到数据库，导致数据库崩溃，这种情况称为缓存穿透

## 缓存击穿

redis 中某个key 过期，同时出现大量访问次key的请求，导致数据库访问量急剧增加

## 缓存雪崩

# 分布式锁

## 设置过期时间

## 使用UUID防止误删 m

## 使用 Lua 脚本实现原子性