import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import './TechCard.css';

interface TechCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle?: "btn--danger" | "btn--success" | "btn--primary";
  href: string;
  featured?: boolean;
}

const TechCard = ({
  title,
  image,
  imageAlt,
  description,
  features,
  buttonText,
  buttonStyle = "btn--primary",
  href,
  featured = false,
}: TechCardProps) => {
  return (
    <div className={`access-card ${featured ? "featured" : ""}`}>
      <div className="option-name">{title}</div>

      <div className="option-price">
        <Image
          src={image}
          alt={imageAlt}
          width={300}
          height={300}
          priority={featured}
        />
      </div>

      <div className="option-period">{description}</div>

      <ul className="option-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <Link href={href}>
        <Button
          className="btn--clip"
          buttonSize="btn--wide"
          buttonStyle={buttonStyle}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}; 
export default TechCard;