export namespace WishlistApplicationEvent {
  export namespace WishlistCreated {
    export const key = 'wishlist.application.wishlist.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
