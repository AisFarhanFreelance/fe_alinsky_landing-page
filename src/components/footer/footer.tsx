const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-row justify-between py-4 px-12 text-xs bg-alinsky-night text-alinsky-battleship-gray">
        <div>&copy; {currentYear} — Copyright</div>
        <div>Privacy</div>
        <div>All right reserved</div>
      </div>
    </div>
  );
};

export default Footer;
