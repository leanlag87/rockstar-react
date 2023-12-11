import React from "react";

const BtnFooter = (props) => {
  const { content, styleClass } = props;
  return (
    <a className={`footer__link-user ${styleClass}`} href="#">
      {content}
    </a>
  );
};

export default BtnFooter;
