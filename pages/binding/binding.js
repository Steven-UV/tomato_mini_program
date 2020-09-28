Page({
  data: {
    account: "",
    password: "",
    isBinding:true
  },
  watchAccount(){
  },
  watchPassword(){
  },
  toGoSignUp(){
    this.setData({isBinding:false})
  },
  toGoBinding(){
    this.setData({isBinding:true})
  },
})