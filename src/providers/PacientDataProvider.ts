/**
 * PacientDataProvider
 * Провайдер данных пациентов
 */
import Pacient from '../models/Pacient.model'
import DataProvider from './DataProvider'

export default class PacientDataProvider extends DataProvider {
  constructor() {
    super('Pacient')
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
   * @inheritdoc
   */
  protected onLoadStore(err: any) {
    if (err !== null) {
      console.error(err)
    }
  }
}
