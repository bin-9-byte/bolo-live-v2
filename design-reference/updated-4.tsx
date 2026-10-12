const assetPathPrefix = "/figma-components";
const imgChevronRight = `${assetPathPrefix}/00c26.svg`;
const imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2 = `${assetPathPrefix}/91756.png`;
const imgAb6AXuA0WdpqKcvTj60J5K2JvRTsn7DFxj8OeOr0SrHrr6YRv6UzJxRfmOyl5Mym76EW3U5B8M2Ms2Oq9RPs5I8P1CSSqfhyVov2EzNlNfMu07Dh0IrgqIEuBbrKd9Rod33G13A38M6S1MmLsxPbjjyhqNyZgFwlg0NcSbZXxFJeKq40ZhYYrOt6JMDfHo0M43BaRnBJe1CZaOihq3OFj6DK1KlFVc4NiwkKaBvSf8XJArn2PXpHwQupWjw9SaVfWeou6HsVc4Kp = `${assetPathPrefix}/ae873.png`;
const imgAb6AXuA0WdpqKcvTj60J5K2JvRTsn7DFxj8OeOr0SrHrr6YRv6UzJxRfmOyl5Mym76EW3U5B8M2Ms2Oq9RPs5I8P1CSSqfhyVov2EzNlNfMu07Dh0IrgqIEuBbrKd9Rod33G13A38M6S1MmLsxPbjjyhqNyZgFwlg0NcSbZXxFJeKq40ZhYYrOt6JMDfHo0M43BaRnBJe1CZaOihq3OFj6DK1KlFVc4NiwkKaBvSf8XJArn2PXpHwQupWjw9SaVfWeou6HsVc4Kp1 = `${assetPathPrefix}/895e4.png`;
const imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone3 = `${assetPathPrefix}/95564.png`;
const img11 = `${assetPathPrefix}/20074.png`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const imgAdd16 = `${assetPathPrefix}/db7b7.svg`;
const imgTimelineClip9 = `${assetPathPrefix}/c76b8.svg`;
const imgTimelineClip10 = `${assetPathPrefix}/cc8b6.svg`;
const imgTimelineClip11 = `${assetPathPrefix}/6e89f.svg`;

function ChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="353:38458" data-name="chevron_right">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "默认" | "左右滚动中间态" | "左右滚动最右态";
};

