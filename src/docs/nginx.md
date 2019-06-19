# 使用nginx将自己的vue项目部署到服务器上

- 第一步:下载安装nginx  官网: *[http://nginx.org/en/](http://nginx.org/en/)*

- 第二步:将自己的vue项目打包为dist文件夹;

- 第三步:解压下载的nginx文件夹,使用cmd进入到nginx文件夹下,使用指令start  nginx启动nginx服务器;

- 第四步:浏览器输入localhost:80,查看nginx是否启动;

- 第五步:进入nginx/html文件夹下,删除50.html和index.html文件,将vue项目打包玩的dist文件夹下的所有文件复制到nginx/html文件夹下;

- 第六步:刷新浏览器,项目启动成功;

## 进阶

### 监听不同端口部署不同项目
1.在同一域名下监听不同端口,启动不同项目;

- 第一步:将不同的项目打包dist,并重命名为app1,   app2 ...

- 第二步:将项目文件夹移到nginx/html文件夹下;

- 第三步:打开nginx/conf/nginx.conf文件, 找到
```
server {

      listen      8001;   

    #   监听的端口号;

      server_name  localhost;

     #  服务器地址:可以使ip,对应hosts文件

      location / {

     #   localhost:8001 浏览器访问根路径,不可修改

          root  html/app1;

     #   指定项目所在路径html/项目名字

          index  index.html index.htm;

     #    指定项目入口文件,一般默认index.html

     }

    location = /app1/index.html {

    #     浏览器访问地址,指向项目文件夹下的index.html

            root  html/emms;

            index  index.html index.htm;

        }

  }
server {

      listen      8002;   

    #   监听的端口号;

      server_name  localhost;

     #  服务器地址:可以使ip,对应hosts文件

      location / {

     #   localhost:8002 浏览器访问根路径,不可修改

          root  html/app2;

     #   指定项目所在路径html/项目名字

          index  index.html index.htm;

     #    指定项目入口文件,一般默认index.html

     }

location = /app2/index.html {

    #     浏览器访问地址,指向项目文件夹下的index.html

            root  html/app2;

            index  index.html index.htm;

        }

    }
```


需要几个项目复制几个,修改为对应的项目名称
- 第四步: nginx -s reload 重载nginx配置文件,
          nginx -s stop  停止nginx,
          nginx -s stop  重启nginx


###监听同一端口,不同路径部署多个项目
1. 将vue项目配置文件下的publicPath修改为: '/项目名称/'
```
// vue.config.js
module.exports = {
  publicPath: `/app1/`,  // 打包后的文件路径
  outputDir: `dist/app1`, // 打包文件放置在dist文件夹下的app1文件夹
};

```
2. 配置nginx.conf文件,路径同上
```
server {
      listen      8001;   
     #   监听的端口号;
      server_name  localhost;
     #  服务器地址:可以使ip,对应hosts文件
     root  /html/;   #文件根路径   

     #  第一个项目app1
     location ^~/app1/ {
         try_files $uri /app1/index.html;
          #访问根路径下的app1/index.html入口文件
     }

     #第二个项目app2
     location ^~/app2/ {
         try_files $uri /app2/index.html;
          #访问根路径下的app2/index.html入口文件
     }
  }
```
3. 其他操作同上