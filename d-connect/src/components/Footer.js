import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center bg-transparent">
      Copyright &copy; {new Date().getFullYear()} D-Connect
    </footer>
  );
}

export default Footer;
