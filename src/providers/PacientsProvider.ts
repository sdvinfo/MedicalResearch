import { remote } from 'electron'
import Datastore from 'nedb'
import path from 'path'

import Pacient from '../models/Pacient.model'

/**
 * DataProvider
 * Базовый провайдер данных
 * Данный провайдер использует NoSQL-embedded решение "NeDB"
 * https://github.com/louischatriot/nedb
 */

export default class PacientsProvider {
  /**
   * Путь до директории хранилища БД
   */
  static readonly ROOT_STORE = path.join(
    remote.app.getPath('documents'),
    '/db/pacients.db'
  )

  /**
   * Datastore
   */
  protected store: Datastore

  constructor() {
    this.store = new Datastore({
      // filename: PacientsProvider.ROOT_STORE,
      filename: './pacient2.db',
      autoload: false,
      timestampData: true,
      onload: this.onLoadStore
    })
    this.store.loadDatabase(() => {
      console.log('Loaded...')
    })
    // console.log('dbPATH: ', PacientsProvider.ROOT_STORE)
    console.log('this.store: ', this.store)

    this.store.loadDatabase((err: any) => {
      this.onLoadStore(err)
    })
  }

  /**
   * Загрузка массива данных по условию
   */
  select(where: any, onSelect: (err: any, pacients: Pacient[]) => void) {
    this.store.find(where, onSelect)
  }

  /**
   * Создание нового пациента
   */
  create(data: Pacient, onCreate: (err: any, newData: Pacient) => void) {
    this.store.insert(data, onCreate)
  }

  /**
   * Обновление данных пациента
   */
  update(
    where: any,
    newData: Pacient,
    options?: Nedb.UpdateOptions,
    onUpdate?: (err: any, numReplaced: number) => void
  ) {
    this.store.update(where, { $set: newData }, options, onUpdate)
  }

  /**
   * Удаление записей по условию
   */
  delete(where: any, onDelete?: (err: any, numRemoved: number) => void) {
    this.store.remove(where, { multi: true }, onDelete)
  }

  /**
   * Загрузка экземпляра пациента
   */
  findOne(where: any, onSelect: (err: any, pacient: Pacient) => void) {
    this.store.findOne(where, onSelect)
  }

  /**
   * Получение количества пациентов
   */
  count(where: any, onSelect: (err: any, num: number) => void) {
    this.store.count(where, onSelect)
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
  protected onLoadStore(err: any) {
    if (err !== null) {
      console.error('Pacient DB loading error: ', err)
    }
    console.log('DB PACIENTS loaded: ')
  }
}
