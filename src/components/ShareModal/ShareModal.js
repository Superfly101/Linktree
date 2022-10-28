import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const ShareModal = ({ onCloseHandler }) => {
  const url = "https://linktree-delta-one.vercel.app/";
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onCloseHandler();
        }
      }}
      className="fixed w-full min-h-screen bg-[rgba(10,11,13,0.7)] z-10 flex items-center justify-center px-6"
    >
      <div className="bg-white p-4 rounded-xl w-full max-w-[30rem]">
        <section className="relative mb-8 p-4">
          <div className="text-center">Share this Linktree</div>
          <button onClick={onCloseHandler} className="absolute top-4 right-4">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                d="M13.3536 3.35357L13.7072 3.00001L13.0001 2.29291L12.6465 2.64646L13.3536 3.35357ZM2.64652 12.6465L2.29297 13L3.00008 13.7071L3.35363 13.3536L2.64652 12.6465ZM3.35363 2.64646L3.00008 2.29291L2.29297 3.00001L2.64652 3.35357L3.35363 2.64646ZM12.6465 13.3536L13.0001 13.7071L13.7072 13L13.3536 12.6465L12.6465 13.3536ZM12.6465 2.64646L2.64652 12.6465L3.35363 13.3536L13.3536 3.35357L12.6465 2.64646ZM2.64652 3.35357L12.6465 13.3536L13.3536 12.6465L3.35363 2.64646L2.64652 3.35357Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </section>

        <section className="flex flex-col">
          <FacebookShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <FacebookIcon size={32} borderRadius={12} />
              Share on Facebook
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </FacebookShareButton>

          <LinkedinShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <LinkedinIcon size={32} borderRadius={12} />
              Share on LinkedIn
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </LinkedinShareButton>
          <TwitterShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <TwitterIcon size={32} borderRadius={12} />
              Share on Twitter
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </TwitterShareButton>
          <WhatsappShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <WhatsappIcon size={32} borderRadius={12} />
              Share via WhatsApp
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </WhatsappShareButton>
          <FacebookMessengerShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <FacebookMessengerIcon size={32} borderRadius={12} />
              Share via Messenger
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </FacebookMessengerShareButton>
          <EmailShareButton url={url} className="w-full">
            <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:bg-gray">
              <EmailIcon size={32} borderRadius={12} />
              Share via Email
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                //   enable-background="new 0 0 24 24"
                className="absolute top-6 right-4 "
              >
                <path
                  d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </EmailShareButton>
        </section>

        <section className="p-4">
          <div
            className="flex justify-between border border-gray p-4 rounded-lg cursor-pointer hover:bg-gray"
            onClick={() => {
              navigator.clipboard.writeText(url);
              setIsCopied(true);
            }}
          >
            <p className="truncate w-[15rem]">{url}</p>
            <p className={isCopied ? "text-green" : ""}>
              {!isCopied ? "Copy" : "Copied!"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShareModal;
