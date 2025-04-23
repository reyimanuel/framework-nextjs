"use client"

import type React from "react"
import { useState } from "react"
import { IoIosEyeOff, IoIosEye, IoIosLock } from "react-icons/io";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function PasswordInput({
  id,
  name,
  value,
  onChange,
  placeholder = "Enter password",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IoIosLock className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <IoIosEyeOff className="h-5 w-5 text-gray-400" /> : <IoIosEye className="h-5 w-5 text-gray-400" />}
      </button>
    </div>
  )
}
