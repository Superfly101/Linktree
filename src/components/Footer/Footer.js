const Footer = () => {
  return (
    <footer className="relative container mx-auto px-4 py-8 flex flex-col gap-4 justify-between  md:items-center md:flex-row">
      <hr className="text-gray my-2 absolute top-0 w-full" />
      <div className="w-32 md:w-36">
        <img src="/Zuri.Internship_Logo.png" className="w-full" />
      </div>
      <small className="text-[#667085]">HNG Internship 9 Frontend Task</small>
      <div className="w-28 md:w-32">
        <img src="/I4G.png" className="w-full" />
      </div>
    </footer>
  );
};

export default Footer;
