const assetPathPrefix = "/figma-components";
const imgIconNameUpload = `${assetPathPrefix}/f6019.svg`;
const imgAb6AXuDeW7Du3MYnlEEceGw7Es050XQfZdWs3Bd5VXru8N3WkElXwQcVx7Mz7MeFzPlKgYbv0LaFn9F1B8SCaaysdWkpfrMmlAz4JM4Jbi26PQaGlQyvJiuEScR5THsg1Kt2W9NgsBhIEjZsFlFr6GxAzq61Z1P0IlyFzbkghYCdANpO1SYnfcZx3YvruhxJlKndr0VhBz93Jsam0OA0BKjhk82VlcJsas2ZyJlqhsfbYXaTxG8WGwDEieQzUpEeJbIpFswMHk3MigpDo = `${assetPathPrefix}/36b68.png`;
const imgAb6AXuDeW7Du3MYnlEEceGw7Es050XQfZdWs3Bd5VXru8N3WkElXwQcVx7Mz7MeFzPlKgYbv0LaFn9F1B8SCaaysdWkpfrMmlAz4JM4Jbi26PQaGlQyvJiuEScR5THsg1Kt2W9NgsBhIEjZsFlFr6GxAzq61Z1P0IlyFzbkghYCdANpO1SYnfcZx3YvruhxJlKndr0VhBz93Jsam0OA0BKjhk82VlcJsas2ZyJlqhsfbYXaTxG8WGwDEieQzUpEeJbIpFswMHk3MigpDo1 = `${assetPathPrefix}/165da.png`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const imgContainer = `${assetPathPrefix}/81191.svg`;
const imgInfo = `${assetPathPrefix}/2bd1b.svg`;
const imgGroup2147239052 = `${assetPathPrefix}/cd81b.svg`;
const imgRectangle1746713799 = `${assetPathPrefix}/911d2.svg`;
const imgChevronDown = `${assetPathPrefix}/96785.svg`;

type Component24X24Props = {
  className?: string;
  iconName?: "upload";
};

function Component24X24({ className, iconName = "upload" }: Component24X24Props) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="369:46364">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconNameUpload} />
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
};

