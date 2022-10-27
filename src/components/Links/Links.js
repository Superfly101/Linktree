import Button from "../Button/Button";

const Links = () => {
  const LINK_LIST = [
    {
      title: "Twitter Link",
      url: "https://twitter.com/i_amsuperfly",
      id: "btn_twitter",
    },
    { title: "Zuri Team", url: "https://training.zuri.team/", id: "btn_zuri" },
    { title: "Zuri Books", url: "http://books.zuri.team/", id: "books" },
    {
      title: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=Superfly",
      id: "book_python",
    },
    {
      title: "Background Checks for Code",
      url: "https://background.zuri.team/",
      id: "pitch",
    },
    {
      title: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book_design",
    },
  ];
  return (
    <section className="flex flex-col gap-4 items-center">
      {LINK_LIST.map((link) => (
        <Button key={link.id} id={link.id} url={link.url}>
          {link.title}
        </Button>
      ))}
    </section>
  );
};

export default Links;
