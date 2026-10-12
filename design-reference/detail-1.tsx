const assetPathPrefix = "/figma-components";
const imgIconXMarkBold = `${assetPathPrefix}/1941c.svg`;
const imgFrame2131175943 = `${assetPathPrefix}/4ab24.svg`;
const imgEllipse65692952 = `${assetPathPrefix}/41848.svg`;

type ComponentProps = {
  className?: string;
  property1?: "已上传";
};

function Component({ className, property1 = "已上传" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[241px]"} data-node-id="437:40497">
      <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-full" data-node-id="437:40498">
        <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-full" data-node-id="437:40550">
          <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[2px] h-full items-center justify-center min-w-px overflow-clip relative rounded-[16px]" data-node-id="437:40551" data-name="输入框 Input">
            <div className="absolute bg-[var(--fill\/transparent\/secondary\/regular,rgba(72,72,73,0.04))] content-stretch flex items-center p-[4px] right-[8px] rounded-[16px] top-[8px]" data-node-id="437:40554" data-name="特殊关闭">
              <div className="relative shrink-0 size-[8px]" data-node-id="437:40555" data-name="Icon/X_Mark_Bold">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconXMarkBold} />
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
