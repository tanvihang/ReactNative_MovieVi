# React Native Demo
- custom hooks for fetching data
- dynamic stylesheet
- responsive design
- search
- pagination


## Expo 构建工具
https://expo.dev/
>it's like vite, but for react native
1. navigation
2. gesture
3. camera
4. map

Router

## React Native components
- TouchableOpacity 按钮
- FlatList
- Views
- Text
- Image

## Choosing an api
Chosen mini movie database
https://rapidapi.com/SAdrian/api/moviesminidatabase

it has movie, genre, actor, series, episode, pk

so it's good enough to learn the development of mobile app **(almost like 前后端分离叻)**


# Setup Project
1. create react-native using expo
2. install package: expo-font, axios, react-native-dotenv
3. run the project and display on `expo go`
```bash
npm run

# or
npm install -g expo-cli
expo-cli start --tunnel
```

# Project Structure
1. app
2. constants
3. styles
4. assets
5. components
   1. common
   2. home
   3. index.js
   4. pojo

# Developing
## 1 Importing component
1. creating component
```js
import React from 'react'
import { View, Text } from 'react-native'

import styles from './screenheader.style'

const component = () => {
  return (
    <View>
      <Text>component</Text>
    </View>
  )
}

export default component
```

- to use component, can use it like this
```js
<Stack.Screen
    options ={{
        headerStyle:{backgroundColor:COLORS.gray},
        headerShadowVisible:false,
        headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        ),
        headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
        ),
        headerTitle: ""
    }}
/>
```

## 2 Playing with styles using StyleSheet method

### It can pass parameter to StyleSheet type
```jsx
<TouchableOpacity style = {styles.tab(activeMovieType,item)}>
    <Text>{item}</Text>
</TouchableOpacity>
```

哇啊啊啊，你看看他的css可以用这样子的statement `borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,`
```js
tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }
```

## 3 Passing parameter to Component
```jsx
// the parent
<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
```

```jsx
// the component
const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
      />
    </TouchableOpacity>
  )
}
```

## 4 Importing custom fonts
Not working currently, not sure what is wrong?

## 5 Create State状态
it looks like this
```jsx
const [data, setData] = useState();
```
- data is the item we get
- to set data, use `setData()`

```jsx
const [activeMovieType, setActiveMovieType] = useState('Fantasy');

// 更改状态的方法
// setActiveMoveType()
<TouchableOpacity 
                style = {styles.tab(activeMovieType,item)}
                onPress = {()=>{
                  setActiveMovieType(item)
                  router.push(`/search/${item}`)
                }}
              >

```



## 6 Dynamic block 类似于vue的v-if

`{ .... }`

```jsx
const isLoaded = false;
const error = false;

{
    isLoaded ? (
        // loaded case
    ):
    error ? (
        // error case
    ):
    (
        // true case
    )
}
```

```jsx
<View style={styles.cardContainer}>
    {isLoading ? (
        <ActivityIndicator
            size="large"
            colors = {COLORS.primary}
        />
    ): error ? (
        <Text>Something went wrong</Text>
    ): (
        <FlatList
            data = {[1,2,3]}
            renderItem={({item}) => (
                <PopularMovieCard item={item}/>
            )}
            keyExtractor={item => item}
            contentContainerStyle = {{columnGap: SIZES.medium}}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
    }
</View>
```

## 7 Creating custom hooks
>hooks are just like the 接口。 **I THINK SO**

1. create folder in root called `hook`
2. create `useFetch.js` to fetch api



## 8 Creating Special environment
1. `.env` file
```txt
RAPID_API_KEY = .....
//OTHERS IMPORTANT VALUE
```

2. import env variable to use it
```jsx
import {RAPID_API_KEY} from '@env';

const rapidApiKey = RAPID_API_KEY;
```



# Links
- Free API https://rapidapi.com/
- new local Expo CLI for running https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
- expo https://expo.dev/

# Reference
[Build and Deploy a React Native App | 2023 React Native Course Tutorial for Beginners](https://www.youtube.com/watch?v=mJ3bGvy0WAY&ab_channel=JavaScriptMastery)