import type { Metadata } from "next"
import { getAlbumById } from "@/data/albums"
import AlbumDetailPage from "@/app/galeri/components/AlbumDetailPage"

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const album = getAlbumById(params.id)

  return {
    title: `${album.title} - Galeri HME UNSRAT`,
    description: album.description,
  }
}

export default function AlbumPage({ params }: Props) {
  const album = getAlbumById(params.id)

  return <AlbumDetailPage album={album} />
}
