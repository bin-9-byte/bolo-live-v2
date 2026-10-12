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
  property1?: "生成完成";
  propValue?: "false";
};

function Component({ className, property1 = "生成完成", propValue = "false" }: ComponentProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.5)] border border-solid border-white content-stretch flex flex-col h-[305px] items-center overflow-clip relative rounded-[28px] w-[798px]"} data-node-id="437:40860">
      <div className="border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-b border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="437:39975" data-name="Header">
        <div className="flex-[1_0_0] min-w-px relative" data-node-id="437:39976">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="content-stretch flex items-start p-[4px] relative rounded-[8px] shrink-0" data-node-id="437:39977">
              <div className="flex items-center justify-center relative shrink-0" data-node-id="437:39978">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[16px]" data-name="panel-right-open">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPanelRightOpen} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="437:39982" data-name="Container">
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="437:39983" data-name="Heading 2">
                <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Semibold'] font-[590] h-[32px] justify-center leading-[0] relative shrink-0 text-[13px] text-[color:var(--text\/primary,black)] w-[226.05px]" data-node-id="437:39984" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[20px]">脚本内容</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-node-id="437:39985" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="437:39986" data-name="Button">
              <Component24X24 className="aspect-[20/20] relative shrink-0 w-full" iconName="upload" />
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="437:39988" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="708:3556" data-name="24x24">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img24X24} />
              </div>
            </div>
            <div className="bg-[var(--fill\/transparent\/secondary\/regular,rgba(0,0,0,0.02))] border border-[var(--border\/level-1,rgba(0,0,0,0.04))] border-solid content-stretch flex flex-col h-[32.49px] items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-node-id="437:39991" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="708:3549" data-name="icon / expand-sm">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconExpandSm} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pb-[16px] pt-[8px] px-[16px] relative w-full" data-node-id="709:7500">
        <div className="bg-[rgba(72,72,73,0.04)] content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px p-[16px] relative rounded-[24px] w-full" data-node-id="709:7501" data-name="Storyboard Item 1">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px overflow-x-clip overflow-y-auto relative" data-node-id="709:7506">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="709:7507">
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Bold'] font-bold justify-end leading-[0] min-w-full relative shrink-0 text-[color:var(--color-text-primary,#010401)] text-[length:var(--heading\/h2-cn\/fontsize,18px)] w-[min-content]" data-node-id="709:7508" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[var(--heading\/h2-cn\/lineheight,26px)]">H1-Title-18px-26px-700</p>
              </div>
              <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full" data-node-id="709:7520" data-name="分割线">
                <div className="bg-[var(--color\/divider\/primary,rgba(0,0,0,0.05))] flex-[1_0_0] h-px min-w-px relative" data-node-id="I709:7520;123:11996" />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Bold'] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[color:var(--color-text-primary,#010401)] tracking-[0.048px] w-[min-content]" data-node-id="709:7521">
                <p className="leading-[26px]">H2-Title2-16px-24px-700</p>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Regular'] font-[var(--font\/weight\/regular,400)] justify-end leading-[0] min-w-full relative shrink-0 text-[color:var(--color-text-primary,#010401)] text-[length:var(--en\/body-3-regular\/fontsize,14px)] w-[min-content]" data-node-id="709:7522" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[var(--en\/body-3-regular\/lineheight,20px)]">{`Paragraph-14px-22px-400. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. `}</p>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Bold'] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#010401)] tracking-[0.042px] w-[min-content]" data-node-id="709:7523">
                <p className="leading-[22px]">H3-Title3-14px-22px-700</p>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Regular'] font-[var(--font\/weight\/regular,400)] justify-end leading-[0] min-w-full relative shrink-0 text-[color:var(--color-text-primary,#010401)] text-[length:var(--en\/body-3-regular\/fontsize,14px)] w-[min-content]" data-node-id="709:7524" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[var(--en\/body-3-regular\/lineheight,20px)]">{`Paragraph-14px-22px-400. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. `}</p>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Regular'] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[color:var(--color-text-primary,#010401)] tracking-[0.039px] w-[min-content]" data-node-id="709:7525">
                <ul>
                  <li className="leading-[22px] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[#010401] text-[13px]">
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Bold'] not-italic tracking-[0.039px]">Point</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Bold'] not-italic tracking-[0.039px]">-13px-22px-700</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Bold'] not-italic tracking-[0.039px]">{` :`}</span>
                    <span>{` Here is content-13px-22px-400.`}</span>
                  </li>
                </ul>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Text:Regular'] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[color:var(--text\/base\/强调正文\@-1,#232938)] tracking-[0.039px] w-[min-content]" data-node-id="709:7526">
                <ul>
                  <li className="leading-[22px] list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[13px]">
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Bold'] not-italic text-[#010401] tracking-[0.039px]">Point 2:</span>
                    <span className="text-[#010401]">{` Here is`}</span>
                    <span>{` `}</span>
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['SF_Pro_Text:Regular_Italic'] italic text-[#286ffa] tracking-[0.039px] underline">{`LINK `}</span>
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['SF_Pro_Text:Regular_Italic'] italic text-[#286ffa] tracking-[0.039px] underline">LINK LINK</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full" data-node-id="709:7545">
              <div className="flex flex-col font-['SF_Pro_Text:Bold'] justify-end not-italic relative shrink-0 text-[18px] text-[color:var(--color-text-primary,#010401)] tracking-[0.054px] w-full" data-node-id="709:7546">
                <p className="leading-[28px]">Title-18px-26px-700</p>
              </div>
              <div className="border-[var(--line\/强化-描边\@-3,rgba(77,101,148,0.32))] border-l-2 border-solid content-stretch flex flex-col font-['SF_Pro_Text:Regular_Italic'] gap-[8px] italic items-start pl-[10px] relative shrink-0 text-[0px] text-[color:var(--text\/base\/次要信息\@-3,#747b8a)] tracking-[0.036px] w-full" data-node-id="709:7547">
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7548">
                  <p className="text-[12px]">
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content-12px-20px-400.</span>
                    <span className="leading-[20px]">{` Quote content Quote content`}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{` Quote content Quote content Quote content Quote content Quote content Quote content Quote content Quote content .`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7549">
                  <p className="text-[12px]">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{` Quote content Quote content Quote content Quote content Quote content Quote content`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7550">
                  <p className="text-[12px] whitespace-pre-wrap">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content Quote content Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{`  content Quote content Quote content Quote content Quote content`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7551">
                  <p className="text-[12px] whitespace-pre-wrap">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="leading-[20px]">{`Quote content Quote content Quote content `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{`  Quote content Quote content Quote content`}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-['SF_Pro_Text:Regular'] justify-end not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#010401)] tracking-[0.042px] w-full" data-node-id="709:7552">
                <p className="leading-[22px]">{`Paragraph-14px-22px-400. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. `}</p>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[0] pb-[16px] relative shrink-0 w-full" data-node-id="709:7553">
              <div className="flex flex-col font-['SF_Pro_Text:Bold'] justify-end not-italic relative shrink-0 text-[18px] text-[color:var(--color-text-primary,#010401)] tracking-[0.054px] w-full" data-node-id="709:7554">
                <p className="leading-[28px]">Title-18px-26px-700</p>
              </div>
              <div className="border-[var(--line\/强化-描边\@-3,rgba(77,101,148,0.32))] border-l-2 border-solid content-stretch flex flex-col font-['SF_Pro_Text:Regular_Italic'] gap-[8px] italic items-start pl-[10px] relative shrink-0 text-[0px] text-[color:var(--text\/base\/次要信息\@-3,#747b8a)] tracking-[0.036px] w-full" data-node-id="709:7555">
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7556">
                  <p className="text-[12px]">
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content-12px-20px-400.</span>
                    <span className="leading-[20px]">{` Quote content Quote content`}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{` Quote content Quote content Quote content Quote content Quote content Quote content Quote content Quote content .`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7557">
                  <p className="text-[12px]">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{` Quote content Quote content Quote content Quote content Quote content Quote content`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7558">
                  <p className="text-[12px] whitespace-pre-wrap">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content Quote content Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{`  content Quote content Quote content Quote content Quote content`}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-end relative shrink-0 w-full" data-node-id="709:7559">
                  <p className="text-[12px] whitespace-pre-wrap">
                    <span className="leading-[20px]">Quote content-12px-20px-400. Quote content</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px]">{` `}</span>
                    <span className="leading-[20px]">{`Quote content Quote content Quote content `}</span>
                    <span className="[word-break:break-word] font-['SF_Pro_Text:Medium_Italic'] italic leading-[20px] text-[#010401]">Quote content</span>
                    <span className="leading-[20px]">{`  Quote content Quote content Quote content`}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-['SF_Pro_Text:Regular'] justify-end not-italic relative shrink-0 text-[14px] text-[color:var(--color-text-primary,#010401)] tracking-[0.042px] w-full" data-node-id="709:7560">
                <p className="leading-[22px]">{`Paragraph-14px-22px-400. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. Paragraph 1 content. `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
