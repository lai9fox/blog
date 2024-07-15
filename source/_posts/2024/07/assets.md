---
title: 代理
date: 2024-07-15 21:37:29
tags:
---
代理是一种部署于客户端和服务器之间的服务器，代替客户端或者服务器收发信息。

代理有两种类型。

### 正向代理

在客户端部署服务器，代替客户端向外部网络发送和接收信息。

![CleanShot 2024-06-15 at 20.33.48@2x](CleanShot%202024-06-15%20at%2020.33.48@2x.png)

用途：

- 突破访问限制。一些不能直接访问的网站，可以通过代理服务器访问。
- 提高访问速度。代理服务器一般会有一个缓冲区，请求的响应结果可以保存在缓冲区中，下次访问相同的内容时，直接将缓冲区的数据返还给客户端。
- 隐藏客户端的 `IP` 。访问目标服务器的源 `IP` 地址为代理服务器的 `IP` 地址。

### 反向代理

在服务端部署服务器，让代理服务器代替实际的业务服务器接收和发送信息。

![CleanShot 2024-06-15 at 20.02.04@2x](CleanShot%202024-06-15%20at%2020.02.04@2x.png)

用途：

- 隐藏服务器真实IP。
- 负载均衡。代理服务器可以将对业务服务器的请求根据预设算法分发到不同的服务器上。
- 提高访问速度。
get