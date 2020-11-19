import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item as="a" href="https://randomuser.me/" target="_blank" header>
        RandomUser
      </Menu.Item>
      <Menu.Item
        as="a"
        href="https://github.com/koftov"
        target="_blank"
        position="right"
      >
        <Icon name="github" />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
