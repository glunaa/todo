import React, { FC } from 'react';
interface Props {
  header: string;
}
const Header: FC<Props> = ({ header }) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};

export default Header;
