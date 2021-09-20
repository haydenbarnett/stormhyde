import { FC } from "react";
import data from "./data";
import { ResponsiveValue } from "styled-system";
import { Container, Grid, Box, Card, GridItem } from "../";

type CardGridProps = {
  mt?: ResponsiveValue<number | string>;
  bg?: ResponsiveValue<string>;
};

export const CardGrid: FC<CardGridProps> = ({ mt, bg }) => (
  <Box mt={mt} bg={bg}>
    <Container>
      <Grid columns={12}>
        {data.products?.map((item, index) => {
          return (
            <GridItem key={index} colSpan={[12, 6, null, 4]}>
              <Card {...item} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

export default CardGrid;
