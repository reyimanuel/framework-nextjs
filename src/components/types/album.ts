export type Photo = {
    id: number
    title: string
    date: string
    image: string
  }
  
  export type Album = {
    id: string
    title: string
    description: string
    photos: Photo[]
  }
  