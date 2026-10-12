const assetPathPrefix = "/figma-components";
const imgIconNameCanva = `${assetPathPrefix}/53311.svg`;
const imgIconNameUpload = `${assetPathPrefix}/f6019.svg`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const img24X24 = `${assetPathPrefix}/f7d62.svg`;
const imgIconExpandSm = `${assetPathPrefix}/ba67c.svg`;

type Component24X24Props = {
  className?: string;
  iconName?: "canva" | "upload";
};

function Component24X24({ className, iconName = "canva" }: Component24X24Props) {
  const isUpload = iconName === "upload";
  return (
    <div className={className || "relative size-[20px]"} id={isUpload ? "node-369_46364" : "node-369_46269"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isUpload ? imgIconNameUpload : imgIconNameCanva} />
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "无内容";
  propValue?: "false";
};

function Component({ className, property1 = "无内容", propValue = "false" }: ComponentProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col h-[305px] items-center overflow-clip relative rounded-[28px] w-[798px]"} data-node-id="709:9924">
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="709:9925" data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" data-node-id="709:9926">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-node-id="709:9927">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="709:9928">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="709:9932" data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="709:9933" data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" data-node-id="709:9934" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">脚本内容</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-node-id="709:9935" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="709:9936" data-name="Button">
              <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" iconName="upload" />
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="709:9938" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="709:9939" data-name="24x24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X24} />
              </div>
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-node-id="709:9940" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="709:9941" data-name="icon / expand-sm">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconExpandSm} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pb-[16px] pt-[8px] px-[16px] relative w-full" data-node-id="709:9942">
        <div className="bg-[rgba(72,72,73,0.04)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px p-[16px] relative rounded-[24px] w-full" data-node-id="709:10009" data-name="文本框">
          <div className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[0] min-h-px not-italic relative text-[12px] text-[color:var(--color-2,#a4a4a4)] w-full whitespace-pre-wrap" data-node-id="I709:10009;1861:68477">
            <p className="leading-[20px] mb-0">{`输入框占位符 `}</p>
            <p className="leading-[20px]">​</p>
          </div>
          <div className="h-[26px] relative shrink-0 w-full" data-node-id="I709:10009;1861:68478" data-name="bottom">
            <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular'] leading-[20px] not-italic right-[-4px] text-[#bfbfbf] text-[12px] text-right top-[calc(50%-10px)] whitespace-nowrap" data-node-id="I709:10009;1861:68479">
              0 / 1000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