export default function Component({ className, property1 = "Default" }: ComponentProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  const isVariant2OrVariant3OrVariant4 = ["Variant2", "Variant3", "Variant4"].includes(property1);
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  return (
    <div className={className || `bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col items-center overflow-clip relative rounded-[28px] ${isVariant2OrVariant3OrVariant4 ? "" : "h-[305px] w-[798px]"}`} id={isVariant4 ? "node-437_40983" : isVariant3 ? "node-437_40933" : isVariant2 ? "node-437_40862" : "node-437_40860"}>
      <div className={`${String.raw`border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0 `}${isVariant2OrVariant3OrVariant4 ? "pb-[25px] pt-[24px] w-[798px]" : "pb-[13px] pt-[12px] w-full"}`} id={isVariant4 ? "node-437_40984" : isVariant3 ? "node-437_40934" : isVariant2 ? "node-437_40900" : "node-437_39975"} data-name="Header">
        <div className={`relative ${isVariant2OrVariant3OrVariant4 ? "h-[56px] rounded-[8px] shrink-0" : "flex-[1_0_0] min-w-px"}`} id={isVariant4 ? "node-437_40985" : isVariant3 ? "node-437_40935" : isVariant2 ? "node-437_40901" : "node-437_39976"}>
          <div className={`bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex relative size-full ${isVariant2OrVariant3OrVariant4 ? "items-start p-[4px]" : "gap-[8px] items-center"}`}>
            <div className={`flex relative shrink-0 ${isVariant2OrVariant3OrVariant4 ? "items-center justify-center" : "content-stretch items-start p-[4px] rounded-[8px]"}`} id={isVariant4 ? "node-437_40986" : isVariant3 ? "node-437_40936" : isVariant2 ? "node-437_40902" : "node-437_39977"}>
              <div className={isVariant2OrVariant3OrVariant4 ? "-scale-y-100 flex-none rotate-180" : "flex items-center justify-center relative shrink-0"} id={isDefault ? "node-437_39978" : undefined}>
                {isVariant2OrVariant3OrVariant4 && (
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                )}
                {isDefault && (
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="relative size-[16px]" data-name="panel-right-open">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isDefault && (
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="437:39982" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="437:39983" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" data-node-id="437:39984" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">脚本内容</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`relative ${isVariant2OrVariant3OrVariant4 ? "flex-[1_0_0] min-w-px" : "shrink-0"}`} id={isVariant4 ? "node-437_40990" : isVariant3 ? "node-437_40940" : isVariant2 ? "node-437_40906" : "node-437_39985"} data-name="Container">
          <div className={`bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full ${isVariant2OrVariant3OrVariant4 ? "flex-col" : ""}`}>
            {isVariant2OrVariant3OrVariant4 && (
              <>
                <div className="content-stretch flex items-start relative shrink-0 w-full" id={isVariant4 ? "node-437_40991" : isVariant3 ? "node-437_40941" : "node-437_40907"} data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-[color:var(--text\/primary,black)] w-[226.05px]" id={isVariant4 ? "node-437_40992" : isVariant3 ? "node-437_40942" : "node-437_40908"} style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[32px]">脚本内容</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[var(--spacing\/spacing-4,4px)] items-center relative shrink-0" id={isVariant4 ? "node-437_40993" : isVariant3 ? "node-437_40943" : "node-437_40909"}>
                  <div className="relative shrink-0 size-[16px]" id={isVariant4 ? "node-437_40994" : isVariant3 ? "node-437_40944" : "node-437_40910"} data-name="info">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
                  </div>
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--lvv-color\/text\&icon\/default\/placeholder,rgba(0,0,0,0.32))] text-center tracking-[0.0228px] whitespace-nowrap" id={isVariant4 ? "node-437_40995" : isVariant3 ? "node-437_40945" : "node-437_40911"}>
                    点击进行编辑，可以上传本地脚本、AI生成脚本
                  </p>
                </div>
              </>
            )}
            {isDefault && (
              <>
                <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="437:39986" data-name="Button">
                  <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" />
                </div>
                <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="437:39988" data-name="Button">
                  <div className="h-[12.5px] relative shrink-0 w-[14.167px]" data-node-id="437:39989" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                  </div>
                </div>
                <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-node-id="437:39991" data-name="Button">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:39992">
                    AI生成
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        {isVariant2OrVariant3OrVariant4 && (
          <div className="relative shrink-0" id={isVariant4 ? "node-437_40996" : isVariant3 ? "node-437_40946" : "node-437_40912"} data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
              <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" id={isVariant4 ? "node-437_40997" : isVariant3 ? "node-437_40947" : "node-437_40913"} data-name="Button">
                <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" />
              </div>
              <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" id={isVariant4 ? "node-437_40999" : isVariant3 ? "node-437_40949" : "node-437_40915"} data-name="Button">
                <div className="h-[12.5px] relative shrink-0 w-[14.167px]" id={isVariant4 ? "node-437_41000" : isVariant3 ? "node-437_40950" : "node-437_40916"} data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
              </div>
              <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" id={isVariant4 ? "node-437_41002" : isVariant3 ? "node-437_40952" : "node-437_40918"} data-name="Button">
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" id={isVariant4 ? "node-437_41003" : isVariant3 ? "node-437_40953" : "node-437_40919"}>
                  AI生成
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {["Default", "Variant2", "Variant3"].includes(property1) && (
        <div className={`content-stretch flex flex-col relative ${isVariant3 ? "h-[609px] items-center justify-center shrink-0 w-full" : isVariant2 ? "h-[620px] items-center justify-center p-[16px] shrink-0 w-[798px]" : "flex-[1_0_0] items-start min-h-px pb-[16px] pt-[8px] px-[16px] w-full"}`} id={isVariant3 ? "node-437_40967" : isVariant2 ? "node-437_40928" : "node-437_40047"}>
          {isDefault && (
            <div className="bg-[rgba(72,72,73,0.04)] content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px p-[16px] relative rounded-[24px] w-full" data-node-id="437:40030" data-name="Storyboard Item 1">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start justify-center min-w-px relative" data-node-id="437:40035" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#586064] text-[13px] w-[319.39px]" data-node-id="437:40036">
                  <p className="leading-[20px]">分镜01</p>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="437:40037" data-name="Container">
                  <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[40px] self-stretch shrink-0" data-node-id="437:40038" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] whitespace-nowrap" data-node-id="437:40039">
                      <p className="leading-[15px]">法律</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[40px] self-stretch shrink-0" data-node-id="437:40040" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] whitespace-nowrap" data-node-id="437:40041">
                      <p className="leading-[15px]">个债</p>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[40px] self-stretch shrink-0" data-node-id="437:40042" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.6)] whitespace-nowrap" data-node-id="437:40043">
                      <p className="leading-[15px]">镜头 · 3</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-node-id="437:40044" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="437:40045" data-name="text">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular'] font-normal h-full justify-center leading-[0] min-w-px overflow-hidden relative text-[13px] text-[rgba(0,0,0,0.72)] text-ellipsis" data-node-id="437:40046">
                      <p className="leading-[20px] mb-0">清晨的开阔训练场上，稀稀拉拉有几个学生在进行基础体能训练。镜头静止。环境音：远处传来几声零星的口跑步声。女1：穿正装，后面跟着2秘书（正装，带墨镜），抱着2个大快递箱</p>
                      <p className="leading-[20px] mb-0">女1：边走边口播（稳定器，镜头运动起来）：如果因为什么原因导致你还没用过京东，那你现在啊一定是用它的好时机！因为现在啊只要打开京东APP，一大袋猫牙米只要1分钱！（后期贴图）不信的话我们现场验证！</p>
                      <p className="leading-[20px] mb-0">男2：穿着工装带着帽子在工地干活，女1走过去问：请问你知道京东吗？</p>
                      <p className="leading-[20px] mb-0">男2：知道啊！</p>
                      <p className="leading-[20px] mb-0">女1：你现在点击视频下方链接1分钱就能买一大袋猫牙米</p>
                      <p className="leading-[20px]">男2：哇！真的是1分钱也！（拍屏）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isVariant2 && (
            <div className="bg-[rgba(0,0,0,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pt-[8px] px-[12px] relative rounded-[12px] w-full" data-node-id="437:40929" data-name="文本框">
              <div className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[0] min-h-px not-italic relative text-[12px] text-[color:var(--color-2,#a4a4a4)] w-full whitespace-pre-wrap" data-node-id="I437:40929;1861:68477">
                <p className="leading-[20px] mb-0">{`输入框占位符 `}</p>
                <p className="leading-[20px]">​</p>
              </div>
              <div className="h-[26px] relative shrink-0 w-full" data-node-id="I437:40929;1861:68478" data-name="bottom">
                <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular'] leading-[20px] not-italic right-[-4px] text-[#bfbfbf] text-[12px] text-right top-[calc(50%-10px)] whitespace-nowrap" data-node-id="I437:40929;1861:68479">
                  0 / 1000
                </p>
              </div>
            </div>
          )}
          {isVariant3 && (
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-node-id="437:40968">
              <div className="h-[56.639px] relative shrink-0 w-[40px]" data-node-id="437:40969">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2147239052} />
              </div>
              <div className="content-stretch flex flex-col gap-[var(--spacing\/spacing-4,4px)] items-center relative shrink-0" data-node-id="437:40973">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[normal] not-italic relative shrink-0 text-[18px] text-[color:var(--text\/primary,black)] text-center tracking-[0.0342px] whitespace-nowrap" data-node-id="437:40974">
                  信息分析中
                </p>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="437:40975" data-name="Component 260">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="437:40976" data-name="Mask group">
                    <div className="col-1 h-[24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.215px_6.608px] mask-size-[254.771px_12.805px] ml-[-0.5px] mt-[-2.32px] relative row-1 w-[257px]" data-node-id="437:40978" style={{ backgroundImage: "linear-gradient(-89.99999985500472deg, rgba(0, 0, 0, 0.4) 8.2297%, rgba(0, 0, 0, 0.2) 52.714%, rgba(0, 0, 0, 0.4) 102.98%)", maskImage: `url("${imgRectangle1746713799}")` }} />
                    <div className="col-1 h-[24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[247.715px_6.288px] mask-size-[254.771px_12.805px] ml-[-247px] mt-[-2px] relative row-1 w-[247px]" data-node-id="437:40979" style={{ backgroundImage: "linear-gradient(-89.99999986064651deg, rgba(0, 0, 0, 0.4) 8.2297%, rgba(0, 0, 0, 0.2) 52.714%, rgba(0, 0, 0, 0.4) 102.98%)", maskImage: `url("${imgRectangle1746713799}")` }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {isVariant4 && (
        <div className="content-stretch flex flex-col gap-[24px] h-[610px] items-start overflow-clip px-[40px] py-[32px] relative shrink-0 w-full" data-node-id="437:41025" data-name="Container">
          <div className="border-[var(--fill\/brand\/l4,#aa80ff)] border-l border-solid content-stretch flex flex-col gap-[12px] items-start pl-[25px] relative shrink-0 w-full" data-node-id="437:41026" data-name="Shot Block 01">
            <div className="relative shrink-0 w-full" data-node-id="437:41027" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="437:41028" data-name="Container">
                  <div className="bg-[var(--text\/primary,black)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="437:41029" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41030">
                      <p className="leading-[15px]">分镜 01</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="437:41031" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(27,28,28,0.4)] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41032">
                      <p className="leading-[15px]">4s</p>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative rounded-[7px] shrink-0" data-node-id="437:41033">
                      <div className="relative shrink-0 size-[8px]" data-node-id="437:41038" data-name="chevron_down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#e4f2dc] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="437:41039" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e5c18] text-[10px] tracking-[0.5px] uppercase w-[72.3px]" data-node-id="437:41040">
                    <p className="leading-[15px]">In Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-node-id="437:41041" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Light'] font-light justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] w-full" data-node-id="437:41042">
                  <p className="font-['PingFang_SC:Regular'] text-[14px] text-[rgba(0,0,0,0.6)]">
                    <span className="leading-[30.6px]">身着洗得发白的旧宫装，发髻松散，</span>
                    <span className="leading-[30.6px]">她蹲在地上，面部朝向地面，视线聚焦于地面，用一根枯枝在满是尘土的地上勾画着一幅精密的</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pl-[24px] relative shrink-0 w-full" data-node-id="437:41043" data-name="Shot Block 02">
            <div className="relative shrink-0 w-full" data-node-id="437:41044" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="437:41045" data-name="Container">
                  <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(0,0,0,0.04))] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="437:41046" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41047">
                      <p className="leading-[15px]">分镜 02</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="437:41048" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(27,28,28,0.4)] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41049">
                      <p className="leading-[15px]">4s</p>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative rounded-[7px] shrink-0" data-node-id="437:41050">
                      <div className="relative shrink-0 size-[8px]" data-node-id="437:41055" data-name="chevron_down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-node-id="437:41058" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] w-[min-content]" data-node-id="437:41059">
                  <p className="leading-[30.6px] whitespace-pre-wrap">{`提着食盒，一脸鄙夷地走近，他面部蹲在地上的                        视线轻蔑地扫过她和地上的画，用脚踢了踢地上的地图，随后打开食盒，拿出一个破碗直接将馊`}</p>
                </div>
                <div className="absolute bg-[var(--background\/panel\/primary,rgba(255,255,255,0.9))] border-[0.5px] border-[var(--border\/level-3,rgba(0,0,0,0.12))] border-solid content-stretch flex gap-[2px] h-[24px] items-center left-[300px] pl-[2px] pr-[8px] py-[2px] rounded-[8px] top-[3.41px]" data-node-id="437:41060" data-name="Background">
                  <div className="border-[0.5px] border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex items-start overflow-clip relative rounded-[6px] shrink-0 size-[20px]" data-node-id="437:41061">
                    <div className="flex-[1_0_0] h-[44.073px] min-w-px relative" data-node-id="437:41062" data-name="AB6AXuDE_W7DU3MYnlEEceGw7es050xQfZdWs3bd5vXru8n3WkElXWQcVx7MZ7MeFzPLKgYbv0_laFN9F1b8SCaaysdWKPFRMmlAZ4jM4JBI26pQAGlQyvJiuEScR5tHSG1KT2w9ngsBhIEjZsFlFr6GXAzq61z1p0ILYFzbkghYCdANpO1sYnfcZx3YvruhxJlKndr0VhBz93Jsam0oA0bKjhk82VlcJSAS2ZYJlqhsfbYXaTxG8wGwDEieQZUpEEJbIPFswMHk3MIGPDo">
                      <div aria-hidden className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 overflow-hidden">
                          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDeW7Du3MYnlEEceGw7Es050XQfZdWs3Bd5VXru8N3WkElXwQcVx7Mz7MeFzPlKgYbv0LaFn9F1B8SCaaysdWkpfrMmlAz4JM4Jbi26PQaGlQyvJiuEScR5THsg1Kt2W9NgsBhIEjZsFlFr6GxAzq61Z1P0IlyFzbkghYCdANpO1SYnfcZx3YvruhxJlKndr0VhBz93Jsam0OA0BKjhk82VlcJsas2ZyJlqhsfbYXaTxG8WGwDEieQzUpEeJbIpFswMHk3MigpDo} />
                        </div>
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAb6AXuDeW7Du3MYnlEEceGw7Es050XQfZdWs3Bd5VXru8N3WkElXwQcVx7Mz7MeFzPlKgYbv0LaFn9F1B8SCaaysdWkpfrMmlAz4JM4Jbi26PQaGlQyvJiuEScR5THsg1Kt2W9NgsBhIEjZsFlFr6GxAzq61Z1P0IlyFzbkghYCdANpO1SYnfcZx3YvruhxJlKndr0VhBz93Jsam0OA0BKjhk82VlcJsas2ZyJlqhsfbYXaTxG8WGwDEieQzUpEeJbIpFswMHk3MigpDo1} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41063">
                    <p className="leading-[15px]">林萧-良民</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start pl-[24px] relative shrink-0 w-full" data-node-id="437:41064" data-name="Shot Block 03">
            <div className="relative shrink-0 w-full" data-node-id="437:41065" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="437:41066" data-name="Container">
                  <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(0,0,0,0.04))] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="437:41067" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41068">
                      <p className="leading-[15px]">分镜 03</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="437:41069" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Bold'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(27,28,28,0.4)] tracking-[1px] uppercase whitespace-nowrap" data-node-id="437:41070">
                      <p className="leading-[15px]">4s</p>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[16px] items-center relative rounded-[7px] shrink-0" data-node-id="437:41071">
                      <div className="relative shrink-0 size-[8px]" data-node-id="437:41076" data-name="chevron_down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-node-id="437:41077" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] w-full" data-node-id="437:41078">
                  <p className="leading-[30.6px]">用脚踢了踢地上的地图，随后打开食盒，拿出一个破碗直接将馊，面部朝向地面，视线聚焦于地面，用一根枯枝在满是尘土的地上勾画着一幅精密的面部朝向地面，视线聚焦于地面，用一根枯枝在满是尘土的地上勾画着一幅精密的</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
