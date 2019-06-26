# vue使用axios兼容IE10+的文件下载

```
axios.get(Url, { responseType: 'blob' }).then((res) => {
    if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
          const blobObject = new Blob([res.data]);
          window.navigator.msSaveBlob(blobObject, `${name}.xls`);
        } catch (e) {
          console.log(e);
        }
    } else {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.xls`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载完成移除元素
        window.URL.revokeObjectURL(url); // 释放掉blob对象
    }
});
```