import React from "react";
import HeroHeadline from "../HeroHeadline/HeroHeadline";
import HeadlineGroup from "../HeadlineGroup/HeadlineGroup";
import QuadrantSection from "../QuadrantSection/QuadrantSection";
import Fadeable from "../Fadeable/Fadeable";
import SetTitle from "../SetTitle";
import RadarChart from "../Chart/RadarChart";


import { ConfigData, translate } from "../../config";
import { featuredOnly, groupByQuadrants, Item } from "../../model";

type PageQuadrantProps = {
  leaving: boolean;
  onLeave: () => void;
  pageName: string;
  items: Item[];
  config: ConfigData;
};


export default function PageQuadrant({
  leaving,
  onLeave,
  pageName,
  items,
  config,
}: PageQuadrantProps) {
  const groups = groupByQuadrants(featuredOnly(items));

  const filteredItems = items.filter((item: Item) => item.quadrant === pageName)
  const filteredConfig = {...config,  
    quadrantsMap: {[pageName]: { ...config.quadrantsMap[pageName], position: 1 }}}

  return (
    <Fadeable leaving={leaving} onLeave={onLeave}>
      <SetTitle title={translate(config, pageName)} />
      <HeadlineGroup>
        <HeroHeadline>{translate(config, pageName)}</HeroHeadline>
      </HeadlineGroup>
      <RadarChart items={filteredItems} config={filteredConfig} />
      <QuadrantSection
        groups={groups}
        quadrantName={pageName}
        config={config}
        big
      />
    </Fadeable>
  );
}
