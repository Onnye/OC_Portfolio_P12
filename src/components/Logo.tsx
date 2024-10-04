import Image from "next/image";
import styles from "../styles/components/navbar.module.scss";
import logoImageLight from "../../public/images/blue_logo.webp";
import logoImageDark from "../../public/images/purple_logo.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface LogoProps {
  theme: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  const logoSrc: string | StaticImport =
    theme === "dark" ? logoImageDark : logoImageLight;

  return (
    <div className={styles.logoWrapper}>
      <Image
        src={logoSrc}
        alt={`Logo Laura Tufo - ${theme} theme`}
        width={50}
        height={50}
        className={styles.logoImage}
      />
    </div>
  );
};

export default Logo;
