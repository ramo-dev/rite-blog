export const errorMessageStyle = {
    marginBottom:'30px',
    height:'40px',
    Width: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    padding: '0.875rem 72px 0.875rem 1.75rem',
    backgroundColor: '#5200D0',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '1.25rem',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    alignItems: 'center',
    borderRadius: '0.5rem',
    gap: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: 'none',
    transition: 'all 0.6s ease',
  };

export  const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:'25%'
  };

export  const loaderStyle = {
    width: '110px',
    height: '110px',
    border: '12px solid #5200D0',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: 'rotation 1s linear infinite',
  };

export  const errorMessage = {
    Width: '320px',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    padding: '0.875rem 72px 0.875rem 1.75rem',
    backgroundColor: '#5200D0',
    color: '#fff',
    fontSize: '15px',
    lineHeight: '1.25rem',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    alignItems: 'center',
    borderRadius: '0.5rem',
    gap: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: 'none',
    transition: 'all 0.6s ease',
}

export const overlayStyles = {
  position: 'fixed',
  top: '-10%',
  bottom: '-10%',
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
  backdropFilter: 'blur(5px)', // Apply blur effect
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

};

export const activeOverlayStyles = {
  visibility: "visible", opacity: 1 
};

export const popupStyles = {
  fontSize:'23px',
  letterSpacing: '1px',
  display:'flex',
  alignItems:'center',
  padding: '10px 20px 60px 20px',
  background: '#e9dcfc',
  borderRadius: '15px',
  maxWidth: '80%',
  maxHeight:'30%',
  width: '400px',
  position: 'relative',
  transform: 'translateY(-100%)',
  transition: 'transform 0.2s ease-in-out, opacity 0.5s ease-in-out', 
};
export const activePopupStyles = {
  transform: 'translateY(0)', 
};
export const closeStyles = {
  
  fontSize:'17px',
  position: "absolute",
  color: 'white',
  padding: '10px 20px',
  background: '#5200D0',
  bordeRadius: '8px',
  transition: '0.3s ease',
  display:'flex',
  marginTop:'9%',
  marginBottom:'5%',
  marginLeft:'25%',
  borderRadius: '8px',
  cursor:'pointer'
};

export const contentStyles = {
  maxHeight: "300px",
   overflow: "auto",
   marginTop:'-5px',
   marginBottom:'15px'
};