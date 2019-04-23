<template>
  <div class="main">
    <h1>{{this.$router.history.current.name.slice(3)}}</h1>
    <div class="content">
        <div class="inline">
        <h2>axios——get</h2>
        <p>{{ msg }}</p>
        <button @click="getRequest" class="button">登录</button>
        <button @click="logout" class="button">注销</button>
        <div class="divBox">
          <p>
            用户名：<input type="text" name="uname" v-model="username">
            密码：<input type="password" name="upwd" v-model="password">
          </p>
          <div class="welcome">
            <span>欢迎 {{ new_name }}</span>
          </div>
          <div class="line">
            <h2 v-if="0">{{ douban.title }}</h2>
            <ul>
              <li v-for="subject in douban.subjects" :key="subject.id">
                <div>
                  <p>{{ subject.title }} {{ subject.year }}</p>
                </div>
                <div>豆瓣评分: {{ subject.rating.average }}</div>
                <img :src="subject.images.small" :alt="subject.title">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="inline">
        <h2>axios——post</h2>
        <p>{{ msg }}</p>
        <button @click="postRequest" class="button">注册</button>
        <div class="divBox divPost">
          <p>
            登录名称：<input type="text" name="uname" v-model="old_name" @blur="check_uname">
            <span>{{ tipList.info1 }}</span>
          </p>
          <p>
            登录密码：<input type="password" name="upwd" v-model="old_upwd" @blur="check_upwd">
            <span>{{ tipList.info2 }}</span>
          </p>
          <p>
            重复密码：<input type="password" name="cpwd" v-model="cpwd" @blur="check_cpwd">
            <span>{{ tipList.info3 }}</span>
          </p>
          <p>
            电子邮箱：<input type="email" name="email" v-model="formData.email">
          </p>
          <p>
            联系方式：<input type="text" name="phone" v-model="formData.phone">
          </p>
          <p>
            真实姓名：<input type="text" name="user_name" v-model="formData.user_name">
          </p>
          <p>
            用户性别：
            <select name="gender" v-model="formData.gender">
              <option value="0">女</option>
              <option value="1">男</option>
              <option value="2">保密</option>
            </select>
          </p>
          <p class="content">
            <button class="button" @click="postRequest">注册</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'

export default {
  name: 'UseAxios',
  data () {
    return {
      msg: 'Hello Axios!',
      // 登录
      new_name: '',
      username: '',
      password: '',
      douban: {},
      // 注册
      old_name: '',
      old_upwd: '',
      cpwd: '',
      formData: {
        uname: '',
        upwd: '',
        email: '123456@qq.com',
        phone: 132345345456,
        user_name: 'ljs',
        gender: '1'
      },
      tipList: {
        info1: '',
        info2: '',
        info3: ''
      },
      status: true
    }
  },
  methods: {
    getRequest () {
      let loginUrl = this.TEST + '/users/signin.php'
      // 测试网站：http://localhost:8090/test/data/users/signin.php?uname=nangongpo&upwd=123456
      this.isLogin()
      if (this.status) {
        if (this.username && this.password) {
          this.$axios.get(loginUrl, {
            params: {
              uname: this.username,
              upwd: this.password
            }
          })
            .then(res => {
              if (res.data.ok === 0) {
                alert(res.data.msg)
                this.new_name = res.data.username
                this.getMovie()
              } else if (res.data.ok === 1) {
                alert(res.data.msg)
                this.password = ''
              }
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          alert('用户名或密码不能为空')
        }
      } else {
        alert('请不要重复登录！')
      }
    },
    getMovie () {
      // movie/top250?start=25&count=25   豆瓣API
      let movieUrl = this.HOST + '/movie/top250'
      this.$axios({
        method: 'get',
        url: movieUrl,
        params: {
          count: 25,
          start: 25
        }
      })
        .then(res => {
          this.douban = res.data
        })
        .catch(error => {
          alert(error)
        })
    },
    logout () {
      let logoutUrl = this.TEST + '/users/signout.php'
      this.isLogin()
      if (!this.status) {
        this.$axios.get(logoutUrl)
          .then(res => {
            if (res.data.ok === 0) {
              alert(res.data.msg)
              this.douban = {}
              this.new_name = ''
              this.username = ''
              this.password = ''
            } else if (res.data.ok === 1) {
              alert(res.data.msg)
            }
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        alert('您还没有登录！')
      }
    },
    postRequest () {
      let registerUrl = this.TEST + '/users/register.php'
      if (this.formData.old_name === '') {
        alert('用户名不能为空')
      } else if (this.tipList.info1 === '用户名已存在') {
        alert('用户名已存在,请更换')
      } else if (this.formData.old_upwd === '') {
        alert('密码不能为空')
      } else {
        this.$axios({
          method: 'post',
          url: registerUrl,
          data: qs.stringify(this.formData),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .then(res => {
            if (res.data.ok === 0) {
              alert(res.data.msg)
              this.username = this.formData.uname
              this.formData.uname = ''
              this.formData.upwd = ''
              this.cpwd = ''
              this.tipList = {
                info1: '',
                info2: '',
                info3: ''
              }
            } else if (res.data.ok === 1) {
              alert(res.data.msg)
            }
          })
          .catch(error => {
            alert(error)
          })
      }
    },
    check_uname () {
      let checkUnameUrl = this.TEST + '/users/checkUname.php'
      this.$axios({
        method: 'post',
        url: checkUnameUrl,
        data: qs.stringify({uname: this.old_name}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
        .then(res => {
          if (res.data.ok === 0) {
            this.formData.uname = this.old_name
            this.tipList.info1 = res.data.msg
          } else if (res.data.ok === 1) {
            this.formData.uname = ''
            this.tipList.info1 = res.data.msg
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    check_upwd () {
      if (this.old_upwd === '') {
        this.tipList.info2 = '密码不能为空'
      } else {
        this.tipList.info = '通过'
      }
    },
    check_cpwd () {
      if (this.cpwd === '') {
        this.tipList.info3 = '密码不能为空'
      } else if (this.cpwd === this.old_upwd) {
        this.tipList.info3 = '通过'
        this.formData.upwd = this.cpwd
      } else {
        this.tipList.info3 = '两次输入的密码不一致'
        this.cpwd = ''
      }
    },
    isLogin () {
      let isloginUrl = this.TEST + '/users/islogin.php'
      this.$axios.get(isloginUrl)
        .then(res => {
          if (res.data.ok === 1) {
            // 用户已登录
            this.new_name = res.data.uname
            this.status = false
          } else if (res.data.ok === 0) {
            // 用户没登录
            this.status = true
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    // 页面一加载就发送请求
    this.isLogin()
    if (this.status) {
      this.new_name = ''
      alert('请登录后查看！')
    } else {
      alert('欢迎回来' + this.new_name)
      this.getMovie()
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: decimal-leading-zero;
  text-align: center;
}
ul li p {
  text-align: left;
}
.welcome {
  height: 50px;
  position: relative;
}
.welcome span {
  width: 150px;
  position: absolute;
  right: 100px;
}
.line {
  border-top: 1px solid gray;
}
.line h2 {
  text-align: center;
}
.divBox {
  width: 400px;
  min-height: 300px;
  border: 2px solid gray;
  text-align: left;
  box-sizing: border-box;
}
.divPost {
  padding-left: 10px;
}
.divPost p span {
  width: 200px;
  height: 23px;
}
.content {
  display: flex;
  justify-content: center;
}
.inline {
  display: inline-block;
  margin: 0 10px;
  padding: 0;
}
</style>
