import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "../../../infra/theme";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    icon,
    name = "McDonalds",
    photos = ["https://picsum.photos/300"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.75,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={4}>
      <RestaurantCardCover
        theme={{ ...theme }}
        key={name}
        source={{ uri: photos[0] }}
      />

      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
