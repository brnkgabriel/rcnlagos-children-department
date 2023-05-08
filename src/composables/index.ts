import { iHead } from "~/types/interfaces"

export const head = (headOptions: iHead) => {
  const name = (headOptions.name as string).length > 0 ? headOptions.name : 'Home | RCN Lagos - Children Department'

  const description = (headOptions.description as string) ? headOptions.description : 'Towards the rebirth of Apostolic Christianity. We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus proclamation in Matthew 21:13 that My house shall be called the house of prayer'

  return {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: "https://ik.imagekit.io/hbofcejtvx/rcnlagos/children/others/banner_1920x1080.png?updatedAt=1683520012742" },
      { hid: 'og:title', property: 'og:title', content: "RCN Lagos - Children Department" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos - Children Department" },
      { hid: 'og:name', property: 'og:name', content: "RCN Lagos - Children Department" },
      { hid: 'og:type', property: 'og:type', content: "website" },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image:type', property: 'og:image:type', content: 'JPEG' },
      { hid: 'og:url', property: 'og:url', content: "https://rcnlagos.org/" },
      { hid: 'keywords', name: 'keywords', content: 'rcn, rcnlagos, RCN Lagos - Children Department, apostolic, rebirth, transformation, christianity, Matthew 21:13, remnant, network, voice of one, the convergence, threshing floor, 10 hours' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: "gDtsdsW0Ssdl8GrzaZ1Jy3sTtM2DI5e4s2h525waHZs" },
      { hid: "robots", name: "robots", content: "index,follow" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/css/styles.css"
      }
    ]
  }
}