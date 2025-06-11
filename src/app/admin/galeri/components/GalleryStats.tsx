import { MdPhoto, MdCategory, MdStorage, MdPhotoAlbum } from "react-icons/md"
import { useState, useEffect } from "react";
import { fetchAllGalleries } from "@/app/service/api";
import { StatsData, GalleryItem } from "@/app/admin/galeri/components/types/gallery";

export default function GalleryStats() {

    const [stats, setStats] = useState<StatsData>({
        Akademik: 0,
        Kompetisi: 0,
        Pengabdian: 0,
        Keorganisasian: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getGalleryStats = async () => {
            try {
                const galleryItems: GalleryItem[] | undefined = await fetchAllGalleries();

                if (!galleryItems || galleryItems.length === 0) {

                    setError("Tidak ada data galeri untuk ditampilkan.");
                } else {

                    const calculatedStats = galleryItems.reduce(
                        (acc: StatsData, item: GalleryItem) => {
                            if (item.category === 'Akademik') acc.Akademik++;
                            else if (item.category === 'Kompetisi') acc.Kompetisi++;
                            else if (item.category === 'Pengabdian') acc.Pengabdian++;
                            else if (item.category === 'Keorganisasian') acc.Keorganisasian++;
                            return acc;
                        },

                        { Akademik: 0, Kompetisi: 0, Pengabdian: 0, Keorganisasian: 0 }
                    );
                    setStats(calculatedStats);
                }
            } catch (err) {
                console.error('Failed to fetch gallery stats:', err);
                setError('Gagal memuat statistik galeri.');
            } finally {
                setLoading(false);
            }
        };

        getGalleryStats();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading statistics...</div>;
    }

    // Tampilan jika terjadi error
    if (error) {
        return <div className="text-center p-4 text-gray-500">{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-300">Akademik</p>
                        <p className="text-2xl font-bold text-white mt-1">{stats.Akademik}</p>
                    </div>
                    <div className="p-3 bg-black/20 rounded-full">
                        <MdPhoto className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-300">Kompetisi</p>
                        <p className="text-2xl font-bold text-white mt-1">{stats.Kompetisi}</p>
                    </div>
                    <div className="p-3 bg-black/20 rounded-full">
                        <MdCategory className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-300">Pengabdian</p>
                        <p className="text-2xl font-bold text-white mt-1">{stats.Pengabdian}</p>
                    </div>
                    <div className="p-3 bg-black/20 rounded-full">
                        <MdStorage className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl shadow-lg overflow-hidden border border-gray-700 p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-300">Keorganisasian</p>
                        <p className="text-2xl font-bold text-white mt-1">{stats.Keorganisasian}</p>
                    </div>
                    <div className="p-3 bg-black/20 rounded-full">
                        <MdPhotoAlbum className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
