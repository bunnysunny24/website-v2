import React from 'react';

const LoginPageLayout = ({ children }) => {
  return (
    <div className="login-page-layout">
      {children} {/* This will render the login form */}
    </div>
  );
};

export default LoginPageLayout;
