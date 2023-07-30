import React from "react";

type Props = {
    children: React.ReactNode;
};

const HeaderText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-monsterrat text-3xl font-bold">
      {children}
    </h1>
  );
};

export default HeaderText;
