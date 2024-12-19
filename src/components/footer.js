import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  color: var(--light-slate);

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Footer = () => {
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/roini7',
    },
  ];

  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </StyledSocialLinks>
    </StyledFooter>
  );
};

export default Footer;
