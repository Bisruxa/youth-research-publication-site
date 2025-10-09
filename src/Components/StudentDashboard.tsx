import { useState } from 'react'
import SubmissionWizard from './SubmissionWizard'

interface Submission {
  id: number
  title: string
  date: string
  status: 'Accepted' | 'Under Review' | 'Rejected'
}

const StudentDashboard = () => {
  const [showWizard, setShowWizard] = useState(false)

  const submissions: Submission[] = [
    { id: 101, title: 'Optimizing Irrigation with ML', date: '8/9/2025', status: 'Accepted' },
    { id: 112, title: 'Solar Microgrids for Schools', date: '7/1/2025', status: 'Under Review' },
    { id: 115, title: 'Okra Extract & Blood Sugar', date: '6/14/2025', status: 'Accepted' },
    { id: 120, title: 'e-Mobility Impacts in Developing Nations', date: '4/27/2025', status: 'Rejected' },
    { id: 121, title: 'Soil Carbon Sequestration', date: '5/19/2025', status: 'Under Review' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted': return '#10B981' // green
      case 'Under Review': return '#F59E0B' // yellow
      case 'Rejected': return '#EF4444' // red
      default: return '#6B7280' // gray
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'Accepted': return '#D1FAE5' // light green
      case 'Under Review': return '#FEF3C7' // light yellow
      case 'Rejected': return '#FEE2E2' // light red
      default: return '#F3F4F6' // light gray
    }
  }

  if (showWizard) {
    return <SubmissionWizard onClose={() => setShowWizard(false)} />
  }

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#F8FAFC', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2rem' 
      }}>
        <div style={{
          backgroundColor: '#F1F5F9',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '0.5rem' }}>
            5
          </div>
          <div style={{ color: '#64748B', fontSize: '1rem' }}>
            Submissions
          </div>
        </div>

        <div style={{
          backgroundColor: '#F1F5F9',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '0.5rem' }}>
            2
          </div>
          <div style={{ color: '#64748B', fontSize: '1rem' }}>
            Accepted
          </div>
        </div>

        <div style={{
          backgroundColor: '#F1F5F9',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '0.5rem' }}>
            2
          </div>
          <div style={{ color: '#64748B', fontSize: '1rem' }}>
            Under Review
          </div>
        </div>
      </div>

      {/* Submissions Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem' 
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#2563EB', 
            margin: 0 
          }}>
            My Submissions
          </h2>
          <button
            onClick={() => setShowWizard(true)}
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
            + New Submission
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0', 
                  color: '#64748B', 
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  ID
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0', 
                  color: '#64748B', 
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  Title
                </th>
                <th style={{ 
                  textAlign: 'right', 
                  padding: '1rem 0', 
                  color: '#64748B', 
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  Date
                </th>
                <th style={{ 
                  textAlign: 'right', 
                  padding: '1rem 0', 
                  color: '#64748B', 
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ 
                    padding: '1rem 0', 
                    color: '#1E293B', 
                    fontWeight: '500' 
                  }}>
                    {submission.id}
                  </td>
                  <td style={{ 
                    padding: '1rem 0', 
                    color: '#1E293B' 
                  }}>
                    {submission.title}
                  </td>
                  <td style={{ 
                    padding: '1rem 0', 
                    color: '#64748B', 
                    textAlign: 'right' 
                  }}>
                    {submission.date}
                  </td>
                  <td style={{ 
                    padding: '1rem 0', 
                    textAlign: 'right' 
                  }}>
                    <span style={{
                      backgroundColor: getStatusBgColor(submission.status),
                      color: getStatusColor(submission.status),
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {submission.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
