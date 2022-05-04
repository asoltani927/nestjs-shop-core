export class Helper {
  public static isDebug() {
    return process.env.APP_DEBUG === 'true';
  }

  static getSharedApiKey() {
    return process.env.SHARED_X_API_KEY ?? 'askjb23';
  }
}
