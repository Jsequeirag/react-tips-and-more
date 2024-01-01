import React from "react";

const Layout = (props) => {
  return (
    <>
      <section className="w-5/6 mx-auto px-8 pt-10">
        <div className="bg-slate-700">{props.children}</div>
      </section>
    </>
  );
};

export default Layout;
