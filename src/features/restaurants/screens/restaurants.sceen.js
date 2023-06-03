import { StyleSheet, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const List = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const Search = styled.View`
  padding: 16px;
`;

const SearchBar = styled(Searchbar)`
  min-height: 0;
  border-bottom-width: 0;
  background-color: white;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <Search>
        <SearchBar
          inputStyle={styles.searchBarInput}
          placeholder="Search"
          mode={isAndroid ? "view" : "bar"}
          showDivider={false}
          elevation={2}
        />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  searchBarInput: {
    minHeight: 40,
    borderBottomWidth: 0,
  },
});
