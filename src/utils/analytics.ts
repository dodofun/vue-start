export const analyticsEvent = (name, params) => {
  // @ts-ignore
  gtag('event', name, params)
}
