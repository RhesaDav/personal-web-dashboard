import React from "react";

export default function BannerDashboard () {
  return (
    <div>
      <div className="flex items-center py-3 px-2">
        <img
          alt=""
          className="w-20 h-20"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=Overall&clotheColor=Red&eyeType=EyeRoll&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Brown"
        />
        <div className="flex gap-2 flex-col">
          <span className="font-semibold text-3xl">Hello Rhesa</span>
          <span className="text-gray-500 text-sm">Fullstack Developer</span>
        </div>
      </div>
    </div>
  );
}
