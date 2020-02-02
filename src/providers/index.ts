import AppDataProviders from './AppDataProviders'

export default class Providers {
  private dataProviders: AppDataProviders

  constructor() {
    if (this.providers) {
      this.dataProviders = this.providers
    } else {
      this.dataProviders = new AppDataProviders()
    }
  }

  /**
   * Возвращает провайдеры данных
   */
  get providers(): AppDataProviders {
    return this.dataProviders
  }
}
