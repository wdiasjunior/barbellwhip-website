// ugh I hate css animations. this was supposed to be simple but it just did not work

let feat_1_Img = 1;
let feat_1_Length = 4;

let feat_2_Img = 1;
let feat_2_Length = 2;

let feat_3_Img = 1;
let feat_3_Length = 5;

function featureImagesAnimation() {
  document.getElementById("feature_1_id" + feat_1_Img).classList.remove("feature_item_img_active");
  document.getElementById("feature_2_id" + feat_2_Img).classList.remove("feature_item_img_active");
  document.getElementById("feature_3_id" + feat_3_Img).classList.remove("feature_item_img_active");

  feat_1_Img++;
  if(feat_1_Img > feat_1_Length) {
    feat_1_Img = 1;
  }

  feat_2_Img++;
  if(feat_2_Img > feat_2_Length) {
    feat_2_Img = 1;
  }

  feat_3_Img++;
  if(feat_3_Img > feat_3_Length) {
    feat_3_Img = 1;
  }

  document.getElementById("feature_1_id" + feat_1_Img).classList.add("feature_item_img_active");
  document.getElementById("feature_2_id" + feat_2_Img).classList.add("feature_item_img_active");
  document.getElementById("feature_3_id" + feat_3_Img).classList.add("feature_item_img_active");
}

window.onload = () => {
  setInterval(featureImagesAnimation, 4500);
};
