const assetPathPrefix = "/figma-components";
const imgIconNameFiles = `${assetPathPrefix}/4c8f8.svg`;
const imgIconNameUpload = `${assetPathPrefix}/f6019.svg`;
const imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2 = `${assetPathPrefix}/13e93.png`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const imgContainer = `${assetPathPrefix}/81191.svg`;
const imgAdd16 = `${assetPathPrefix}/db7b7.svg`;
const imgMinus = `${assetPathPrefix}/bd920.svg`;
const img24X24 = `${assetPathPrefix}/f7d62.svg`;

type Component24X24Props = {
  className?: string;
  iconName?: "files" | "upload";
};

function Component24X24({ className, iconName = "files" }: Component24X24Props) {
  const isUpload = iconName === "upload";
  return (
    <div className={className || "relative size-[20px]"} id={isUpload ? "node-369_46364" : "node-369_46128"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isUpload ? imgIconNameUpload : imgIconNameFiles} />
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "默认" | "hover" | "已上传" | "删除上传图片";
};

export default function Component({ className, property1 = "默认" }: ComponentProps) {
  const is = property1 === "已上传";
  const is1 = property1 === "删除上传图片";
  const is2 = property1 === "默认";
  const isHover = property1 === "hover";
  const isOr = ["已上传", "删除上传图片"].includes(property1);
  const isOrOr = ["默认", "已上传", "删除上传图片"].includes(property1);
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col h-[305px] items-center overflow-clip relative rounded-[28px] w-[460px]"} id={isHover ? "node-437_40181" : is1 ? "node-437_40322" : is ? "node-437_40227" : "node-437_40179"}>
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" id={isHover ? "node-437_40182" : is1 ? "node-437_40323" : is ? "node-437_40228" : "node-437_39910"} data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" id={isHover ? "node-437_40183" : is1 ? "node-437_40324" : is ? "node-437_40229" : "node-437_39973"}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" id={isHover ? "node-437_40184" : is1 ? "node-437_40325" : is ? "node-437_40230" : "node-437_39911"}>
              <div className="flex items-center justify-center relative shrink-0" id={isHover ? "node-437_40185" : is1 ? "node-437_40326" : is ? "node-437_40231" : "node-437_39912"}>
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" id={isHover ? "node-437_40189" : is1 ? "node-437_40330" : is ? "node-437_40235" : "node-437_39916"} data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" id={isHover ? "node-437_40190" : is1 ? "node-437_40331" : is ? "node-437_40236" : "node-437_39917"} data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" id={isHover ? "node-437_40191" : is1 ? "node-437_40332" : is ? "node-437_40237" : "node-437_39918"} style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">背景场景</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" id={isHover ? "node-437_40192" : is1 ? "node-437_40333" : is ? "node-437_40238" : "node-437_39922"} data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" id={isHover ? "node-437_40193" : is1 ? "node-437_40334" : is ? "node-437_40239" : "node-437_39923"} data-name="Button">
              <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" iconName="upload" />
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" id={isHover ? "node-437_40195" : is1 ? "node-437_40336" : is ? "node-437_40241" : "node-437_39925"} data-name="Button">
              <div className="h-[12.5px] relative shrink-0 w-[14.167px]" id={isHover ? "node-437_40196" : is1 ? "node-437_40337" : is ? "node-437_40242" : "node-437_39926"} data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" id={isHover ? "node-437_40198" : is1 ? "node-437_40339" : is ? "node-437_40244" : "node-437_39928"} data-name="Button">
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[normal] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" id={isHover ? "node-437_40199" : is1 ? "node-437_40340" : is ? "node-437_40245" : "node-437_39929"}>
                AI生成
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px pb-[16px] pt-[8px] px-[16px] relative w-full" id={isHover ? "node-437_40200" : is1 ? "node-437_40341" : is ? "node-437_40246" : "node-437_39947"}>
        {isOrOr && (
          <div className={`${String.raw`bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] h-full items-center justify-center min-w-px relative rounded-[14px] `}${isOr ? "px-[8px] py-[12px]" : "py-[14px]"}`} id={is1 ? "node-437_40342" : is ? "node-437_40247" : "node-437_39948"} data-name="不同数量尺寸展示逻辑">
            {isOr && (
              <>
                <div className="aspect-[9/16] h-full relative rounded-[6px] shrink-0" id={is1 ? "node-I437_40342-8400_41133" : "node-I437_40247-8400_41133"} data-name="Board to Pin • Instagram in 2025  Iphone mockup, Mockup design, Phone 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full" src={imgBoardToPinInstagramIn2025IphoneMockupMockupDesignPhone2} />
                </div>
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" id={is1 ? "node-I437_40342-8573_20594" : "node-I437_40247-8573_20594"} data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" id={is1 ? "node-I437_40342-8573_20594-8559_38411" : "node-I437_40247-8573_20594-8559_38411"}>
                    背景
                  </p>
                </div>
              </>
            )}
            {is2 && (
              <>
                <div className="relative shrink-0 size-[20px]" data-node-id="I437:39948;10322:63900" data-name="Add_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd16} />
                </div>
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" data-node-id="I437:39948;8559:38416" data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" data-node-id="I437:39948;8559:38416;8559:38411">
                    背景
                  </p>
                </div>
              </>
            )}
            {is1 && (
              <div className="absolute backdrop-blur-[27px] bg-[var(--color\/alpha\/black\/700,rgba(0,0,0,0.4))] content-stretch flex items-center p-[2px] right-[-0.5px] rounded-[24px] top-[-4.17px]" data-node-id="I437:40342;10509:77355" data-name="特殊关闭">
                <div className="relative shrink-0 size-[10px]" data-node-id="I437:40342;10509:77356" data-name="minus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
                </div>
              </div>
            )}
          </div>
        )}
        <div className={`content-stretch flex flex-col gap-[4px] h-full items-center justify-center relative ${isHover ? "shrink-0 w-[210px]" : "flex-[1_0_0] min-w-px"}`} id={isHover ? "node-437_40273" : is1 ? "node-437_40343" : is ? "node-437_40248" : "node-437_39949"} data-name="把手">
          <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" id={isHover ? "node-437_40274" : is1 ? "node-437_40344" : is ? "node-437_40249" : "node-437_39950"} data-name="不同数量尺寸展示逻辑">
            {isOrOr && (
              <>
                <div className="relative shrink-0 size-[20px]" id={is1 ? "node-I437_40344-10322_63900" : is ? "node-I437_40249-10322_63900" : "node-I437_39950-10322_63900"} data-name="Add_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd16} />
                </div>
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" id={is1 ? "node-I437_40344-8559_38416" : is ? "node-I437_40249-8559_38416" : "node-I437_39950-8559_38416"} data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" id={is1 ? "node-I437_40344-8559_38416-8559_38411" : is ? "node-I437_40249-8559_38416-8559_38411" : "node-I437_39950-8559_38416-8559_38411"}>
                    车型
                  </p>
                </div>
              </>
            )}
            {isHover && (
              <>
                <div className="absolute backdrop-blur-[1px] bg-[var(--color\/alpha\/black\/200,rgba(0,0,0,0.04))] content-stretch flex flex-col inset-[-0.5px_-0.5px_-0.99px_-0.5px] items-center justify-center rounded-[14px]" data-node-id="437:40276" data-name="特殊状态蒙层" />
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" data-node-id="437:40277" data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" data-node-id="I437:40277;8559:38411">
                    背景
                  </p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-0.5px)] px-[8px] top-[calc(50%+0.25px)]" data-node-id="437:40281">
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40282" data-name="antd_button">
                    <Component24X24 className="relative shrink-0 size-[16px]" iconName="upload" />
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40284">
                      <p className="leading-[1.4]">本地上传</p>
                    </div>
                  </div>
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40285" data-name="antd_button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="437:40286" data-name="24x24">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X24} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40287">
                      <p className="leading-[1.4]">AI生成</p>
                    </div>
                  </div>
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40297" data-name="antd_button">
                    <Component24X24 className="relative shrink-0 size-[16px]" />
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40299">
                      <p className="leading-[1.4]">资产库</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {isHover && (
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-center min-w-px relative" data-node-id="437:40202" data-name="把手">
            <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" data-node-id="437:40203" data-name="不同数量尺寸展示逻辑">
              <div className="relative shrink-0 size-[20px]" data-node-id="I437:40203;10322:63900" data-name="Add_16">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd16} />
              </div>
              <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" data-node-id="I437:40203;8559:38416" data-name="素材标记">
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" data-node-id="I437:40203;8559:38416;8559:38411">
                  车型
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
