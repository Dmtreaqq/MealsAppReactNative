import { StyleSheet, StatusBar, Platform, FlatList } from "react-native";
import { useContext } from "react";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const isAndroid = Platform.OS === "android";

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  min-height: 0;
  border-bottom-width: 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search>
        <SearchBar
          inputStyle={styles.searchBarInput}
          placeholder="Search"
          mode={isAndroid ? "view" : "bar"}
          showDivider={false}
          elevation={1}
        />
      </Search>
      {isLoading && <ActivityIndicator animating={true} size="medium" />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  searchBarInput: {
    minHeight: 40,
    borderBottomWidth: 0,
  },
});
