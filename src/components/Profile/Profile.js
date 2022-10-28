import { useState } from "react";

const Profile = ({ onShareHandler }) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <section className="flex flex-col items-center p-8 relative">
      <div className="w-32 rounded-full overflow-hidden">
        <img
          id="profile_img"
          src="/Superfly.JPG"
          className="w-full"
          alt="A profile photo of Daniel Ukoha"
        />
      </div>
      <p>
        @i_amsuperfly
        {/* <a id="twitter" href="https://twitter.com/i_amsuperfly">
        </a> */}
      </p>

      <p className="hidden" id="slack">
        Superfly
      </p>

      <div
        onClick={onShareHandler}
        className="hidden absolute p-3 border border-dashed rounded-full border-[#D0D5DD] cursor-pointer md:block md:right-[25%]"
      >
        <img src="/icons/share.png" alt="share icon" />
      </div>

      <div
        onClick={() => {
          setIsExtended((prev) => !prev);
        }}
        className="absolute right-0 p-3 border border-dashed rounded-full border-[#D0D5DD] cursor-pointer md:hidden"
      >
        <img src="/icons/dots.png" alt="share icon" />
      </div>

      {isExtended && (
        <div className="absolute flex right-0 top-[6rem] md:hidden">
          <div
            onClick={onShareHandler}
            className="p-2 border border-dashed rounded-full border-[#D0D5DD] cursor-pointer"
          >
            <img src="/icons/share.png" alt="share icon" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
