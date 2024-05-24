import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";

import styles from "../css/Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <Footer.Copyright
          // href="https://mahmoud-mansy-portfolio.netlify.app/"
          // by={
          //   <span>
          //     <FiAtSign className={styles.atSymbol} />
          //   </span>
          // }
          year={2024}
        />
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/abdelrahman-ayman-290674252/"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://github.com/AbdelrahmanAyman48"
            icon={BsGithub}
          />
          <Footer.Icon
            href="mailto:abdelrmanayman48@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://t.me/" icon={BsTelegram} />
          <Footer.Icon
            href="https://api.whatsapp.com/send/?phone=20101089082&text&type=phone_number&app_absent=0"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
