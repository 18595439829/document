<template>
  <div :class="$style['container']">
    <div :class="$style['top']">
      <div :class="$style['content']">
        <label :class="$style['upload']" :for="uploadID">
          <div :class="$style['button']">
            <svg :class="$style['iconFont']" aria-hidden="true">
              <use xlink:href="#iconshangchuan" />
            </svg>
            点击上传
          </div>
        </label>
        <input
          v-show="false"
          :id="uploadID"
          ref="upload"
          unselectable="on"
          :class="$style['input']"
          type="file"
          :accept="accept"
          @change="onChange"
        >
      </div>
      <div :class="$style['accept']">
        文件格式支持: {{ accept }}
      </div>
    </div>
    <div :class="$style['bottom']">
      <div
        v-for="(item, index) in fileArray"
        :key="index"
        :class="{ fileList: true, nameHover: index === fileIndex ? true : false }"
        @mouseenter="mourseEnter(index)"
        @mouseleave="mourseLeave(index)"
      >
        <div :class="['fileName']">
          <svg :class="{ iconfont: true, iconHover: index === fileIndex ? true : false }" aria-hidden="true">
            <use xlink:href="#iconfujian" />
          </svg>
          <span>
            {{ item.originName }}
          </span>
        </div>
        <div :class="{ fileCancel: true }" @click="removeFile(index)">
          <svg :class="{ iconfont: true, iconHover: index === fileIndex ? true : false }" aria-hidden="true">
            <use xlink:href="#iconclose" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Upload',
  props: {
    accept: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      fileArray: [],
      fileIndex: null,
      uploadID: '',
    };
  },
  created() {
    this.uploadID = `upload${Math.floor(Math.random() * 10000)}`;
  },
  methods: {
    onChange() {
      const params = this.$refs.upload.files['0'];
      if (this.checkFileType(this.$refs.upload.value)) {
        let base64 = null;
        const reader = new FileReader();
        reader.readAsDataURL(params);
        reader.onload = (e) => {
          const arr = e.target.result.split('base64,');
          [, base64] = arr;
          this.fileArray.push({
            originName: params.name,
            base64,
          });
          this.$emit('on-change', { file: this.fileArray, name: params.name });
        };
      } else {
        this.$emit('on-error', { name: params.name, file: params });
      }
      this.$nextTick(() => {
        this.$refs.upload.value = null;
      });
    },
    // 将文件转化为base64
    fileToBase64(file) {
      let base = null;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target.result);
        base = e.target.result;
        // this.base64ToFile(e.target.result);
      };
      return base;
    },
    // 将base64转化为文件
    base64ToFile(base) {
      const arr = base.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      // eslint-disable-next-line no-plusplus
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
          const blobObject = new Blob([u8arr], { type: mime });
          window.navigator.msSaveBlob(blobObject, 'aaa.xls');
        } catch (e) {
          console.log(e);
        }
      } else {
        const url = window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'aaa.xls');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载完成移除元素
        window.URL.revokeObjectURL(url); // 释放掉blob对象
      }
    },
    // 判断当前选择文件是否符合格式
    checkFileType(name) {
      const arrAccept = this.accept.split(',');
      const arrName = name.split('.');
      const nameType = arrName[arrName.length - 1];
      return arrAccept.some(item => item.indexOf(nameType) !== -1);
    },
    mourseEnter(index) {
      this.fileIndex = index;
    },
    mourseLeave() {
      this.fileIndex = null;
    },
    removeFile(index) {
      this.fileArray.splice(index, 1);
    },
  },
};
</script>
<style lang="less">
.fileList {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666666;
  height: 24px;
  line-height: 24px;
}
.fileName {
  margin-left: 8px;
  width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fileCancel {
  margin-right: 6px;
}
.iconfont {
  width: 10px;
  height: 10px;
  cursor: pointer;
  fill: #666666;
}
.nameHover {
  color: #0e74be;
  background: #edf6ff;
}
.iconHover {
  fill: #0e74be;
}
</style>

<style lang="less" module>
@common-border: 1px solid #666666;
@common-border-radius: 2px;
.container {
  .top {
    display: flex;
    align-items: center;
    .content {
      width: 90px;
      height: 28px;
      overflow: hidden;
      position: relative;
      .upload {
        position: absolute;
        z-index: 1000;
        color: #999999;
        width: 90px;
        height: 28px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
        font-size: 14px;
        box-sizing: border-box;
        color: #666666;
        outline: 0;
        border: 0;
        &:hover {
          opacity: 0.9;
        }
        .button {
          padding: 3px 7px;
          border: @common-border;
          border-radius: @common-border-radius;
          .iconFont {
            width: 14px;
            height: 14px;
            cursor: pointer;
            fill: #666666;
            vertical-align: middle;
          }
        }
      }
      .input {
        opacity: 0;
        position: absolute;
        top: 30px;
      }
    }
    .accept {
      width: 140px;
      color: #999999;
      font-family: 'MicrosoftYahei', 'HelveticaNeue';
      font-size: 12px;
      margin-left: 11px;
      white-space: nowrap;
    }
  }
}
</style>
