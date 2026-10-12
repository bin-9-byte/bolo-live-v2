const assetPathPrefix = "/figma-components";
const imgIconNameFiles = `${assetPathPrefix}/4c8f8.svg`;
const imgIconNameUpload = `${assetPathPrefix}/f6019.svg`;
const img24X24 = `${assetPathPrefix}/e8748.svg`;
const img24X25 = `${assetPathPrefix}/694c4.svg`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const imgAdd16 = `${assetPathPrefix}/db7b7.svg`;
const img24X26 = `${assetPathPrefix}/f7d62.svg`;
const imgVuesaxLinearImport = `${assetPathPrefix}/f3690.svg`;
const imgOutlineVideoAudioSoundSoundwave = `${assetPathPrefix}/432a9.svg`;

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
  property1?: "默认";
};

function Component({ className, property1 = "默认" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[241px]"} data-node-id="437:40392">
      <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-full" data-node-id="437:40373">
        <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-node-id="437:40374">
          <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[8px] h-[60px] items-center justify-center min-w-px overflow-clip px-[12px] py-[10px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[4px]" data-node-id="437:40375" data-name="输入框 Input">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40378" data-name="Text wrapper">
              <div className="relative shrink-0 size-[16px]" data-node-id="708:3497" data-name="24x24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X24} />
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40384">{`上传 `}</p>
            </div>
          </div>
          <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[8px] h-[60px] items-center justify-center min-w-px overflow-clip px-[12px] py-[10px] relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]" data-node-id="437:40385" data-name="输入框 Input">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40388" data-name="Text wrapper">
              <div className="relative shrink-0 size-[20px]" data-node-id="708:3523" data-name="24x24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X25} />
              </div>
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40390">
                音色库
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "默认" | "人物hover";
};

export default function Component1({ className, property1 = "默认" }: Component1Props) {
  const is = property1 === "默认";
  const ishover = property1 === "人物hover";
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col items-center overflow-clip relative rounded-[28px]"} id={ishover ? "node-437_40695" : "node-437_40614"}>
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" id={ishover ? "node-437_40696" : "node-437_40575"} data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" id={ishover ? "node-437_40697" : "node-437_40576"}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" id={ishover ? "node-437_40698" : "node-437_40577"}>
              <div className="flex items-center justify-center relative shrink-0" id={ishover ? "node-437_40699" : "node-437_40578"}>
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" id={ishover ? "node-437_40703" : "node-437_40582"} data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" id={ishover ? "node-437_40704" : "node-437_40583"} data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] min-w-px relative text-[13px] text-[color:var(--text\/primary,black)]" id={ishover ? "node-437_40705" : "node-437_40584"} style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">人物与音色</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative shrink-0 ${ishover ? "" : "gap-[8px]"}`} id={ishover ? "node-437_40706" : "node-433_36260"}>
        {is && (
          <>
            <div className="content-stretch flex flex-col gap-[4px] h-[237px] items-center justify-center relative shrink-0 w-[241px]" data-node-id="433:36261" data-name="把手">
              <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" data-node-id="433:36262" data-name="不同数量尺寸展示逻辑">
                <div className="relative shrink-0 size-[20px]" data-node-id="I433:36262;10322:63900" data-name="Add_16">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAdd16} />
                </div>
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" data-node-id="I433:36262;8559:38416" data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" data-node-id="I433:36262;8559:38416;8559:38411">
                    人物
                  </p>
                </div>
              </div>
            </div>
            <Component className="content-stretch flex flex-col items-start relative shrink-0 w-[241px]" />
          </>
        )}
        {ishover && (
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="437:40782">
            <div className="content-stretch flex flex-col gap-[4px] h-[237px] items-center justify-center relative shrink-0 w-[241px]" data-node-id="437:40783" data-name="把手">
              <div className="bg-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-[0.5px] border-[var(--color\/alpha\/black\/100,rgba(0,0,0,0.02))] border-solid content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px py-[14px] relative rounded-[14px] w-full" data-node-id="437:40784" data-name="不同数量尺寸展示逻辑">
                <div className="absolute backdrop-blur-[1px] bg-[var(--color\/alpha\/black\/200,rgba(0,0,0,0.04))] content-stretch flex flex-col inset-[-0.5px] items-center justify-center rounded-[14px]" data-node-id="437:40786" data-name="特殊状态蒙层" />
                <div className="absolute bg-[var(--color\/alpha\/gray\/950,rgba(38,38,38,0.9))] content-stretch flex h-[16px] items-center justify-center left-[5.5px] px-[6px] py-px rounded-[21px] top-[5.5px]" data-node-id="437:40787" data-name="素材标记">
                  <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[15px] not-italic relative shrink-0 text-[10px] text-[color:var(--fill\/white\/regular,white)] text-center whitespace-nowrap" data-node-id="I437:40787;8559:38411">
                    人物
                  </p>
                </div>
                <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 px-[8px] top-[56.5px]" data-node-id="437:40819">
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40820" data-name="antd_button">
                    <Component24X24 className="relative shrink-0 size-[16px]" iconName="upload" />
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40826">
                      <p className="leading-[1.4]">上传</p>
                    </div>
                  </div>
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40827" data-name="antd_button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="437:40854" data-name="24x24">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X26} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40835">
                      <p className="leading-[1.4]">AI生成</p>
                    </div>
                  </div>
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] border border-[var(--border\/level-4,white)] border-solid content-stretch flex gap-[5px] h-[36px] items-center justify-center min-w-[56px] px-[var(--radius\/16,17px)] py-[7px] relative rounded-[var(--font-size\/1750,80px)] shrink-0 w-full" data-node-id="437:40845" data-name="antd_button">
                    <Component24X24 className="relative shrink-0 size-[16px]" />
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/primary,black)] text-center whitespace-nowrap" data-node-id="437:40851">
                      <p className="leading-[1.4]">资产库</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[241px]" data-node-id="437:40797">
              <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-full" data-node-id="437:40798">
                <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-node-id="437:40799">
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[8px] h-[60px] items-center justify-center min-w-px overflow-clip px-[12px] py-[10px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[4px]" data-node-id="437:40800" data-name="输入框 Input">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40803" data-name="Text wrapper">
                      <div className="flex items-center justify-center relative shrink-0" data-node-id="437:40804">
                        <div className="-scale-y-100 flex-none">
                          <div className="relative size-[20px]" data-name="vuesax/linear/import">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearImport} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40809">{`上传 `}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[8px] h-[60px] items-center justify-center min-w-px overflow-clip px-[12px] py-[10px] relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]" data-node-id="437:40810" data-name="输入框 Input">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40813" data-name="Text wrapper">
                      <div className="relative shrink-0 size-[20px]" data-node-id="437:40814" data-name="Outline / Video, Audio, Sound / Soundwave">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOutlineVideoAudioSoundSoundwave} />
                      </div>
                      <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40815">
                        音色库
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
