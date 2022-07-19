import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  ViberShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FacebookIcon,
  WhatsappIcon,
  ViberIcon,
  EmailIcon,
  TwitterIcon,
} from 'react-share';

function ShareButton({ url, title, description, size, round = true }) {
  return (
    <div className="img">
      <div className=" social">
        <div className="pic">
          {' '}
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={size} round={round} />
          </FacebookShareButton>
        </div>
        <div className="pic">
          {' '}
          <WhatsappShareButton url={url} title={title} separator=" - ">
            <WhatsappIcon size={size} round={round} />
          </WhatsappShareButton>
        </div>
        <div className="pic">
          {' '}
          <ViberShareButton url={url} title={title} separator=" - ">
            <ViberIcon size={size} round={round} />
          </ViberShareButton>
        </div>
        <div className="pic">
          {' '}
          <EmailShareButton
            url={url}
            subject={title}
            body={description}
            separator=":: "
          >
            <EmailIcon size={size} round={round} />
          </EmailShareButton>
        </div>
        <div className="pic">
          {' '}
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={size} round={round} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}

export default ShareButton;
