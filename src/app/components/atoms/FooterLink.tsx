import React from "react";

export const FooterLink = (props: { linkText: string }) => {
  return (
    <>
      <a
        className=""
        href="https://github.com/" //añadir link de nuestro github
        rel="nofollow noreferrer" //esto es para que se abra una nueva pestaña
        target="_blank"           //y mejorar la seguridad
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
