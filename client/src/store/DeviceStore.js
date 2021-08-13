import {makeAutoObservable} from "mobx"

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        "id": 1,
        "name": "Холодильник",
        "createdAt": "2021-08-08T12:20:16.195Z",
        "updatedAt": "2021-08-08T12:20:16.195Z"
      },
      {
        "id": 2,
        "name": "Телевизор",
        "createdAt": "2021-08-08T13:13:31.490Z",
        "updatedAt": "2021-08-08T13:13:31.490Z"
      },
      {
        "id": 3,
        "name": "Телефон",
        "createdAt": "2021-08-08T13:13:31.490Z",
        "updatedAt": "2021-08-08T13:13:31.490Z"
      },
      {
        "id": 4,
        "name": "Компьютер",
        "createdAt": "2021-08-08T13:13:31.490Z",
        "updatedAt": "2021-08-08T13:13:31.490Z"
      }
    ]
    this._brands = [
      {
        "id": 1,
        "name": "Apple",
        "createdAt": "2021-08-08T13:19:57.246Z",
        "updatedAt": "2021-08-08T13:19:57.246Z"
      },
      {
        "id": 2,
        "name": "Honor",
        "createdAt": "2021-08-08T13:20:07.981Z",
        "updatedAt": "2021-08-08T13:20:07.981Z"
      }
    ]
    this._devices = [
      {
        "id": 1,
        "name": "12pro",
        "price": 100000,
        "rating": 0,
        "img": "693e055f-6fc1-44aa-89f2-2317712f0ae2.jpg",
        "createdAt": "2021-08-09T02:31:32.892Z",
        "updatedAt": "2021-08-09T02:31:32.892Z",
        "typeId": 3,
        "brandId": 1
      },
      {
        "id": 2,
        "name": "30 extreme",
        "price": 50000,
        "rating": 0,
        "img": "6c24646a-cc97-429c-830e-ad4cae54476e.jpg",
        "createdAt": "2021-08-09T03:05:52.330Z",
        "updatedAt": "2021-08-09T03:05:52.330Z",
        "typeId": 3,
        "brandId": 2
      },
      {
        "id": 3,
        "name": "iTV",
        "price": 120000,
        "rating": 0,
        "img": "31e55270-30ac-4ddf-a7b7-2fbae9b4de0f.jpg",
        "createdAt": "2021-08-09T03:06:41.838Z",
        "updatedAt": "2021-08-09T03:06:41.838Z",
        "typeId": 2,
        "brandId": 1
      },
      {
        "id": 4,
        "name": "Freezer1",
        "price": 25000,
        "rating": 0,
        "img": "freez1",
        "createdAt": "2021-08-09T03:05:52.330Z",
        "updatedAt": "2021-08-09T03:05:52.330Z",
        "typeId": 1,
        "brandId": 3
      },
      {
        "id": 5,
        "name": "MegaFreeze",
        "price": 45000,
        "rating": 0,
        "img": "freez2",
        "createdAt": "2021-08-09T03:06:41.838Z",
        "updatedAt": "2021-08-09T03:06:41.838Z",
        "typeId": 1,
        "brandId": 4
      },
      {
        "id": 6,
        "name": "MegaFreeze",
        "price": 45000,
        "rating": 0,
        "img": "freez2",
        "createdAt": "2021-08-09T03:06:41.838Z",
        "updatedAt": "2021-08-09T03:06:41.838Z",
        "typeId": 1,
        "brandId": 4
      },
      {
        "id": 7,
        "name": "MegaFreeze",
        "price": 45000,
        "rating": 0,
        "img": "freez2",
        "createdAt": "2021-08-09T03:06:41.838Z",
        "updatedAt": "2021-08-09T03:06:41.838Z",
        "typeId": 1,
        "brandId": 4
      }
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }
  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}