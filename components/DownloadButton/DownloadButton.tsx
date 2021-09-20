import { FC } from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { Box, Heading, Text, Stack } from "../";
import shouldForwardProp from "@styled-system/should-forward-prop";

type DownloadButtonProps = {
  href: string;
  label: string;
  category?: string;
};

const BaseDownloadButton = styled(Box, { shouldForwardProp })`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  display: flex;
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 16px 40px;
  margin: 0 20px;
  box-shadow: 0 3px 8px 0 rgb(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.grey[600]};
  transition: 0.3s ease;

  .label {
    transition: 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 10px 0 rgb(0, 0, 0, 0.1);

    .label {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export const DownloadButton: FC<DownloadButtonProps> = ({
  href,
  label,
  category,
}) => (
  <NextLink href={href} passHref>
    <BaseDownloadButton as="a">
      <Stack gap={0} as="span">
        {label && (
          <Text as="span" size="md" fontWeight="medium" className="label">
            {label}
          </Text>
        )}
        {category && (
          <Text as="span" size="xs" opacity={0.4}>
            {category}
          </Text>
        )}
      </Stack>
    </BaseDownloadButton>
  </NextLink>
);

export default DownloadButton;
