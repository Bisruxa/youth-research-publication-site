import {useState} from 'react';
const ReviwerDashboard = () => {
 const [hover, setHover] =  useState(false);
 return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#F8FAFC', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Summary Cards */}
      <div style={{ 
        display: 'flex', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2rem',
        width: '500px',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          width: '200px',
        
          marginRight: '20px',
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '0.5rem' }}>
            5
          </div>
          <div style={{ color: '#64748B', fontSize: '1rem' }}>
            Pending Reviews
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          padding: '1.5rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
           width: '200px',
          
          marginRight: '20px',
        }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2563EB', marginBottom: '0.5rem' }}>
            2
          </div>
          <div style={{ color: '#64748B', fontSize: '1rem' }}>
            Completed
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
            Review Queue
          </h2>
          
        </div>
<div style={{
  backgroundColor: hover ? "#dfebf7ff":"#ffffff",
  border: '2px solid #d3d4d6ff',
 
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
}}
onMouseEnter={() => setHover(true)}
onMouseLeave={
  () => setHover(false)
}>
<h3 style={{
  fontSize: '1.25rem', 
  fontWeight: 'bold', 
  color: '#1E40AF',
}}>Title</h3>
<p style={{
  color: '#64748B',
  paddingBottom: '0.5rem',
}}>Description </p>
<button style={{
  backgroundColor: '#2563EB',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
}}>Start Review</button>
</div>
        
      </div>
    </div>
  )


}
export default ReviwerDashboard;