export default function Component({ className, property1 = "默认" }: ComponentProps) {
  const is = property1 === "左右滚动中间态";
  const is1 = property1 === "左右滚动最右态";
  const isOr = ["默认", "左右滚动中间态"].includes(property1);
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col h-[226px] items-center overflow-clip relative rounded-[28px] w-[765px]"} id={is1 ? "node-709_9580" : is ? "node-709_9441" : "node-709_8634"}>
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" id={is1 ? "node-709_9581" : is ? "node-709_9442" : "node-709_8159"} data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" id={is1 ? "node-709_9582" : is ? "node-709_9443" : "node-709_8160"}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" id={is1 ? "node-709_9583" : is ? "node-709_9444" : "node-709_8161"}>
              <div className="flex items-center justify-center relative shrink-0" id={is1 ? "node-709_9584" : is ? "node-709_9445" : "node-709_8162"}>
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" id={is1 ? "node-709_9588" : is ? "node-709_9449" : "node-709_8166"} data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" id={is1 ? "node-709_9589" : is ? "node-709_9450" : "node-709_8167"} data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" id={is1 ? "node-709_9590" : is ? "node-709_9451" : "node-709_8168"} style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">贴纸</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px pb-[16px] pt-[8px] px-[16px] relative w-full" id={is1 ? "node-709_9598" : is ? "node-709_9459" : "node-709_8176"}>
        <div className="content-stretch flex flex-col gap-[8px] h-full items-start relative shrink-0 w-[96px]" id={is1 ? "node-709_9599" : is ? "node-709_9460" : "node-709_8302"} data-name="Timeline Clip 03">
          <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" id={is1 ? "node-709_9600" : is ? "node-709_9461" : "node-709_8303"} data-name="不同数量尺寸展示逻辑">
            <div className="relative shrink-0 size-[20px]" id={is1 ? "node-I709_9600-10322_63900" : is ? "node-I709_9461-10322_63900" : "node-I709_8303-10322_63900"} data-name="Add_16">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd16} />
            </div>
            <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" id={is1 ? "node-I709_9600-8559_38416" : is ? "node-I709_9461-8559_38416" : "node-I709_8303-8559_38416"} data-name="素材标记">
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" id={is1 ? "node-I709_9600-8559_38416-8559_38411" : is ? "node-I709_9461-8559_38416-8559_38411" : "node-I709_8303-8559_38416-8559_38411"}>
                当前贴纸
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-full isolate items-center min-w-px relative" id={is1 ? "node-709_9606" : is ? "node-709_9467" : "node-709_8298"} data-name="toollist">
          {isOr && (
            <div className={`${String.raw`-translate-y-1/2 absolute backdrop-blur-[10px] bg-[var(--color\/alpha\/white\/800,rgba(255,255,255,0.6))] content-stretch flex h-[36px] items-center justify-center px-[12px] right-0 rounded-[26px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] top-[calc(50%+0.5px)] `}${is ? "z-[3]" : "z-[2]"}`} id={is ? "node-709_9468" : "node-709_8299"} data-name="更多">
              <ChevronRight className="relative shrink-0 size-[12px]" />
            </div>
          )}
          {["左右滚动中间态", "左右滚动最右态"].includes(property1) && (
            <div className={`-translate-y-1/2 absolute flex h-[36px] items-center justify-center right-[591px] top-[calc(50%+0.5px)] ${is1 ? "z-[3]" : "z-[2]"}`} id={is1 ? "node-709_9608" : "node-709_9576"}>
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="backdrop-blur-[10px] bg-[var(--color\/alpha\/white\/800,rgba(255,255,255,0.6))] content-stretch flex h-[36px] items-center justify-center px-[12px] relative rounded-[26px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]" data-name="更多">
                  <ChevronRight className="relative shrink-0 size-[12px]" />
                </div>
              </div>
            </div>
          )}
          {isOr && (
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px relative z-[1]" id={is ? "node-709_9469" : "node-709_8300"} data-name="楼层">
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9471" : "node-709_8381"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 9">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9472" : "node-709_8382"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9472-8400_41133" : "node-I709_8382-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-104px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9478" : "node-709_8459"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 10">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9479" : "node-709_8460"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9479-8400_41133" : "node-I709_8460-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-208px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9485" : "node-709_8471"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 11">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9486" : "node-709_8472"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9486-8400_41133" : "node-I709_8472-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-312px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9492" : "node-709_8483"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 12">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9493" : "node-709_8484"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9493-8400_41133" : "node-I709_8484-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-416px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9499" : "node-709_8495"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 13">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9500" : "node-709_8496"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9500-8400_41133" : "node-I709_8496-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-520px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9506" : "node-709_8519"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 15">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9507" : "node-709_8520"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9507-8400_41133" : "node-I709_8520-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-624px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9513" : "node-709_8507"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 14">
                <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" id={is ? "node-709_9514" : "node-709_8508"} data-name="不同数量尺寸展示逻辑">
                  <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is ? "node-I709_9514-8400_41133" : "node-I709_8508-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-728px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" id={is ? "node-709_9520" : "node-709_8309"} style={is ? { maskImage: `url("${imgTimelineClip10}")` } : { maskImage: `url("${imgTimelineClip9}")` }} data-name="Timeline Clip 02">
                <div className="bg-[#dbe4e7] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" id={is ? "node-709_9521" : "node-709_8310"} data-name="Background">
                  <div className="flex-[1_0_0] min-h-px relative w-full" id={is ? "node-709_9522" : "node-709_8311"} data-name="AB6AXuA0wdpqKCVTj60J5k2jvRTsn7dFXJ8oeOR0SRHrr6yRv6UZJxRfmOyl5mym76eW3U5b8M2ms2Oq9RPs5i8p1cSSqfhyVov2ezNlNFMu0-7Dh0Irgq-iEuBbrKd9ROD33G13A38M6S1_mmLsx--PBJJYHQNyZgFwlg0NcSbZXxFJeKq40zhYYrOt6j_mDFHo0m43BARnBJe1cZaOIHQ3oFj6dK1klFVc4NiwkKaBVSf8xJ_ARN2PXpHwQup-wjw9saVFWeou6HSVc4KP">
                    <div aria-hidden className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-contain size-full" src={imgAb6AXuA0WdpqKcvTj60J5K2JvRTsn7DFxj8OeOr0SrHrr6YRv6UzJxRfmOyl5Mym76EW3U5B8M2Ms2Oq9RPs5I8P1CSSqfhyVov2EzNlNfMu07Dh0IrgqIEuBbrKd9Rod33G13A38M6S1MmLsxPbjjyhqNyZgFwlg0NcSbZXxFJeKq40ZhYYrOt6JMDfHo0M43BaRnBJe1CZaOihq3OFj6DK1KlFVc4NiwkKaBvSf8XJArn2PXpHwQupWjw9SaVfWeou6HsVc4Kp} />
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgAb6AXuA0WdpqKcvTj60J5K2JvRTsn7DFxj8OeOr0SrHrr6YRv6UzJxRfmOyl5Mym76EW3U5B8M2Ms2Oq9RPs5I8P1CSSqfhyVov2EzNlNfMu07Dh0IrgqIEuBbrKd9Rod33G13A38M6S1MmLsxPbjjyhqNyZgFwlg0NcSbZXxFJeKq40ZhYYrOt6JMDfHo0M43BaRnBJe1CZaOihq3OFj6DK1KlFVc4NiwkKaBvSf8XJArn2PXpHwQupWjw9SaVfWeou6HsVc4Kp1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {is1 && (
            <>
              <div className="-translate-y-1/2 absolute backdrop-blur-[10px] bg-[var(--color\/alpha\/white\/900,rgba(255,255,255,0.8))] content-stretch flex gap-[2px] h-[36px] items-center justify-center pl-[16px] pr-[12px] right-[5px] rounded-[26px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)] top-[calc(50%+0.5px)] z-[2]" data-node-id="709:9784" data-name="更多">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Regular'] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[11px] text-black text-ellipsis whitespace-nowrap" data-node-id="I709:9784;2424:4334">
                  <p className="leading-[16px] overflow-hidden text-ellipsis">查看更多</p>
                </div>
                <ChevronRight className="relative shrink-0 size-[12px]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center justify-end min-w-px relative z-[1]" data-node-id="709:9609" data-name="楼层">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-11px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9611" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 9">
                  <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" data-node-id="709:9612" data-name="不同数量尺寸展示逻辑">
                    <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" data-node-id="I709:9612;8400:41133" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-115px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9618" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 10">
                  <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" data-node-id="709:9619" data-name="不同数量尺寸展示逻辑">
                    <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" data-node-id="I709:9619;8400:41133" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-219px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9625" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 11">
                  <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" data-node-id="709:9626" data-name="不同数量尺寸展示逻辑">
                    <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" data-node-id="I709:9626;8400:41133" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-323px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9632" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 12">
                  <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" data-node-id="709:9633" data-name="不同数量尺寸展示逻辑">
                    <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" data-node-id="I709:9633;8400:41133" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-427px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9639" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 13">
                  <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px px-[8px] py-[12px] relative rounded-[14px] w-full" data-node-id="709:9640" data-name="不同数量尺寸展示逻辑">
                    <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" data-node-id="I709:9640;8400:41133" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] h-full items-start mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-531px_-4px] mask-size-[627px_147px] relative shrink-0 w-[96px]" data-node-id="709:9765" style={{ maskImage: `url("${imgTimelineClip11}")` }} data-name="Timeline Clip 15">
                  <div className="bg-[rgba(0,0,0,0.02)] border-[0.5px] border-[rgba(0,0,0,0.02)] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" data-node-id="709:9766" data-name="不同数量尺寸展示逻辑">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[69.519px] items-center justify-center left-[calc(50%-0.44px)] top-[calc(50%-0.33px)] w-[43.821px]" data-node-id="I709:9766;10509:59415">
                      <div className="flex-none rotate-6">
                        <div className="h-[66px] relative rounded-[6px] w-[37.125px]" data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[6px]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                            <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone3} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center relative shrink-0 size-[57.92px]" data-node-id="I709:9766;10509:59410">
                      <div className="-rotate-2 flex-none">
                        <div className="relative rounded-[6px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.16)] size-[56px]" data-name="1:1">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={img11} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
