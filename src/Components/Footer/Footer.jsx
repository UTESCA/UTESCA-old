import icons from "../../data/Footer";

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="font-raleway bg-blue-medium text-white">
      <div className="pt-12 pb-3 px-12">
        <div className="flex justify-center mb-5">
          <div className="text-6xl font-bold">Contact Us</div>
        </div>
        <div className="flex">
          <div className="w-[50%]">
            <div className="flex text-3xl">Email</div>
            <div className="flex  ">
              If you have any inquiries regarding our club, or would like to
              reach out to us about our events, please send us an email!
            </div>
            <div className="flex  ">uoft.esca@gmail.com</div>
          </div>
          <div>
            <div className="flex text-3xl">Social Media</div>
            <div className="flex gap-5">
              {icons.map((icon, index) => {
                return (
                  <div
                    className={
                      "m-auto mt-3 cursor-pointer hover:scale-125 transition duration-300"
                    }
                    key={index}
                    onClick={() => openInNewTab(icon.link)}
                  >
                    {icon.logo}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          © 2022 University of Toronto Engineering Students Consulting
          Association
        </div>
      </div>
    </div>
  );
}

export default Footer;
