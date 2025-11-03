import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { api } from '../api'

// Category color schemes with gradient backgrounds and accent colors
const categoryThemes = {
  food: {
    gradient: 'from-orange-50 to-red-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
    icon: 'restaurant',
    iconColor: 'text-orange-500',
    accentText: 'text-orange-600'
  },
  tech: {
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
    icon: 'computer',
    iconColor: 'text-blue-500',
    accentText: 'text-blue-600'
  },
  travel: {
    gradient: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
    badge: 'bg-purple-100 text-purple-800',
    icon: 'flight',
    iconColor: 'text-purple-500',
    accentText: 'text-purple-600'
  },
  fitness: {
    gradient: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-800',
    icon: 'fitness_center',
    iconColor: 'text-green-500',
    accentText: 'text-green-600'
  },
  other: {
    gradient: 'from-gray-50 to-slate-50',
    border: 'border-gray-200',
    badge: 'bg-gray-100 text-gray-800',
    icon: 'card_giftcard',
    iconColor: 'text-gray-500',
    accentText: 'text-gray-600'
  }
}

export default function PerkDetails() {
 }
