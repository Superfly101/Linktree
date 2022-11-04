const Contact = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <section className="py-8 px-4 container mx-auto text-[#475467] max-w-[50rem]">
        <h2 className="text-2xl font-semibold">Contact Me</h2>

        <p className="mt-3">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form className="py-8 flex flex-col gap-4" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#344054] text-sm">First name</label>
              <input
                id="first_name"
                placeholder="Enter your first name"
                type="text"
                className="border py-2 px-4 rounded-lg border-[#D0D5DD] outline-1 outline-[#84CAFF]"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-[#344054] text-sm">Last name</label>
              <input
                id="last_name"
                placeholder="Enter your last name"
                type="text"
                className="border py-2 px-4 rounded-lg border-[#D0D5DD] outline-1 outline-[#84CAFF]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#344054] text-sm">Email</label>
            <input
              id="email"
              placeholder="johndoe@email.com"
              type="email"
              className="border py-2 px-4 rounded-lg border-[#D0D5DD] outline-1 outline-[#84CAFF] "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#344054] text-sm">First name</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              type="text"
              rows="5"
              className="border py-2 px-4 rounded-lg border-[#D0D5DD] outline-none focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#D1E9FF]"
            />
          </div>

          <div className="flex gap-2 items-start">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm">
              You agree to providing your data to @i_amsuperfly who may contact
              you.
            </label>
          </div>

          <div>
            <button
              id="btn__submit"
              className="p-3 bg-blue hover:bg-[#175CD3] focus:bg-blue focus:shadow-[0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_#D1E9FF] w-full text-white rounded-lg font-semibold"
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
