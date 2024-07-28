import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTelegramPlane, // Import Telegram icon from react-icons
} from "react-icons/fa"; // Ensure you have the FaTelegramPlane icon

import { socialprofils } from "../../content_option"; // Corrected import name

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegramPlane /> {/* Use the Telegram icon */}
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
