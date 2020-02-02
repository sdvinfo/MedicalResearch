import { remote } from 'electron'
import Datastore from 'nedb'
import path from 'path'

/**
 * DataProvider
 * Базовый провайдер данных
 * Данный провайдер использует NoSQL-embedded решение "NeDB"
 * https://github.com/louischatriot/nedb
 */
const dbPath = remote.app.getPath('userData')

// DB in:  /Users/sdv/Library/Application Support/sdv-medical-research/database.db

export default abstract class DataProvider {
  /**
   * Путь до директории хранилища БД
   */
  static readonly ROOT_STORE = path.normalize(dbPath + '/db/')

  /**
   * Datastore
   */
  protected store: Datastore

  constructor(storeName = 'data') {
    this.store = new Datastore({
      filename: DataProvider.ROOT_STORE + storeName + '.db',
      autoload: false,
      timestampData: true
    })

    this.store.loadDatabase((err: any) => {
      this.onLoadStore(err)
    })
  }

  /**
   * Очищает хранилище
   * Подробнее: https://github.com/louischatriot/nedb#persistence
   */
  protected vacuumStore(): void {
    if (this.store instanceof Datastore) {
      this.store.persistence.compactDatafile()
    }
  }

  /**
   * Обработчик загрузки хранилища
   */
  protected abstract onLoadStore(err: any): void
}
