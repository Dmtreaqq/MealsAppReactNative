import { StyleSheet, StatusBar, Platform, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

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
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
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
