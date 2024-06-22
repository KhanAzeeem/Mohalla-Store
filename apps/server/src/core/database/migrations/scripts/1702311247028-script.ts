import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('528a4bec-5640-4646-9114-b89b2ee2bb86', '1Evans_Hessel@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_G4H5I6J7K8L9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('ef1dac81-cdaa-4851-81eb-88e723cb21b8', '8Bernice.Powlowski@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_O6P7Q8R9S0T1', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('4ad6ad6c-4649-4178-94eb-81e569aaa84e', '15Lloyd_Kerluke21@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_O6P7Q8R9S0T1', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('2c9cfd34-c33f-4c0b-95f6-ec8ffff1ba9f', '22Cristopher.Beahan@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_A8B9C0D1E2F3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('9328a910-50ca-4a97-a2fe-866f02838946', '29Kennedi_Hansen-Tromp57@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_G4H5I6J7K8L9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('a78d93b9-5c82-4956-9ad7-d69ff708b58a', '43Ricky40@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_A8B9C0D1E2F3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('eb4f8906-1d19-44cf-9b9e-f6eb151f530b', '50Maybell_Kling@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_J0H1K2L3M4N5', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('a1c4cd2c-b23e-4139-a527-1d54b30b0b50', '57Alessandro_Barton-Corwin31@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_J0H1K2L3M4N5', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('a799eb71-c40c-4014-98c8-d7555629be96', '64Kenna41@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_J0H1K2L3M4N5', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7e6676d1-2c91-4910-ad8d-a49ac3e7edc0', 'Account Verification', 'Your order has been shipped and is on its way.', 'Customer Service', '74Hayden.Fadel@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', 'a78d93b9-5c82-4956-9ad7-d69ff708b58a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d1be0592-5526-4067-91e1-5d05acd6ace3', 'Order Shipped', 'Your order has been shipped and is on its way.', 'Customer Service', '81Lelia_Kerluke43@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d3e33d8d-3e3c-46b9-847a-0ca75cb73757', 'Password Reset', 'You have received a new message from a seller.', 'Amazon Support', '88Judah_Emard21@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7e624a08-9c25-4da9-aca8-56bda58ca5a6', 'Discount Alert', 'Please verify your account to continue using our services.', 'Amazon Support', '95Ashley42@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('861094e9-b5ca-4c3a-8162-ee95eb735d12', 'Discount Alert', 'Get 20 off on your next purchase. Limited time offer', 'John Doe', '102Brett_Medhurst@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '528a4bec-5640-4646-9114-b89b2ee2bb86');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3aeca02f-f6e9-4d22-9c96-916762813d7a', 'Account Verification', 'You have received a new message from a seller.', 'Customer Service', '109Maverick.Miller51@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '9328a910-50ca-4a97-a2fe-866f02838946');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('66abda02-9c6e-4cdf-b3e5-e7282193d9cd', 'Order Shipped', 'Please verify your account to continue using our services.', 'Customer Service', '116Stanford.Ziemann92@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', 'a799eb71-c40c-4014-98c8-d7555629be96');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('83508dfe-6aaa-4363-a6d7-0675ae0ab79e', 'Password Reset', 'Your order has been shipped and is on its way.', 'Sales Team', '123Florida_Streich84@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', 'a78d93b9-5c82-4956-9ad7-d69ff708b58a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('69647bc0-cca4-4a50-b6bb-829f0a7a95f0', 'Discount Alert', 'Click the link to reset your password.', 'Customer Service', '130Maureen56@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', 'a799eb71-c40c-4014-98c8-d7555629be96');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('95b6e858-3f1f-43d9-9962-963ad4f73519', 'Discount Alert', 'Get 20 off on your next purchase. Limited time offer', 'Amazon Support', '137Lionel.Hilll@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '9328a910-50ca-4a97-a2fe-866f02838946');

INSERT INTO "category" ("id", "name") VALUES ('3ddbd794-d118-4194-8512-9129fddc4e78', 'Books');
INSERT INTO "category" ("id", "name") VALUES ('031ea4e0-0fda-4279-8c53-f853f351a650', 'Electronics');
INSERT INTO "category" ("id", "name") VALUES ('26b3b4c8-4074-41e5-8156-9d72f9702491', 'Sports  Outdoors');
INSERT INTO "category" ("id", "name") VALUES ('4a448f0d-7dd2-451e-a964-10f1a514a724', 'Electronics');
INSERT INTO "category" ("id", "name") VALUES ('362eb08d-acff-449b-82ff-bd27f94f090d', 'Sports  Outdoors');
INSERT INTO "category" ("id", "name") VALUES ('b0e9e8c7-c1f1-45b6-9ff0-39f7ee4f61d2', 'Home  Kitchen');
INSERT INTO "category" ("id", "name") VALUES ('e8612875-0ff4-4343-96da-cbeeb48eda95', 'Sports  Outdoors');
INSERT INTO "category" ("id", "name") VALUES ('ecb8313c-341c-4aa7-a379-170ab6440aff', 'Electronics');
INSERT INTO "category" ("id", "name") VALUES ('d6ad2dad-1a5c-446a-9dd6-ef1ee15808a6', 'Sports  Outdoors');
INSERT INTO "category" ("id", "name") VALUES ('cfae51b6-77e5-477f-9898-97bdd226c945', 'Electronics');

INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('3b366ab9-1900-4918-8110-ffe8c649c936', 'Bluetooth Speaker', 'Adjustable laptop stand for ergonomic working.', 410, 114, 'ecb8313c-341c-4aa7-a379-170ab6440aff');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('c4b7577e-932a-4611-8a16-ddbb9fc8bea8', 'Bluetooth Speaker', 'Highquality wireless headphones with noise cancellation.', 268, 465, '031ea4e0-0fda-4279-8c53-f853f351a650');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('fda7ad11-6283-40a9-8836-65a8b2484204', 'Wireless Headphones', 'Highquality wireless headphones with noise cancellation.', 912, 360, 'e8612875-0ff4-4343-96da-cbeeb48eda95');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('0960e174-140a-4fde-9e1a-0b7fbad50f4c', 'Smartphone Case', 'Advanced fitness tracker with heart rate monitor and GPS.', 588, 256, '4a448f0d-7dd2-451e-a964-10f1a514a724');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('81f9d34c-9f2e-4d5b-8025-183da7cd31ac', 'Laptop Stand', 'Portable Bluetooth speaker with excellent sound quality.', 482, 230, '362eb08d-acff-449b-82ff-bd27f94f090d');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('8968260f-4fe4-43ef-abdc-48442ba4b8ee', 'Fitness Tracker', 'Portable Bluetooth speaker with excellent sound quality.', 918, 449, '4a448f0d-7dd2-451e-a964-10f1a514a724');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('3d7bea15-c892-4c22-b0b6-20b52a3fab93', 'Smartphone Case', 'Advanced fitness tracker with heart rate monitor and GPS.', 679, 668, '4a448f0d-7dd2-451e-a964-10f1a514a724');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('c9558e1b-f5a7-4c51-900d-970c1d96df9c', 'Smartphone Case', 'Portable Bluetooth speaker with excellent sound quality.', 476, 181, '4a448f0d-7dd2-451e-a964-10f1a514a724');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('6adf84a1-17c0-42b2-b90d-b0c4e846f253', 'Fitness Tracker', 'Portable Bluetooth speaker with excellent sound quality.', 529, 498, '4a448f0d-7dd2-451e-a964-10f1a514a724');
INSERT INTO "product" ("id", "name", "description", "price", "rating", "categoryId") VALUES ('10f47e88-60cd-48fc-949a-bd3dadddb24a', 'Bluetooth Speaker', 'Advanced fitness tracker with heart rate monitor and GPS.', 390, 24, 'd6ad2dad-1a5c-446a-9dd6-ef1ee15808a6');

INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('4de1d2b8-9153-47ee-bda9-e401b2363140', 972, 'Mediocre quality but decent for the cost.', 'eb4f8906-1d19-44cf-9b9e-f6eb151f530b', '10f47e88-60cd-48fc-949a-bd3dadddb24a');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('ef7f72ee-c05d-4a68-b4e3-6010f8f96adb', 300, 'Not as expected quite disappointed.', 'a799eb71-c40c-4014-98c8-d7555629be96', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('77831d20-a711-4994-b40e-d9fc747dd304', 705, 'Fantastic Will buy again.', 'a1c4cd2c-b23e-4139-a527-1d54b30b0b50', '81f9d34c-9f2e-4d5b-8025-183da7cd31ac');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('7e0755aa-1d69-47b6-a9ae-a27469ea0845', 562, 'Excellent product highly recommend', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('e46bec64-8df9-4fb5-a6b2-7ff70e3240dc', 962, 'Excellent product highly recommend', '9328a910-50ca-4a97-a2fe-866f02838946', 'c9558e1b-f5a7-4c51-900d-970c1d96df9c');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('8b5452f6-16bf-412e-9f99-dd80b73c40fa', 78, 'Excellent product highly recommend', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c9558e1b-f5a7-4c51-900d-970c1d96df9c');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('f34695c5-3986-4b9c-a009-d26448b6b25f', 213, 'Not as expected quite disappointed.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c9558e1b-f5a7-4c51-900d-970c1d96df9c');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('34f1ef52-1e98-45e5-9fe9-2855d12214b8', 362, 'Excellent product highly recommend', 'eb4f8906-1d19-44cf-9b9e-f6eb151f530b', '3b366ab9-1900-4918-8110-ffe8c649c936');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('2b28ad04-52b4-414c-bb11-38b43cf27b3e', 423, 'Excellent product highly recommend', 'a78d93b9-5c82-4956-9ad7-d69ff708b58a', '81f9d34c-9f2e-4d5b-8025-183da7cd31ac');
INSERT INTO "review" ("id", "rating", "comment", "userId", "productId") VALUES ('59e0e3da-513a-44ed-b765-6e1f087b37fe', 815, 'Not as expected quite disappointed.', '528a4bec-5640-4646-9114-b89b2ee2bb86', '10f47e88-60cd-48fc-949a-bd3dadddb24a');

INSERT INTO "wishlist" ("id", "userId") VALUES ('27676ce2-ea80-4a20-8d3d-e9a682699c4e', 'a799eb71-c40c-4014-98c8-d7555629be96');
INSERT INTO "wishlist" ("id", "userId") VALUES ('12272718-68c8-4766-8d98-1677c4821945', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "wishlist" ("id", "userId") VALUES ('05cfc280-1af1-42cd-a99f-49e26ae3c10e', '528a4bec-5640-4646-9114-b89b2ee2bb86');
INSERT INTO "wishlist" ("id", "userId") VALUES ('6e5d1073-a1de-4fcc-aa42-968b76f790d4', '528a4bec-5640-4646-9114-b89b2ee2bb86');
INSERT INTO "wishlist" ("id", "userId") VALUES ('b20af2de-1a9e-4568-9a91-396c471dc2c6', 'a1c4cd2c-b23e-4139-a527-1d54b30b0b50');
INSERT INTO "wishlist" ("id", "userId") VALUES ('450c373c-926d-49e3-acb3-8113d8e2ef3f', '2c9cfd34-c33f-4c0b-95f6-ec8ffff1ba9f');
INSERT INTO "wishlist" ("id", "userId") VALUES ('9c4342e4-7fbd-4f1e-bf41-d4423adb72c1', '9328a910-50ca-4a97-a2fe-866f02838946');
INSERT INTO "wishlist" ("id", "userId") VALUES ('4ab3df0b-a7ae-4e4e-b151-0a5ad4081121', '4ad6ad6c-4649-4178-94eb-81e569aaa84e');
INSERT INTO "wishlist" ("id", "userId") VALUES ('9d40955b-3f49-417c-b266-0628f0ab2929', '9328a910-50ca-4a97-a2fe-866f02838946');
INSERT INTO "wishlist" ("id", "userId") VALUES ('42ea613f-2404-4e7d-aba3-8057d1b2074c', 'a799eb71-c40c-4014-98c8-d7555629be96');

INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('f230babb-d37b-42b6-813a-cd13c8dbc762', '12272718-68c8-4766-8d98-1677c4821945', '3d7bea15-c892-4c22-b0b6-20b52a3fab93');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('0b84f74f-f523-47f4-8c50-193d0bdbd06c', '6e5d1073-a1de-4fcc-aa42-968b76f790d4', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('1569c439-a9ba-4fcd-9b1e-e38f112ad31f', '27676ce2-ea80-4a20-8d3d-e9a682699c4e', 'c9558e1b-f5a7-4c51-900d-970c1d96df9c');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('cb393e07-7180-4abf-9ec3-c05b4fbd1ded', '12272718-68c8-4766-8d98-1677c4821945', '6adf84a1-17c0-42b2-b90d-b0c4e846f253');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('30de0d15-761b-48f3-b305-dfa051b03b7f', '450c373c-926d-49e3-acb3-8113d8e2ef3f', '10f47e88-60cd-48fc-949a-bd3dadddb24a');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('3ad999d4-c37c-41ff-a310-9b8f6c16abcd', '6e5d1073-a1de-4fcc-aa42-968b76f790d4', '3d7bea15-c892-4c22-b0b6-20b52a3fab93');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('d187ac13-9628-405f-8043-6fdd37dcecd2', '450c373c-926d-49e3-acb3-8113d8e2ef3f', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('b2cfb29a-bd2b-4d95-bcf7-d237105ff2c3', '27676ce2-ea80-4a20-8d3d-e9a682699c4e', '3d7bea15-c892-4c22-b0b6-20b52a3fab93');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('504966a2-b1fc-4921-91b9-f3f3bc4a12de', '42ea613f-2404-4e7d-aba3-8057d1b2074c', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');
INSERT INTO "wishlist_item" ("id", "wishlistId", "productId") VALUES ('999c6689-7471-4516-b135-c1bfc4257abe', '27676ce2-ea80-4a20-8d3d-e9a682699c4e', 'fda7ad11-6283-40a9-8836-65a8b2484204');

INSERT INTO "cart" ("id", "userId") VALUES ('32adb9db-e464-4958-a58c-27d7f76bdc88', 'a799eb71-c40c-4014-98c8-d7555629be96');
INSERT INTO "cart" ("id", "userId") VALUES ('baabb59a-c6c4-414c-aa64-eaef79bec242', '4ad6ad6c-4649-4178-94eb-81e569aaa84e');
INSERT INTO "cart" ("id", "userId") VALUES ('3e5a11bc-9543-4ff5-ad37-999406ef6614', 'a78d93b9-5c82-4956-9ad7-d69ff708b58a');
INSERT INTO "cart" ("id", "userId") VALUES ('4c8c3328-d879-4e1a-a52a-e29213644842', '4ad6ad6c-4649-4178-94eb-81e569aaa84e');
INSERT INTO "cart" ("id", "userId") VALUES ('8a5a1108-122e-48ed-8e34-be36f478ab3b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "cart" ("id", "userId") VALUES ('e830be9d-e0af-4bf2-9c52-ac8ec6a62363', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8');
INSERT INTO "cart" ("id", "userId") VALUES ('25efc682-a2a6-4fdd-8f78-ae7e51a88a73', 'a1c4cd2c-b23e-4139-a527-1d54b30b0b50');
INSERT INTO "cart" ("id", "userId") VALUES ('bce90f7b-871f-49d3-a7f9-c2c1a468d37c', '4ad6ad6c-4649-4178-94eb-81e569aaa84e');
INSERT INTO "cart" ("id", "userId") VALUES ('ccfd712e-d5a5-4e07-bb71-f61a24c3435d', '2c9cfd34-c33f-4c0b-95f6-ec8ffff1ba9f');
INSERT INTO "cart" ("id", "userId") VALUES ('62436d3d-ba96-407e-8c0e-28a3cb077f28', 'a799eb71-c40c-4014-98c8-d7555629be96');

INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('d95deb35-378a-432d-a6b3-6b287e283b42', 847, 'baabb59a-c6c4-414c-aa64-eaef79bec242', '6adf84a1-17c0-42b2-b90d-b0c4e846f253');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('5336ef41-e31c-4b0c-b6c8-1a6462e4b315', 907, 'e830be9d-e0af-4bf2-9c52-ac8ec6a62363', '3b366ab9-1900-4918-8110-ffe8c649c936');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('d0de873c-6fc7-4fea-9264-ed1a690f72c2', 230, 'bce90f7b-871f-49d3-a7f9-c2c1a468d37c', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('1c5c2fb2-d198-4e1a-a989-6c65cb03c4b6', 302, '25efc682-a2a6-4fdd-8f78-ae7e51a88a73', '6adf84a1-17c0-42b2-b90d-b0c4e846f253');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('06e4fd2b-5327-46bd-803a-22cc95090f09', 311, '4c8c3328-d879-4e1a-a52a-e29213644842', '0960e174-140a-4fde-9e1a-0b7fbad50f4c');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('f8a1e098-69ca-41a3-ad28-cd2be9546096', 555, 'baabb59a-c6c4-414c-aa64-eaef79bec242', 'fda7ad11-6283-40a9-8836-65a8b2484204');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('2132c4b2-d80a-4dcc-acc4-ba43985d0c4b', 259, '32adb9db-e464-4958-a58c-27d7f76bdc88', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('41ba5873-2628-4290-8c20-ad7a9e40fee7', 886, 'baabb59a-c6c4-414c-aa64-eaef79bec242', 'c9558e1b-f5a7-4c51-900d-970c1d96df9c');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('e0abcf02-7d09-4837-a9e5-f1f62f0a9186', 919, 'ccfd712e-d5a5-4e07-bb71-f61a24c3435d', '3b366ab9-1900-4918-8110-ffe8c649c936');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "productId") VALUES ('67b2d5a7-910d-4910-9d85-18e7d176cab0', 355, '4c8c3328-d879-4e1a-a52a-e29213644842', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');

INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('4ea8aa29-ab83-4ee0-8737-765a4f0b0c87', '123 Main St Springfield IL', 'Discover ending in 1121', 'Shipped', 'eb4f8906-1d19-44cf-9b9e-f6eb151f530b');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('46ee4e50-ecc9-407d-b092-1c50490b4010', '202 Pine St Central City TX', 'Discover ending in 1121', 'Shipped', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('388e5b46-4230-47a7-b53c-b4f80ffbd203', '456 Elm St Metropolis NY', 'Discover ending in 1121', 'Shipped', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('c3fa9c36-49d5-4040-9db5-6c72821174e0', '789 Oak St Gotham NJ', 'Discover ending in 1121', 'Shipped', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('32a38ce3-6ab4-4a71-a7d8-31a8b5a98f30', '101 Maple St Star City CA', 'PayPal account userexample.com', 'Processing', 'eb4f8906-1d19-44cf-9b9e-f6eb151f530b');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('38102d94-6ca0-4b57-8674-734fc644128a', '101 Maple St Star City CA', 'PayPal account userexample.com', 'Shipped', 'ef1dac81-cdaa-4851-81eb-88e723cb21b8');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('56613781-9323-4c14-a2da-4b8cfbc6d1cc', '123 Main St Springfield IL', 'Visa ending in 1234', 'Processing', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('a0efa5b5-450e-4384-b37e-30b304c28414', '456 Elm St Metropolis NY', 'PayPal account userexample.com', 'Processing', 'a1c4cd2c-b23e-4139-a527-1d54b30b0b50');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('53b1dfda-0c35-4048-8354-065b19e47c46', '123 Main St Springfield IL', 'MasterCard ending in 5678', 'Processing', '528a4bec-5640-4646-9114-b89b2ee2bb86');
INSERT INTO "order" ("id", "shippingInfo", "paymentInfo", "status", "userId") VALUES ('ed59bb8a-741c-4971-b591-c60fbcaa3578', '202 Pine St Central City TX', 'MasterCard ending in 5678', 'Returned', 'eb4f8906-1d19-44cf-9b9e-f6eb151f530b');

INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('6999c42b-aaaf-4bdf-97a3-90fb451f332a', 507, 60, '38102d94-6ca0-4b57-8674-734fc644128a', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('3aa64e94-dd42-4706-bde0-f004a36544b3', 471, 312, '388e5b46-4230-47a7-b53c-b4f80ffbd203', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('45cf0162-2dfc-48ad-92ef-92713b264585', 732, 267, '4ea8aa29-ab83-4ee0-8737-765a4f0b0c87', '81f9d34c-9f2e-4d5b-8025-183da7cd31ac');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('e2bd93d1-8d82-448b-80b5-49a1bf378ea3', 169, 865, 'c3fa9c36-49d5-4040-9db5-6c72821174e0', '8968260f-4fe4-43ef-abdc-48442ba4b8ee');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('9da6aca9-4cb6-4801-b1a9-802df0a2155f', 712, 996, '56613781-9323-4c14-a2da-4b8cfbc6d1cc', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('48231d0c-d6f4-4543-bc22-3e47b8f5080e', 448, 771, '38102d94-6ca0-4b57-8674-734fc644128a', '3b366ab9-1900-4918-8110-ffe8c649c936');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('ee4ff529-0d72-44e1-a8e9-0d2c50298933', 992, 451, '53b1dfda-0c35-4048-8354-065b19e47c46', '81f9d34c-9f2e-4d5b-8025-183da7cd31ac');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('b8c23f06-94f5-4675-b118-a44c66593e3e', 750, 609, 'a0efa5b5-450e-4384-b37e-30b304c28414', 'c4b7577e-932a-4611-8a16-ddbb9fc8bea8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('80641047-30eb-4342-925f-7725af671de9', 227, 819, '388e5b46-4230-47a7-b53c-b4f80ffbd203', '6adf84a1-17c0-42b2-b90d-b0c4e846f253');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('f2e226d9-d7ef-47b0-b890-0750aeff5e6f', 510, 77, '56613781-9323-4c14-a2da-4b8cfbc6d1cc', '3d7bea15-c892-4c22-b0b6-20b52a3fab93');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
