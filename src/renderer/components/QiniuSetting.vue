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
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
