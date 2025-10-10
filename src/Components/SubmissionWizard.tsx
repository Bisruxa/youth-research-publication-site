import { useState } from 'react'

interface SubmissionWizardProps {
  onClose: () => void
}

const SubmissionWizard = ({ onClose }: SubmissionWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    institution: '',
    keywords: '',
    pdfFile: null as File | null
  })

  const steps = [
    { number: 1, title: 'Paper Details' },
    { number: 2, title: 'Upload PDF' },
    { number: 3, title: 'Review & Submit' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, pdfFile: file }))
    }
  }

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      console.log('Submitting:', formData)
      onClose()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#F8FAFC', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#2563EB', 
            margin: '0 0 1rem 0' 
          }}>
            Submission Wizard
          </h1>
          
          {/* Progress Bar */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem' 
          }}>
            {steps.map((step) => (
              <div key={step.number} style={{ flex: 1 }}>
                <div style={{
                  height: '8px',
                  backgroundColor: step.number <= currentStep ? '#2563EB' : '#E2E8F0',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s'
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            color: '#2563EB', 
            margin: '0 0 1.5rem 0' 
          }}>
            Step {currentStep}: {steps[currentStep - 1].title}
          </h2>

          {/* Step 1: Paper Details */}
          {currentStep === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#374151', 
                  fontWeight: '500' 
                }}>
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Title"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#374151', 
                  fontWeight: '500' 
                }}>
                  Authors
                </label>
                <input
                  type="text"
                  value={formData.authors}
                  onChange={(e) => handleInputChange('authors', e.target.value)}
                  placeholder="Authors"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#374151', 
                  fontWeight: '500' 
                }}>
                  Institution
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  placeholder="Institution"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#374151', 
                  fontWeight: '500' 
                }}>
                  Keywords
                </label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => handleInputChange('keywords', e.target.value)}
                  placeholder="Keywords (comma-separated)"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>
          )}

          {/* Step 2: Upload PDF */}
          {currentStep === 2 && (
            <div>
              <div style={{
                border: '2px dashed #D1D5DB',
                borderRadius: '12px',
                padding: '3rem',
                textAlign: 'center',
                backgroundColor: '#F9FAFB',
                cursor: 'pointer',
                transition: 'border-color 0.2s'
              }}
                onClick={() => document.getElementById('pdf-upload')?.click()}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#2563EB'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
              >
                <div style={{ color: '#6B7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  Drag & drop PDF here or click to choose.
                </div>
                {formData.pdfFile && (
                  <div style={{ color: '#059669', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    Selected: {formData.pdfFile.name}
                  </div>
                )}
              </div>
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151', marginBottom: '1rem' }}>
                Review Your Submission
              </h3>
              <div style={{ 
                backgroundColor: '#F9FAFB', 
                padding: '1.5rem', 
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Title:</strong> {formData.title}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Authors:</strong> {formData.authors}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Institution:</strong> {formData.institution}
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong>Keywords:</strong> {formData.keywords}
                </div>
                <div>
                  <strong>PDF File:</strong> {formData.pdfFile?.name || 'No file selected'}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '2rem'
          }}>
            <button
              onClick={currentStep === 1 ? onClose : handleBack}
              style={{
                backgroundColor: 'transparent',
                color: '#6B7280',
                border: '1px solid #D1D5DB',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F9FAFB'
                e.currentTarget.style.borderColor = '#9CA3AF'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = '#D1D5DB'
              }}
            >
              {currentStep === 1 ? 'Cancel' : 'Back'}
            </button>

            <button
              onClick={handleContinue}
              style={{
                backgroundColor: '#2563EB',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            >
              {currentStep === 3 ? 'Submit' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionWizard
