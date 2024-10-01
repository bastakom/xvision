import { storyblokInit, apiPlugin } from '@storyblok/react'

storyblokInit({
  accessToken: 'FiqVowQPhkWbKvHgCdho1Qtt',
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
})

export default function StoryblokProvider({ children }) {
  return children
}
