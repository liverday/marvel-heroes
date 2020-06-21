# <center>![Logo](https://user-images.githubusercontent.com/11545976/85130568-88ef7400-b20b-11ea-8ca3-a949021a6ade.png)</center>

## :page_facing_up: Summary

- :bulb: [About](#-about)
- :computer: [Techs](#-techs)
- :running: [How to Run](#-how-to-run)

## :bulb: About

Mobile app developed based on a challenged proposed by [umpontoseis](https://umpontoseis.com/), the challenge is available on [Figma](https://figma.com) and you can access it [here](https://www.figma.com/community/file/849367817302905364/Marvel-Heroes).

## :computer: Techs

 - React Native
 - typescript
 - json-server
 - axios
 - styled-components
 - react-native-svg
 - react-native-svg-transformer
 - react-native-linear-gradient

## :running: How to Run

```bash
  # cloning repository
  git clone https://github.com/liverday/marvel-heroes
  # access folder
  cd marvel-heroes
  # install dependencies
  yarn install
  # enable reverse proxy (allow you to use localhost)
  adb reverse tcp:3000 tcp:3000
  # running fake api
  yarn api
  # install app
  npx react-native run-android
```