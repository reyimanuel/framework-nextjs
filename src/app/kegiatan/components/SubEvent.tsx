import PageHero from "@/shared/HeroShared"
import EventList from "@/app/kegiatan/components/EventList"
import EventFilter from "@/app/kegiatan/components/EventFilter"
import EventPagination from "@/shared/Pagination"
import Breadcrumb from "@/shared/Breadcrumb"
import type { Event } from "@/types/event"

type SubeventProps = {
  title: string
  description: string
  events: Event[]
  categorySlug: string
  filterCategories: string[]
}

export default function Subevent({
  title,
  description,
  events,
  categorySlug,
  filterCategories,
}: SubeventProps) {
  return (
    <main>
      <PageHero title={title} description={description} />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Kegiatan", href: "/kegiatan" },
              { label: title, href: `/kegiatan/${categorySlug}`, active: true },
            ]}
          />

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Semua {title}</h2>
            <p className="text-gray-600 max-w-3xl">{description}</p>
          </div>

          {/* Filter Section */}
          <EventFilter categories={filterCategories} placeholder={`Cari ${title.toLowerCase()}...`} />

          <EventList events={events} />

          {/* Pagination */}
          <EventPagination totalPages={1} currentPage={1} />
        </div>
      </section>
    </main>
  )
}
