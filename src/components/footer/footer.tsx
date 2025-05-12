const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="bg-alinsky-night-secondary p-12 text-white"></div>
      <div className="flex flex-row justify-between bg-alinsky-night px-12 py-4 text-xs text-alinsky-battleship-gray">
        <div>&copy; {currentYear} — Copyright</div>
        <div>Privacy</div>
        <div>All right reserved</div>
      </div>
    </div>
  );
};

export default Footer;
