export namespace WishlistItemApplicationEvent {
  export namespace WishlistItemCreated {
    export const key = 'wishlistItem.application.wishlistItem.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
