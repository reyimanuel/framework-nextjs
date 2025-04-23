import { FaInfo } from "react-icons/fa";

interface InfoAlertProps {
  message: string
}

export default function InfoAlert({ message }: InfoAlertProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 flex items-start">
      <FaInfo className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
      <p className="text-sm text-blue-700">{message}</p>
    </div>
  )
}
