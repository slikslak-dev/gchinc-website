/**
 * Form Abandonment Recovery System
 * Saves form progress and sends recovery emails for abandoned applications
 */

import type { InvestorApplicationData } from './types'

interface FormRecoveryData {
  formData: Partial<InvestorApplicationData>
  currentStep: number
  lastUpdated: string
  recoveryToken?: string
  emailSent?: boolean
}

const STORAGE_KEY = 'gchi_form_recovery'
const ABANDONMENT_THRESHOLD = 24 * 60 * 60 * 1000 // 24 hours

export class FormRecovery {
  /**
   * Save form progress to localStorage
   */
  static saveProgress(formData: Partial<InvestorApplicationData>, currentStep: number): void {
    try {
      const recoveryData: FormRecoveryData = {
        formData,
        currentStep,
        lastUpdated: new Date().toISOString(),
        recoveryToken: this.generateRecoveryToken()
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recoveryData))
      }
    } catch (error) {
      console.error('Failed to save form progress:', error)
    }
  }

  /**
   * Load saved form progress
   */
  static loadProgress(): FormRecoveryData | null {
    try {
      if (typeof window === 'undefined') return null
      
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return null
      
      const data = JSON.parse(saved) as FormRecoveryData
      
      // Check if data is too old
      const lastUpdated = new Date(data.lastUpdated).getTime()
      const now = Date.now()
      
      if (now - lastUpdated > ABANDONMENT_THRESHOLD * 7) {
        // Data older than a week, clear it
        this.clearProgress()
        return null
      }
      
      return data
    } catch (error) {
      console.error('Failed to load form progress:', error)
      return null
    }
  }

  /**
   * Clear saved form progress
   */
  static clearProgress(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  /**
   * Check if form was abandoned and email not sent
   */
  static async checkAbandonment(): Promise<boolean> {
    const saved = this.loadProgress()
    if (!saved) return false
    
    const lastUpdated = new Date(saved.lastUpdated).getTime()
    const now = Date.now()
    
    // Check if form was abandoned (no update in 24 hours)
    // and has email but recovery email not sent yet
    if (
      now - lastUpdated > ABANDONMENT_THRESHOLD &&
      saved.formData.email &&
      !saved.emailSent &&
      saved.currentStep < 3 // Not on final step
    ) {
      return true
    }
    
    return false
  }

  /**
   * Generate a unique recovery token
   */
  private static generateRecoveryToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  /**
   * Mark recovery email as sent
   */
  static markEmailSent(): void {
    const saved = this.loadProgress()
    if (saved) {
      saved.emailSent = true
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
      }
    }
  }

  /**
   * Create recovery URL with token
   */
  static createRecoveryUrl(baseUrl: string): string {
    const saved = this.loadProgress()
    if (!saved || !saved.recoveryToken) {
      return `${baseUrl}/apply`
    }
    
    return `${baseUrl}/apply?recovery=${saved.recoveryToken}&step=${saved.currentStep}`
  }

  /**
   * Validate recovery token and restore form
   */
  static async validateAndRestore(token: string): Promise<{
    valid: boolean
    formData?: Partial<InvestorApplicationData>
    currentStep?: number
  }> {
    const saved = this.loadProgress()
    
    if (!saved || saved.recoveryToken !== token) {
      return { valid: false }
    }
    
    return {
      valid: true,
      formData: saved.formData,
      currentStep: saved.currentStep
    }
  }

  /**
   * Get abandonment statistics for analytics
   */
  static getAbandonmentStats(): {
    hasAbandoned: boolean
    lastStep: number
    timeSpent: number
    fieldsCompleted: number
  } | null {
    const saved = this.loadProgress()
    if (!saved) return null
    
    const fieldsCompleted = Object.keys(saved.formData).filter(
      key => saved.formData[key as keyof InvestorApplicationData]
    ).length
    
    const timeSpent = Date.now() - new Date(saved.lastUpdated).getTime()
    
    return {
      hasAbandoned: timeSpent > ABANDONMENT_THRESHOLD,
      lastStep: saved.currentStep,
      timeSpent,
      fieldsCompleted
    }
  }
}

/**
 * Hook to use form recovery in React components
 */
export function useFormRecovery() {
  if (typeof window === 'undefined') {
    return {
      saveProgress: () => {},
      loadProgress: () => null,
      clearProgress: () => {},
      checkAbandonment: async () => false,
    }
  }
  
  return {
    saveProgress: FormRecovery.saveProgress.bind(FormRecovery),
    loadProgress: FormRecovery.loadProgress.bind(FormRecovery),
    clearProgress: FormRecovery.clearProgress.bind(FormRecovery),
    checkAbandonment: FormRecovery.checkAbandonment.bind(FormRecovery),
  }
}
