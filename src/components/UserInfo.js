export default class UserInfo {
  constructor({name, job, avalink}) {
      this._user = name
      this._info = job
      this._avatar = avalink
    }

  getUserInfo() {
      return {
        name: this._user.textContent,
        job: this._info.textContent
      }
  }

  setUserInfo(userInfo) {
    if (userInfo.name) {
      this._user.textContent = userInfo.name
    }
    if (userInfo.about) {
      this._info.textContent = userInfo.about
    }
  }

  setAvatar(data) {
    this._avatar.src = data
  }


}