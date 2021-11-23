<template>
  <div>
    <h1>七牛云（Kodo）</h1>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="accessKey">
        <a-input
          v-decorator="[
            'note',
            {
              rules: [
                { required: true, message: 'Please input your accessKey!' },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="secretKey">
        <a-input
          v-decorator="[
            'note2',
            {
              rules: [
                { required: true, message: 'Please input your secretKey!' },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> Submit </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { app, remote } from 'electron'

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const Store = require('electron-store')

          const store = new Store()
          // 存储信息
          store.set('foo', 'bar')
          // 根据process.type来分辨在哪种模式使用哪种模块
          const APP = process.type === 'renderer' ? remote.app : app
          // 获取electron应用的用户目录
          const STORE_PATH = APP.getPath('userData')
          console.log(STORE_PATH)
          // 显示存储的信息
          console.log(store.get('foo'))
        }
      })
    }
  }
}
</script>
