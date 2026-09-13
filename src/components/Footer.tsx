function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap footer-inner">
        <p>
          © <span>{currentYear}</span> Aayush Jadoun. Built with React &amp; TypeScript.
        </p>
        <a href="#home" className="to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
