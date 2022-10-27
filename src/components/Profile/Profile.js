const Profile = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <div className="w-32 rounded-full overflow-hidden">
        <img
          id="profile_img"
          src="/Superfly.JPG"
          className="w-full"
          alt="A profile photo of Daniel Ukoha"
        />
      </div>
      <p>
        <a id="twitter" href="https://twitter.com/i_amsuperfly">
          Mugiwara Superfly
        </a>
      </p>

      <p className="hidden" id="slack">
        Superfly
      </p>
    </section>
  );
};

export default Profile;
