import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
  url: "https://woocom.vgts.tech/",
  consumerKey: "ck_dc7e410534faae393f08bd6a2337eedbbfd9be8e",
  consumerSecret: "cs_2605527ed70743f4de342df0f8e2304b30a41918",
  version: "wc/v3",
});
