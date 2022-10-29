import Button from "../Button/Button";

const Links = () => {
  const LINK_LIST = [
    {
      title: "Twitter Link",
      url: "https://twitter.com/i_amsuperfly",
      id: "twitter",
    },
    { title: "Zuri Team", url: "https://training.zuri.team/", id: "btn__zuri" },
    { title: "Zuri Books", url: "http://books.zuri.team/", id: "books" },
    {
      title: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=Superfly",
      id: "book__python",
    },
    {
      title: "Background Checks for Code",
      url: "https://background.zuri.team/",
      id: "pitch",
    },
    {
      title: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <section className="flex flex-col gap-4 items-center">
      {/* Links to the things I sell */}
      {LINK_LIST.map((link) => (
        <Button key={link.id} id={link.id} url={link.url}>
          {link.title}
        </Button>
      ))}

      {/* External Links (GitHub) */}
      <div className="flex justify-center gap-4 h-14 p-4">
        <a>
          <img
            src="/icons/slack-icon.png"
            className="h-full"
            alt="Slack icon"
          />
        </a>
        <a href="https://github.com/Superfly101/linktree">
          <img
            src="/icons/github-icon.png"
            className="h-full"
            alt="GitHub icon"
          />
        </a>
      </div>
    </section>
  );
};

export default Links;
