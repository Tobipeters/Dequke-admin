import { userLogin, apiHeader } from "../apiConstants/ApiConstant";
import { apiService } from "../apiService/ApiService";
import EncryptDecrypt from "../utils/EncryptDecrypt";

export class userService {
  constructor() {
    this.http = new apiService();
    this.encrypter = new EncryptDecrypt();
  }

  static login = (userLogin, parameters) => {
    return this.http.sendPost(userLogin, parameters);
  };

  static AuthToken() {
    let token_count = localStore.Retrieve(userService.token_count);
    let encrypter = new EncryptDecrypt();
    // When each token member is fetched and decrypted, Then It will
    // Be concatenated here
    let tokenRebuild = "";
    for (let i = 0; i < token_count; ++i) {
      let encryptkey = localStore.Retrieve(userService.token_name + i);
      let realKey = encrypter.decrypt(encryptkey);
      tokenRebuild = tokenRebuild + realKey;
    }
    return tokenRebuild;
  }
}

//The name to be used to save all api tokens in local storage
userService.token_name = "sys_tok_";
//The name used to save the amount token splits in the local storage
userService.token_count = "sys_tok_count";
//The refresh token name used to save in localstorage
userService.refresh_token_name = "sys_refre_";
//The name used to save the number of refresh token splits in the local storage
userService.refresh_token_count = "sys_refre_count";
//The name used to save The user ID is in local storage
userService.user_key = "key_fragment";

//I save the last time all users list was fetched from db, so I can fethc it again
//When it is passed five minutes
userService.lastFetchUsersTime = null;
