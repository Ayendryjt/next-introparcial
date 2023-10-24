import React from "react";

export const FooterLink = (props: { linkText: string }) => {
  return (
    <>
      <a
        className=""
        href="https://github.com/Ayendryjt/next-introparcial.git" 
        rel="nofollow noreferrer" //
        target="_blank"           //
      >
        {props.linkText}
        <picture className="">
            <img
              width="35"
              height="10"
              loading="lazy"
              src="C:\Users\adm\Downloads\next-intro-parcial\next-intro-parcial\images\25231.png" //añadir imagen
              alt="github logo"
            />
        </picture>
      </a>
    
    </>
    
  );
};
