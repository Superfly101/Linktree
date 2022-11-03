const Contact = () => {
  return (
    <main>
      <section className="py-8 px-4 container mx-auto text-[#475467] max-w-[50rem]">
        <h2 className="text-2xl font-semibold">Contact Me</h2>

        <p className="">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form className="py-8 flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#344054] text-sm">First name</label>
              <input
                id="first_name"
                placeholder="Enter your first name"
                type="text"
                className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#344054] text-sm">Last name</label>
              <input
                id="last_name"
                placeholder="Enter your last name"
                type="text"
                className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#344054] text-sm">Email</label>
            <input
              id="email"
              placeholder="johndoe@email.com"
              type="email"
              className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#344054] text-sm">First name</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              type="text"
              rows="5"
              className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
            />
          </div>

          <div className="flex gap-4">
            <input type="checkbox" className="relative -top-3 md:top-0" />
            <label>
              You agree to providing your data to @i_amsuperfly who may contact
              you.
            </label>
          </div>

          <div>
            <button
              id="btn__submit"
              className="p-3 bg-blue w-full text-white rounded-lg font-semibold"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
