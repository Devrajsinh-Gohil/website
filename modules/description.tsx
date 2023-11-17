import { IconType } from "react-icons";
import { servicesStats } from "@/data";
import { forwardRef } from "react";

function D() {
  const mapper = (
    val: { Icon: IconType; title: string; content: string },
    ind: number
  ) => {
    const { Icon, title, content } = val;
    return (
      <div className="dec-point" key={ind}>
        <Icon />
        <div className="dec-text">
          <span className="dec-point-head">{title}</span>
          <p className="dec-point-para">{content}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="des-main">
      <h3 className="des-heading">WHAT WE DO</h3>
      <span className="des-declaration">
        {
          "We are an innovative enterprise that specializes in quantum solutions and related services. Our vision is to foster a sustainable future by leveraging the potential of quantum technology."
        }
      </span>
      <div className="dec-points">{servicesStats.map(mapper)}</div>
    </section>
  );
}

const Description = forwardRef(D);
export default Description