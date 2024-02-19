export type RoomList = {
  id: string
  title: string
  description: string
  price: string
  link: string
  imgUrl: string
}

export type News = {
  _id?: string
  title: string
  description: string
  image: string
  mimage?: string
  createdAt?: string
  updaetdAt?: string
}
export type Culinary = {
  _id?: string
  title: string
  description: string
  diningTime: string
  image: string
  createdAt?: string
  updaetdAt?: string
}
export type BannerList = {
  location: string
  title: string
  subtitle: string
  name: string
  description: string
  imgUrl: string
}