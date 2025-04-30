import React from "react";

export default function MembersList() {
  const members = [
    {
      id: 1,
      name: "Neoville Tajujung",
      role: "Ketua HME",
    },
    {
      id: 2,
      name: "Julio Roring",
      role: "Wakil Ketua",
    },
    {
      id: 3,
      name: "Sydney Pesiwarissa",
      role: "Sekretaris",
    },
    {
      id: 4,
      name: "Diendels Saryono",
      role: "Wakil Sekretaris",
    },
    {
      id: 5,
      name: "Micha Wungow",
      role: "Bendahara",
    },
    {
      id: 6,
      name: "Yuan Mantiri",
      role: "Wakil Bendahara",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium">Pengurus</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
          Lihat Semua
        </a>
      </div>
      <div className="divide-y divide-gray-700">
        {members.map((member) => (
          <div key={member.id} className="p-4 hover:bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {member.name}
                </p>
                <p className="text-sm text-gray-400 truncate">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}