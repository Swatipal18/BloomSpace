import React from 'react'

function PageNotFound() {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                textAlign: 'center',
                padding: '2rem',
                fontFamily: 'Arial, sans-serif'
            }}>
                <div style={{
                    fontSize: '120px',
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    marginBottom: '1rem',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                    404
                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    color: '#2c3e50',
                    marginBottom: '1rem',
                    fontWeight: '600'
                }}>
                    Page Not Found
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#7f8c8d',
                    marginBottom: '2rem',
                    maxWidth: '500px',
                    lineHeight: '1.6'
                }}>
                    Sorry, the page you are looking for doesn't exist or has been moved.
                    Please check the URL and try again.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => window.history.back()}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => window.location.href = '#/'}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#27ae60',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
                    >
                        Go to Home
                    </button>
                </div>


            </div>

        </div>
    )
}

export default PageNotFound