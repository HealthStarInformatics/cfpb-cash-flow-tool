import React from "react";
import { ReactComponent as PlusIcon } from "../../../node_modules/@cfpb/icons/src/icons/plus-round.svg";
import { ReactComponent as ErrorIcon } from "../../../node_modules/@cfpb/icons/src/icons/error-round.svg";
import { ReactComponent as DollarSignIcon } from "../../../node_modules/@cfpb/icons/src/icons/dollar.svg";
import { ReactComponent as PencilEditIcon } from "../../../node_modules/@cfpb/icons/src/icons/edit.svg";
import { ReactComponent as FavoriteIcon } from "../../../node_modules/@cfpb/icons/src/icons/favorite.svg";
import { ReactComponent as ExclamationPointIcon } from "../../../node_modules/@cfpb/icons/src/icons/warning.svg";
import { ReactComponent as LightBulb } from "../../../node_modules/@cfpb/icons/src/icons/lightbulb-round.svg";
import { ReactComponent as FacebookIcon } from "../../../node_modules/@cfpb/icons/src/icons/facebook-square.svg";
import { ReactComponent as TwitterIcon } from "../../../node_modules/@cfpb/icons/src/icons/twitter-square.svg";
import { ReactComponent as LinkedInIcon } from "../../../node_modules/@cfpb/icons/src/icons/linkedin-square.svg";
import { ReactComponent as FlickrIcon } from "../../../node_modules/@cfpb/icons/src/icons/flickr-square.svg";
import { ReactComponent as YouTubeIcon } from "../../../node_modules/@cfpb/icons/src/icons/youtube-square.svg";
import { ReactComponent as ExternalLinkIcon } from "../../../node_modules/@cfpb/icons/src/icons/external-link.svg";
import { ReactComponent as UpArrowIcon } from "../../../node_modules/@cfpb/icons/src/icons/arrow-up.svg";
import { ReactComponent as SaveIcon } from "../../../node_modules/@cfpb/icons/src/icons/disk.svg";
import { ReactComponent as SearchIcon } from "../../../node_modules/@cfpb/icons/src/icons/magnifying-glass.svg";
import { ReactComponent as ComplaintIcon } from "../../../node_modules/@cfpb/icons/src/icons/complaint.svg";
import { ReactComponent as MenuIcon } from "../../../node_modules/@cfpb/icons/src/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../../node_modules/@cfpb/icons/src/icons/close-round.svg";

import "../../css/Icon.css";

export const Icon = ({ type }) => {
  return (
    <div className="icon-background">
      {(() => {
        switch (type) {
          case "close-icon":
            return <CloseIcon className="cf-icon-svg close-icon" />;
          case "error-icon":
            return <ErrorIcon className="cf-icon-svg error-icon" />;
          case "pencil-edit-icon":
            return <PencilEditIcon className="cf-icon-svg pencil-edit-icon" />;
          case "dollar-sign-icon":
            return <DollarSignIcon className="cf-icon-svg dollar-sign-icon" />;
          case "open-icon":
            return <PlusIcon className="cf-icon-svg plus-icon" />;
          case "star-icon":
            return <FavoriteIcon className="cf-icon-svg favorite-icon" />;
          case "exclamation-point":
            return (
              <ExclamationPointIcon className="cf-icon-svg exclamation-point" />
            );
          case "light-bulb":
            return <LightBulb className="cf-icon-svg light-bulb" />;
          case "facebook-icon":
            return <FacebookIcon className="cf-icon-svg social-media-icon" />;
          case "twitter-icon":
            return <TwitterIcon className="cf-icon-svg social-media-icon" />;
          case "linkedin-icon":
            return <LinkedInIcon className="cf-icon-svg social-media-icon" />;
          case "youtube-icon":
            return <YouTubeIcon className="cf-icon-svg social-media-icon" />;
          case "flickr-icon":
            return <FlickrIcon className="cf-icon-svg social-media-icon" />;
          case "up-arrow-icon":
            return <UpArrowIcon className="cf-icon-svg up-arrow-icon" />;
          case "external-link-icon":
            return (
              <ExternalLinkIcon className="cf-icon-svg external-link-icon" />
            );
          case "save-icon":
            return <SaveIcon className="cf-icon-svg save-icon" />;
          case "search-icon":
            return <SearchIcon className="cf-icon-svg search-icon" />;
          case "complaint-icon":
            return <ComplaintIcon className="cf-icon-svg complaint-icon" />;
          case "menu-icon":
            return <MenuIcon className="cf-icon-svg menu-icon" />;

          default:
            return <div>There is an error on the Icon component</div>;
        }
      })()}
    </div>
  );
};
