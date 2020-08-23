"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnowflakeProfile = exports.getStoredSnowflakeProfile = void 0;
const Configstore = __importStar(require("configstore"));
const Inquirer = __importStar(require("./inquirer"));
const conf = new Configstore.default('structure-profile');
/*let octokit;
export const getInstance = () => {
  return octokit;
}*/
exports.getStoredSnowflakeProfile = () => {
    return {
        account: conf.get('snowflake.account'),
        username: conf.get('snowflake.username'),
        password: conf.get('snowflake.password')
    };
};
exports.getSnowflakeProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const creds = yield Inquirer.askSnowflakeCredentials();
        if (creds.hasSnowflake && creds.account && creds.username && creds.password) {
            conf.set('snowflake.account', creds.account);
            conf.set('snowflake.username', creds.username);
            conf.set('snowflake.password', creds.password);
            return creds;
        }
        else {
            throw new Error("Valdiation Error: Profile was not generated");
        }
    }
    catch (err) {
        throw new Error(err);
    }
});
//# sourceMappingURL=profile.js.map