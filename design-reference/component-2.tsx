const assetPathPrefix = "/figma-components";
const imgVuesaxLinearImport = `${assetPathPrefix}/f3690.svg`;
const imgOutlineVideoAudioSoundSoundwave = `${assetPathPrefix}/432a9.svg`;
const imgOutlineVideoAudioSoundSoundwave1 = `${assetPathPrefix}/f9a92.svg`;
const imgIconXMarkBold = `${assetPathPrefix}/1941c.svg`;
const imgFrame2131175943 = `${assetPathPrefix}/4ab24.svg`;
const imgEllipse65692952 = `${assetPathPrefix}/41848.svg`;

type ComponentProps = {
  className?: string;
  property1?: "默认" | "上传中" | "已上传";
};

export default function Component({ className, property1 = "默认" }: ComponentProps) {
  const is = property1 === "上传中";
  const is1 = property1 === "已上传";
  const is2 = property1 === "默认";
  const isOr = ["上传中", "已上传"].includes(property1);
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[241px]"} id={is1 ? "node-437_40497" : is ? "node-437_40394" : "node-437_40392"}>
      <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-full" id={is1 ? "node-437_40498" : is ? "node-437_40395" : "node-437_40373"}>
        <div className={`content-stretch flex items-start relative shrink-0 ${is1 ? "h-[60px] w-full" : is ? "h-[60px] w-[233px]" : "gap-[2px] w-full"}`} id={is1 ? "node-437_40550" : is ? "node-437_40473" : "node-437_40374"}>
          <div className={`${String.raw`bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative `}${isOr ? "gap-[2px] h-full rounded-[16px]" : "gap-[8px] h-[60px] px-[12px] py-[10px] rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[4px]"}`} id={is1 ? "node-437_40551" : is ? "node-437_40474" : "node-437_40375"} data-name="输入框 Input">
            {is2 && (
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40378" data-name="Text wrapper">
                <div className="flex items-center justify-center relative shrink-0" data-node-id="437:40379">
                  <div className="-scale-y-100 flex-none">
                    <div className="relative size-[20px]" data-name="vuesax/linear/import">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxLinearImport} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40384">{`上传 `}</p>
              </div>
            )}
            {is && (
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="437:40477">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="437:40478" data-name="Text wrapper">
                  <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] overflow-clip relative rounded-[28.8px] shrink-0 size-[32px]" data-node-id="437:40479" data-name="图片">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.2px] top-[calc(50%+0.4px)]" data-node-id="437:40480" data-name="Outline / Video, Audio, Sound / Soundwave">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOutlineVideoAudioSoundSoundwave1} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-node-id="437:40483">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="437:40484">
                      <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[12px] text-black text-ellipsis tracking-[0.0804px] w-full whitespace-nowrap" data-node-id="437:40485">
                        音色上传中...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isOr && (
              <div className="absolute bg-[var(--fill\/transparent\/secondary\/regular,rgba(72,72,73,0.04))] content-stretch flex items-center p-[4px] right-[8px] rounded-[16px] top-[8px]" id={is1 ? "node-437_40554" : "node-437_40492"} data-name="特殊关闭">
                <div className="relative shrink-0 size-[8px]" id={is1 ? "node-437_40555" : "node-437_40493"} data-name="Icon/X_Mark_Bold">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconXMarkBold} />
                </div>
              </div>
            )}
            {is1 && (
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pl-[12px] pr-[28px] relative" data-node-id="437:40556">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="437:40557" data-name="Text wrapper">
                  <div className="overflow-clip relative rounded-[36px] shrink-0 size-[32px]" data-node-id="437:40558" data-name="图片">
                    <div className="absolute bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] left-0 rounded-[2px] size-[32px] top-[0.5px]" data-node-id="437:40559" />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-[calc(50%+0.5px)]" data-node-id="437:40560">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2131175943} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="437:40564">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="437:40565">
                      <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[12px] text-black text-ellipsis tracking-[0.0804px] w-full whitespace-nowrap" data-node-id="437:40566">
                        清透年轻女声
                      </p>
                      <div className="content-stretch flex flex-col h-[12px] items-start py-[4px] relative shrink-0 w-full" data-node-id="437:40567">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="437:40568">
                          <div className="bg-[var(--lvv-color\/fill\/transparency\/block,rgba(0,0,0,0.05))] content-stretch flex h-[3px] items-center relative rounded-[2px] shrink-0 w-full" data-node-id="437:40569">
                            <div className="bg-black h-[3px] mr-[-2px] relative rounded-[11px] shrink-0 w-[41px]" data-node-id="437:40570" />
                            <div className="relative shrink-0 size-[10px]" data-node-id="437:40571">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse65692952} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {is2 && (
            <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[8px] h-[60px] items-center justify-center min-w-px overflow-clip px-[12px] py-[10px] relative rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]" data-node-id="437:40385" data-name="输入框 Input">
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="437:40388" data-name="Text wrapper">
                <div className="relative shrink-0 size-[20px]" data-node-id="437:40389" data-name="Outline / Video, Audio, Sound / Soundwave">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOutlineVideoAudioSoundSoundwave} />
                </div>
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] tracking-[0.0804px] whitespace-nowrap" data-node-id="437:40390">
                  音色库
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
