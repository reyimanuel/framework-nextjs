import type { Album } from "@/components/types/album"

export const albumsData: Record<string, Album> = {
  lomba: {
    id: "lomba",
    title: "Album Lomba HME",
    description: "Dokumentasi kegiatan lomba dan kompetisi Himpunan Mahasiswa Elektro UNSRAT",
    photos: [
      {
        id: 1,
        title: "Mini Soccer",
        date: "28 Februari 2025",
        image: "/kegiatan/miniSoccer.jpg",
      },
      {
        id: 2,
        title: "Lomba Mobile Legends",
        date: "15 April 2023",
        image: "/kegiatan/lombaML.jpg",
      },
      {
        id: 3,
        title: "Lomba Basket Putri",
        date: "15 April 2023",
        image: "/kegiatan/lombabasketputri.jpg",
      },
      {
        id: 4,
        title: "Lomba Voli Putra",
        date: "15 April 2023",
        image: "/kegiatan/lombavoliputra.jpg",
      },
      {
        id: 5,
        title: "Lomba Voli Putri",
        date: "15 April 2023",
        image: "/kegiatan/voli putri.jpg",
      },
      {
        id: 6,
        title: "Lomba Futsal",
        date: "19-23 Juni 2023",
        image: "/kegiatan/lombaFutsal.jpg",
      },
      {
        id: 7,
        title: "Lomba Basket",
        date: "19-23 Juni 2023",
        image: "/kegiatan/lombaBasket.jpg",
      },
      {
        id: 8,
        title: "Lomba Karya Tulis",
        date: "19-23 Juni 2023",
        image: "/kegiatan/karyaTulis.jpg",
      },
    ],
  },
  workshop: {
    id: "workshop",
    title: "Album Workshop & Seminar",
    description: "Dokumentasi kegiatan workshop dan seminar Himpunan Mahasiswa Elektro UNSRAT",
    photos: [
      {
        id: 1,
        title: "Workshop Pemrograman",
        date: "15 Mei 2024",
        image: "/kegiatan/studyClub.png",
      },
      {
        id: 2,
        title: "Seminar Teknologi",
        date: "20 Juni 2024",
        image: "/kegiatan/webinar.jpg",
      },
      {
        id: 3,
        title: "Workshop & Pelatihan",
        date: "10 Maret 2024",
        image: "/gallery/workshop.png",
      },
    ],
  },
  pengabdian: {
    id: "pengabdian",
    title: "Album Pengabdian Masyarakat",
    description: "Dokumentasi kegiatan pengabdian masyarakat Himpunan Mahasiswa Elektro UNSRAT",
    photos: [
      {
        id: 1,
        title: "PPK Ormawa HME FT UNSRAT",
        date: "16 Juni 2024",
        image: "/kegiatan/ppkOrmawa.jpg",
      },
      {
        id: 2,
        title: "Pengabdian Masyarakat di Desa Pulisan",
        date: "30 Maret 2022",
        image: "/kegiatan/pengabdianfkhmi.jpg",
      },
    ],
  },
}

export const getAlbumById = (id: string): Album => {
  return (
    albumsData[id] || {
      id: "not-found",
      title: "Album",
      description: "Galeri foto Himpunan Mahasiswa Elektro UNSRAT",
      photos: [],
    }
  )
}
