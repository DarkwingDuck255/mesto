export default class UserInfo {
    constructor({name, job}) {
        this._user = name
        this._info = job
    }

    getUserInfo() {
        return {
          name: this._user.textContent,
          job: this._info.textContent
        }
      }

      setUserInfo(userInfo) {
        this._user.textContent = userInfo.username
        this._info.textContent = userInfo.job
      }
}



