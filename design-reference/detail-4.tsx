const assetPathPrefix = "/figma-components";
const imgIconNameCanva = `${assetPathPrefix}/53311.svg`;
const imgIconNameUpload = `${assetPathPrefix}/f6019.svg`;
const imgPanelRightOpen = `${assetPathPrefix}/977de.svg`;
const img24X24 = `${assetPathPrefix}/f7d62.svg`;
const imgIconCollapseSm = `${assetPathPrefix}/db575.svg`;
const imgGroup2147239052 = `${assetPathPrefix}/cd81b.svg`;
const imgRectangle1746713799 = `${assetPathPrefix}/911d2.svg`;

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
  property1?: "生成中";
  propValue?: "true";
};

function Component({ className, property1 = "生成中", propValue = "true" }: ComponentProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col items-center overflow-clip relative rounded-[28px] w-[800px]"} data-node-id="437:40933">
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="708:3630" data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" data-node-id="708:3631">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-node-id="708:3632">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="708:3633">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="708:3637" data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="708:3638" data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" data-node-id="708:3639" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">脚本内容</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-node-id="708:3640" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="708:3641" data-name="Button">
              <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" iconName="upload" />
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="708:3643" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="708:3644" data-name="24x24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X24} />
              </div>
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-node-id="708:3645" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="708:3646" data-name="icon / collapse-sm">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCollapseSm} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[609px] items-center justify-center relative shrink-0 w-full" data-node-id="437:40967">
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
      </div>
    </div>
  );
}
