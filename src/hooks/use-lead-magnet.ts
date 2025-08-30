'use client'

import { useState, useEffect, useCallback } from 'react'

export interface LeadMagnetConfig {
  type: 'halal-investing-guide' | 'sharia-questions' | 'ontario-market-outlook'
  title: string
  description: string
}

const LEAD_MAGNETS: Record<string, LeadMagnetConfig> = {
  'halal-investing-guide': {
    type: 'halal-investing-guide',
    title: 'Halal Investing Guide: Real Estate vs. Stocks',
    description: 'Compare Sharia-compliant investment options and discover which strategy works best for your goals.'
  },
  'sharia-questions': {
    type: 'sharia-questions', 
    title: '5 Questions to Ask Any Sharia-Compliant Investment',
    description: 'Essential checklist to verify any investment is truly halal. Don\'t get fooled by fake Sharia-compliant products.'
  },
  'ontario-market-outlook': {
    type: 'ontario-market-outlook',
    title: 'Ontario Real Estate Market Outlook 2024-2025',
    description: 'Exclusive market intelligence and investment opportunities for halal real estate investors.'
  }
}

export function useLeadMagnet() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMagnet, setCurrentMagnet] = useState<LeadMagnetConfig | null>(null)
  const [source, setSource] = useState<string>('unknown')

  // Check if user has already downloaded a lead magnet (basic localStorage check)
  const hasDownloaded = useCallback((type: string): boolean => {
    if (typeof window === 'undefined') return false
    const downloaded = localStorage.getItem('gchi_lead_magnets')
    if (!downloaded) return false
    try {
      const parsed = JSON.parse(downloaded)
      return parsed.includes(type)
    } catch {
      return false
    }
  }, [])

  // Mark a lead magnet as downloaded
  const markAsDownloaded = useCallback((type: string) => {
    if (typeof window === 'undefined') return
    const existing = localStorage.getItem('gchi_lead_magnets')
    let downloaded: string[] = []
    
    if (existing) {
      try {
        downloaded = JSON.parse(existing)
      } catch {
        downloaded = []
      }
    }
    
    if (!downloaded.includes(type)) {
      downloaded.push(type)
      localStorage.setItem('gchi_lead_magnets', JSON.stringify(downloaded))
    }
  }, [])

  // Open modal for specific lead magnet
  const openModal = useCallback((type: keyof typeof LEAD_MAGNETS, fromSource = 'unknown') => {
    const magnet = LEAD_MAGNETS[type]
    if (magnet) {
      setCurrentMagnet(magnet)
      setSource(fromSource)
      setIsModalOpen(true)
    }
  }, [])

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    // Don't clear currentMagnet immediately to allow for smooth animation
    setTimeout(() => {
      setCurrentMagnet(null)
      setSource('unknown')
    }, 300)
  }, [])

  // Get lead magnet config by type
  const getMagnet = useCallback((type: keyof typeof LEAD_MAGNETS): LeadMagnetConfig | null => {
    return LEAD_MAGNETS[type] || null
  }, [])

  // Track modal views for analytics
  useEffect(() => {
    if (isModalOpen && currentMagnet && typeof window !== 'undefined') {
      // Track modal view
      if ((window as any).gtag) {
        (window as any).gtag('event', 'lead_magnet_modal_view', {
          event_category: 'Lead Magnet',
          event_label: currentMagnet.type,
          source: source
        })
      }
    }
  }, [isModalOpen, currentMagnet, source])

  return {
    // State
    isModalOpen,
    currentMagnet,
    source,
    
    // Actions
    openModal,
    closeModal,
    getMagnet,
    hasDownloaded,
    markAsDownloaded,
    
    // Lead magnet configs
    leadMagnets: LEAD_MAGNETS
  }
}