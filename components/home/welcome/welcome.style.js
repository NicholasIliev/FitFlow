import { StyleSheet, PixelRatio, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

pixelRatio = PixelRatio.get()
fontRatio = PixelRatio.getFontScale()
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  startBtn: {
    width: "100%",
    height: "85%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "20%",
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptySpace: {
    height: (10*pixelRatio), 
    width: '100%', 
    opacity: 0 
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: "20%",
  },
  containerMyPrograms: {
    width: '110%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.primary,
    marginTop: 20,
  },
  programsTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: "15%",
  },
  myPrograms: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginTop: "5%",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  addProgramBtnSmall: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "47.5%",
    marginTop: "15%",
    backgroundColor: COLORS.fadedTertiary,
    borderRadius: SIZES.medium,
  },
  addProgrammeBtnLarge: {
    width: (50*pixelRatio),
    height: "100%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    borderWidth: "1px",
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: (10*pixelRatio),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  flatList: {
    height: "80%",
    paddingBottom: (6*pixelRatio),
  },
  flatListContentContainer: {
    paddingRight: (4*pixelRatio),
  },
  scrollViewContentContainer: {
    paddingBottom: (150*pixelRatio),
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    width: "70%",
    height: "200%",
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;