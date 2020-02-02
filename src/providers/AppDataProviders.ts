/**
 * AppDataProviders
 * Хранилище провайдеров приложения
 */
import DataProvider from './DataProvider'
import PacientDataProvider from './PacientDataProvider'

export default class AppDataProviders {
  /**
   * Экземпляры провайдеров данных
   */
  private store: DataProvider[]

  constructor() {
    this.store = this.getProviders().map((provider) => new provider())
  }

  /**
   * Возвращает провайдер данных пациента
   */
  get pacient(): PacientDataProvider {
    return this.getInstanceProvider(PacientDataProvider)
  }

  /**
   * Возвращает указанный экземпляр провайдера
   * @param typeProvider
   */
  private getInstanceProvider(typeProvider: any): any | null {
    let items = this.store.filter((provider) => {
      if (provider instanceof typeProvider) {
        return provider
      }
    })
    return items.length > 0 ? items[0] : null
  }

  /**
   * Провайдеры для инициализации
   */
  private getProviders(): any[] {
    return [PacientDataProvider]
  }
}
